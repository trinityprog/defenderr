<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Product;
use App\Models\ProductImage;
use App\Services\PriceService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cookie;

class CartController extends Controller
{
    public function __construct()
    {
        \Cart::session(Cookie::get('guest-cart-token') ?? uniqid());
    }

    public function add(Request $request)
    {
        $exists = \Cart::getContent()->filter(fn($q) => $q->attributes->product_id === $request->input('product_id'))->first();
        if ($exists)
            return response()->json([
                'status' => 'success',
                'message' => 'Item already exists in the cart!',
                'id' => $exists->id,
            ]);

        $product = Product::query()->joinPrice()->findOrFail($request->input('product_id'));
        $rowId = uniqid();

        \Cart::add([
            'id' => $rowId,
            'name' => $product->name,
            'price' => $product->price_value,
            'quantity' => $request->input('qty'),
            'attributes' => [
                'option' => $request->input('option'),
                'product_id' => $product->id,
                'imagePath' => $product->images->where('for', ProductImage::FOR_CARD)->first()->imagePath,
                'slug' => $product->slug,
                'priceWithSymbol' => $product->priceWithSymbol
            ],
        ]);

        return response()->json([
            'status' => 'success',
            'message' => 'Item successfully added in cart!',
            'id' => $rowId,
            'count' => \Cart::getContent()->count()
        ]);
    }

    public function remove(Request $request)
    {
        \Cart::remove($request->input('row_id'));

        return response()->json([
            'status' => 'success',
            'message' => 'Item successfully remove from cart!'
        ]);
    }

    public function updatePrices()
    {
        $products = Product::query()
            ->joinPrice()
            ->with('images', fn($q) => $q->where('for', ProductImage::FOR_CARD))
            ->whereIn('slug', \Cart::getContent()->pluck('attributes.slug'))
            ->get();

        \Cart::getContent()->each(function ($item) use ($products) {
            $product = $products->where('slug', $item->attributes->slug)->first();
            \Cart::update($item->id, [
                'price' => $product->price_value,
                'attributes' => [
                    'option' => $item->attributes->option,
                    'product_id' => $product->id,
                    'imagePath' => $product->images->where('for', ProductImage::FOR_CARD)->first()->imagePath,
                    'slug' => $product->slug,
                    'priceWithSymbol' => $product->priceWithSymbol
                ]
            ]);
        });
    }

    public function getContent()
    {
        $this->updatePrices();
        $service = new PriceService();
        $formatted = $service->priceWithSymbol(\Cart::getTotal());
        return response()->json([
            'data' => [
                'content' => \Cart::getContent()->toArray(),
                'total' => $formatted
            ]
        ]);
    }
}
