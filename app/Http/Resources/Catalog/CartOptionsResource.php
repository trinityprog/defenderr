<?php

namespace App\Http\Resources\Catalog;

use App\Models\CharacteristicValue;
use App\Models\ProductImage;
use Illuminate\Http\Resources\Json\JsonResource;

class CartOptionsResource extends JsonResource
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
            'category' => $category,
            'parent_group' => $this->parent_group,
            'options' => $this->options($category),
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
                            'imagePath' => $product->images->where('for', ProductImage::FOR_CARD)->value('imagePath'),
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
