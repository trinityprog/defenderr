<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Str;

class DistributorResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'name' => $this->name,
            'email' => $this->email,
            'phone' => $this->phone,
            'website' => $this->website,
            'country' => $this->country,
            'countryLetter' => Str::lower(Str::substr($this->country, 0, 1)),
            'city' => $this->city,
            'socials' => $this->socials
        ];
    }
}
