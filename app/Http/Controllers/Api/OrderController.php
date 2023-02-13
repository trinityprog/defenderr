<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\OrderRequest;
use App\Models\Order;
use App\Services\PriceService;
use Illuminate\Support\Facades\Cookie;

class OrderController extends Controller
{
    public function __invoke(OrderRequest $request)
    {
        $priceService = new PriceService();
        \Cart::session(Cookie::get('guest-cart-token') ?? uniqid());

        $order = Order::create([
            'currency_id' => $priceService->relatedCurrency()->id,
            'total' => \Cart::getTotal()
        ]);

        $order->info()->create($request->validated());

        \Cart::getContent()->each(function ($item) use ($order, $priceService) {
            $order->products()->create([
                'product_id' => $item->attributes->product_id,
                'quantity' => $item->quantity,
                'price' => $item->price,
                'options' => $item->attributes->option,
                'currency_id' => $priceService->relatedCurrency()->id,
            ]);
        });

        \Cart::clear();

        return response()->json([
            'status' => 'success',
            'message' => 'Your order has been sent. Our manager will contact you!'
        ]);
    }
}
