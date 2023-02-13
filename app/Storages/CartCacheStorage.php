<?php

namespace App\Storages;

use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Cookie;
use Darryldecode\Cart\CartCollection;

class CartCacheStorage
{
    private $data = [];

    public function __construct()
    {
        $this->data = unserialize(Cache::get('cart'));
    }

    public function has($key)
    {
        return isset($this->data[$key]);
    }

    public function get($key)
    {
        return new CartCollection($this->data[$key] ?? []);
    }

    public function put($key, $value)
    {
        $this->data[$key] = $value;
        Cache::put('cart', serialize($this->data), 60*24*30);
    }
}
