<?php

namespace App\Http\Resources\Index;

use Illuminate\Http\Resources\Json\JsonResource;

class BannerResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'imagePath' => $this->imagePath,
            'mobImagePath' => $this->mobImagePath,
            'link' => $this->link,
        ];
    }
}
