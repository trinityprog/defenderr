<?php

namespace App\Http\Resources\Index;

use App\Models\ProductImage;
use Illuminate\Http\Resources\Json\JsonResource;

class ProductPopularResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'slug' => $this->slug,
            'priceWithSymbol' => $this->priceWithSymbol,
            'imagePath' => $this->images->where('for', ProductImage::FOR_CARD)->first()->imagePath,
        ];
    }
}
