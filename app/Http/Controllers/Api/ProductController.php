<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\ProductCatalogRequest;
use App\Http\Resources\Catalog\CartOptionsResource;
use App\Http\Resources\Catalog\ProductResource;
use App\Http\Resources\Index\ProductNewestResource;
use App\Http\Resources\Index\ProductPopularResource;
use App\Http\Resources\Product\ProductPageResource;
use App\Http\Resources\Product\ProductSearchResource;
use App\Http\Resources\Product\ProductSimilarResource;
use App\ModelFilters\ProductCatalogFilter;
use App\Models\Product;
use App\Models\ProductImage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class ProductController extends Controller
{
    public function catalog(ProductCatalogRequest $request, $slug = null)
    {
        return ProductResource::collection(Product::query()
            ->withWhereHas('images')
            ->joinPrice()
            ->filter($request->only('sort', 'filter'), ProductCatalogFilter::class)
            ->when(
                isset($slug) && !is_null($slug),
                fn ($q) => $q->whereHas('categories', fn($q) => $q->whereIn('category_id', [cachedCategories()->where('slug', $slug)->pluck('id')]))
            )
            ->where('active', true)
            ->paginate(20));
    }

    public function getProduct(Product $product)
    {
        return new ProductPageResource($product);
    }

    public function addToCart(Product $product)
    {
        return new CartOptionsResource($product);
    }

    public function search(Request $request)
    {
        if ($request->has('q')) {
            $text = Str::lower($request->input('q'));
            $products = Product::query()
                ->where(
                    fn ($q) => $q->where(DB::raw('lower(name)'), 'like', '%'.$text.'%')
                        ->orWhere(DB::raw('lower(short_name)'), 'like', '%'.$text.'%')
                        ->orWhere(DB::raw('lower(description)'), 'like', '%'.$text.'%')
                )->inRandomOrder()->take(10)->get(['id', 'name', 'slug']);

            return ProductSearchResource::collection($products);
        }
        return response()->json(['data' => []]);
    }

    public function popular()
    {
        return cachedPopularProducts()->count() > 0
            ? ProductPopularResource::collection(cachedPopularProducts()->shuffle()->take(8))
            : response()->json(['data' => []]);
    }

    public function newest()
    {
        return cachedNewestProducts()->count() > 0
            ? ProductNewestResource::collection(cachedNewestProducts()->shuffle()->take(8))
            : response()->json(['data' => []]);
    }

    public function similar(Request $request)
    {
        $exceptId = $request->input('except_id', null);

        $similarProducts = Product::query()
            ->withWhereHas('images', fn($q) => $q->where('for', ProductImage::FOR_CARD))
            ->joinPrice()
            ->where('active', true)
            ->whereNot('products.id', $exceptId)
            ->inRandomOrder()
            ->take(12)
            ->get();

        return $similarProducts->count() > 0
            ? ProductSimilarResource::collection($similarProducts)
            : response()->json(['data' => []]);
    }
}
