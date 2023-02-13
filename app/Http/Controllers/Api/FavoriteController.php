<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Product;
use App\Models\ProductImage;
use App\Services\PriceService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cookie;

class FavoriteController extends Controller
{
    public function __construct()
    {
        \Cart::session(Cookie::get('guest-favorites-token') ?? uniqid());
    }

    public function add(Request $request)
    {
        $exists = \Cart::getContent()->filter(fn($q) => $q->attributes->product_id === $request->input('product_id'))->first();
        if ($exists)
            return response()->json([
                'status' => 'success',
                'message' => 'Item already exists in the favorites!',
                'id' => $exists->id,
            ]);

        $product = Product::query()
            ->joinPrice()
            ->findOrFail($request->input('product_id'));
        $rowId = uniqid();

        \Cart::add([
            'id' => $rowId,
            'name' => $product->name,
            'price' => 0,
            'quantity' => 1,
            'attributes' => [
                'product_id' => $product->id,
                'shortName' => $product->short_name,
                'priceWithSymbol' => $product->priceWithSymbol,
                'imagePath' => $product->images->where('for', ProductImage::FOR_CARD)->first()->imagePath,
                'slug' => $product->slug,
            ],
        ]);

        return response()->json([
            'status' => 'success',
            'message' => 'Item successfully added in favorites!',
            'id' => $rowId,
        ]);
    }

    public function remove(Request $request)
    {
        \Cart::remove($request->input('row_id'));

        return response()->json([
            'status' => 'success',
            'message' => 'Item successfully remove from favorites!'
        ]);
    }

    public function getContent()
    {
        return response()->json([
            'data' => [
                'content' => \Cart::getContent()->toArray()
            ]
        ]);
    }
}
