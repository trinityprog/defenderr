<?php

namespace App\Http\Resources\Catalog;

use App\Http\Resources\ProductImageResource;
use App\Models\ProductImage;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Str;

class ProductResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'shortName' => $this->short_name,
            'slug' => $this->slug,
            'description' => Str::limit($this->description),
            'isNewest' => $this->is_newest,
            'priceWithSymbol' => $this->priceWithSymbol,
            'images' => ProductImageResource::collection($this->images->where('for', ProductImage::FOR_CARD)->take(2))
        ];
    }
}
