<?php

namespace App\Http\Resources\Product;

use Illuminate\Http\Resources\Json\JsonResource;

class ProductSimilarResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'slug' => $this->slug,
            'priceWithSymbol' => $this->priceWithSymbol,
            'imagePath' => $this->images->first()->imagePath,
        ];
    }
}
