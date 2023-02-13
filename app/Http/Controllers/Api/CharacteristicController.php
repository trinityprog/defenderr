<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\Catalog\CharacteristicResource;

class CharacteristicController extends Controller
{
    public function list()
    {
        return CharacteristicResource::collection(cachedCharacteristics());
    }
}
