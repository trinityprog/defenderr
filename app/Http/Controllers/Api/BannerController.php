<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\Index\BannerResource;

class BannerController extends Controller
{
    public function oneRandom()
    {
        return BannerResource::collection(cachedBanners())->random();
    }
}
