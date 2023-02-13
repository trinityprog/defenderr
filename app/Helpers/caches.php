<?php

use App\Models\Banner;
use App\Models\Category;
use App\Models\Characteristic;
use App\Models\Currency;
use App\Models\FaqCategory;
use App\Models\Product;
use App\Models\ProductImage;
use Illuminate\Support\Facades\Cache;

if (! function_exists('cachedCategories')) {
    function cachedCategories() {
        $query = Category::query()
            ->where('active', true)
            ->orderBy('order');

        return Cache::rememberForever('categories',
            fn() => $query->get()
        );
    }
}

if (! function_exists('cachedCurrencies')) {
    function cachedCurrencies() {
        $query = Currency::query();

        return Cache::rememberForever('currencies',
            fn() => $query->get()
        );
    }
}

if (! function_exists('cachedCharacteristics')) {
    function cachedCharacteristics() {
        $query = Characteristic::query()
            ->withWhereHas('values', fn($q) => $q->withCount('products'))
            ->withWhereHas('set')
            ->where('filterable', true);

        return Cache::rememberForever('characteristics',
            fn() => $query->get()->sortByDesc('values.products_count')
        );
    }
}

if (! function_exists('cachedBanners')) {
    function cachedBanners() {
        $query = Banner::query()
            ->where('active', true);

        return Cache::rememberForever('banners',
            fn() => $query->get()
        );
    }
}

if (! function_exists('cachedPopularProducts')) {
    function cachedPopularProducts() {
        $query = Product::query()
            ->withWhereHas('images', fn($q) => $q->where('for', ProductImage::FOR_CARD))
            ->joinPrice()
            ->where('is_popular', true)
            ->where('active', true);

        return Cache::rememberForever('popular-products',
            fn() => $query->get()->load('images')
        );
    }
}

if (! function_exists('cachedNewestProducts')) {
    function cachedNewestProducts() {
        $query = Product::query()
            ->withWhereHas('images', fn($q) => $q->where('for', ProductImage::FOR_NEWEST))
            ->joinPrice()
            ->where('is_newest', true)
            ->where('active', true);

        return Cache::rememberForever('newest-products',
            fn() => $query->get()->load('images')
        );
    }
}

if (! function_exists('cachedFaqs')) {
    function cachedFaqs() {
        $query = FaqCategory::query()
            ->with('faqs', fn($q) => $q->where('active', true)->orderBy('faqs.order'))
            ->where('active', true)
            ->orderBy('faq_categories.order');

        return Cache::rememberForever('faqs',
            fn() => $query->get()
        );
    }
}
