<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\FaqCategoryResource;

class FaqController extends Controller
{
    public function list()
    {
        return FaqCategoryResource::collection(cachedFaqs());
    }
}
