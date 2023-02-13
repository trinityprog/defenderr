<?php

namespace App\Http\Resources\Product;

use App\Http\Resources\ProductImageResource;
use App\Models\CharacteristicValue;
use App\Models\Product;
use App\Models\ProductImage;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Str;

class ProductPageResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        $category = $this->categories->first();

        return [
            'id' => $this->id,
            'name' => $this->name,
            'shortName' => $this->short_name,
            'slug' => $this->slug,
            'description' => $this->description,
            'parentGroup' => $this->parent_group,
            'priceWithSymbol' => $this->priceWithSymbol,
            'amazonLink' => $this->amazon_link,
            'category' => new ProductCategoryResource($category),
            'options' => $this->options($category),
            'comments' => ProductCommentResource::collection($this->comments),
            'characteristicImagePath' => $this->images->where('for', ProductImage::FOR_PAGE_CHARACTERISTIC)->value('imagePath'),
            'descriptionImagePath' => $this->images->where('for', ProductImage::FOR_PAGE_DESCRIPTION)->value('imagePath'),
            'commentImagePath' => $this->images->where('for', ProductImage::FOR_PAGE_COMMENT)->value('imagePath')
        ];
    }

    public function options($category)
    {
        if($category->slug === 'machines' && $this->parent_group) {
            return ['color' => CharacteristicValue::query()
                ->whereHas('characteristic', fn($q) => $q->where('slug', 'select-color'))
                ->withWhereHas('color')
                ->withWhereHas(
                    'products',
                    fn($q) => $q->joinPrice()
                        ->with('images', fn($q) => $q->whereIn('for', [ProductImage::FOR_OPTION, ProductImage::FOR_CARD]))
                        ->where('parent_group', $this->parent_group))
                ->get()
                ->map(function ($item) {
                    $product = $item->products->first();
                    return [
                        'name' => $item->name,
                        'slug' => $item->slug,
                        'colorCode' => $item->color->code,
                        'imagePath' => $product->images->where('for', ProductImage::FOR_OPTION)->value('imagePath'),
                        'product' => [
                            'id' => $product->id,
                            'name' => $product->name,
                            'slug' => $product->slug,
                            'priceWithSymbol' => $product->priceWithSymbol,
                            'imagesPath' => $product->images->where('for', ProductImage::FOR_CARD)->pluck('imagePath'),
                        ]
                    ];
                })];
        }
        if($category->slug === 'cartriges' && $this->parent_group) {
            return ['diameter' => CharacteristicValue::query()
                ->whereHas('characteristic', fn($q) => $q->where('slug', 'select-diameter'))
                ->withWhereHas(
                    'products',
                    fn($q) => $q->joinPrice()
                        ->whereHas('product_characteristic_value.values', fn($q) => $q->where('slug', $this->product_characteristic_value->where('characteristic.slug', 'taper-type')->value('values.slug')))
                        ->with('images', fn($q) => $q->whereIn('for', [ProductImage::FOR_CARD]))
                        ->where('parent_group', $this->parent_group))
                ->get()
                ->map(function ($item) {
                    $product = $item->products->first();
                    return [
                        'name' => $item->name,
                        'slug' => $item->slug,
                        'product' => [
                            'id' => $product->id,
                            'name' => $product->name,
                            'slug' => $product->slug,
                            'priceWithSymbol' => $product->priceWithSymbol,
                            'imagesPath' => $product->images->where('for', ProductImage::FOR_CARD)->pluck('imagePath'),
                        ]
                    ];
                })];
        }
        if($category->slug === 'power-unit' && $this->parent_group) {
            return ['color' => CharacteristicValue::query()
                ->whereHas('characteristic', fn($q) => $q->where('slug', 'select-color'))
                ->withWhereHas('color')
                ->withWhereHas(
                    'products',
                    fn($q) => $q->joinPrice()
                        ->with('images', fn($q) => $q->whereIn('for', [ProductImage::FOR_CARD]))
                        ->where('parent_group', $this->parent_group))
                ->get()
                ->map(function ($item) {
                    $product = $item->products->first();
                    return [
                        'name' => $item->name,
                        'slug' => $item->slug,
                        'colorCode' => $item->color->code,
                        'product' => [
                            'id' => $product->id,
                            'name' => $product->name,
                            'slug' => $product->slug,
                            'priceWithSymbol' => $product->priceWithSymbol,
                            'imagesPath' => $product->images->where('for', ProductImage::FOR_CARD)->pluck('imagePath'),
                        ]
                    ];
                })];
        }
        if($category->slug === 'acsessories' && $this->parent_group === 'nitrile_gloves') {
            return ['size' => CharacteristicValue::query()
                ->whereHas('characteristic', fn($q) => $q->where('slug', 'select-size'))
                ->withWhereHas(
                    'products',
                    fn($q) => $q->joinPrice()
                        ->with('images', fn($q) => $q->whereIn('for', [ProductImage::FOR_CARD]))
                        ->where('parent_group', $this->parent_group))
                ->get()
                ->map(function ($item) {
                    $product = $item->products->first();
                    return [
                        'name' => $item->name,
                        'slug' => $item->slug,
                        'product' => [
                            'id' => $product->id,
                            'name' => $product->name,
                            'slug' => $product->slug,
                            'priceWithSymbol' => $product->priceWithSymbol,
                            'imagesPath' => $product->images->where('for', ProductImage::FOR_CARD)->pluck('imagePath'),
                        ]
                    ];
                })];
        }
        return [];
    }
}
