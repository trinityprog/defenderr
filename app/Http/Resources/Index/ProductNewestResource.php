<?php

namespace App\Http\Resources\Index;

use App\Models\ProductImage;
use Illuminate\Http\Resources\Json\JsonResource;

class ProductNewestResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->short_name,
            'slug' => $this->slug,
            'imagePath' => $this->images->where('for', ProductImage::FOR_NEWEST)->first()->imagePath,
        ];
    }
}
