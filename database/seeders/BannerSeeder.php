<?php

namespace Database\Seeders;

use App\Models\Banner;
use App\Services\StorageService;
use Illuminate\Database\Seeder;

class BannerSeeder extends Seeder
{
    public function run(StorageService $storageService)
    {
        $fakeImage = $storageService->fileFromLocalUrl(public_path('temporary/banner-1.png'));
        $fakeMobileImage = $storageService->fileFromLocalUrl(public_path('temporary/mob-banner-1.png'));
        Banner::create([
            'image' => [
                'en' => $storageService->saveFile($fakeImage, 'banners'),
                'ru' => $storageService->saveFile($fakeImage, 'banners')
            ],
            'mob_image' => [
                'en' => $storageService->saveFile($fakeMobileImage, 'banners'),
                'ru' => $storageService->saveFile($fakeMobileImage, 'banners')
            ],
            'link' => url('/catalog')
        ]);

        Banner::create([
            'image' => [
                'en' => $storageService->saveFile($fakeImage, 'banners'),
                'ru' => $storageService->saveFile($fakeImage, 'banners')
            ],
            'mob_image' => [
                'en' => $storageService->saveFile($fakeMobileImage, 'banners'),
                'ru' => $storageService->saveFile($fakeMobileImage, 'banners')
            ],
            'link' => url('/catalog')
        ]);

        Banner::create([
            'image' => [
                'en' => $storageService->saveFile($fakeImage, 'banners'),
                'ru' => $storageService->saveFile($fakeImage, 'banners')
            ],
            'mob_image' => [
                'en' => $storageService->saveFile($fakeMobileImage, 'banners'),
                'ru' => $storageService->saveFile($fakeMobileImage, 'banners')
            ],
            'link' => url('/catalog')
        ]);
    }
}
