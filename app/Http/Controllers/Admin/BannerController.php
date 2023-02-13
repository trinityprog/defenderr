<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\BannerRequest;
use App\Models\Banner;
use App\Services\StorageService;

class BannerController extends Controller
{
    public function index()
    {
        $banners = Banner::query()
            ->orderBy('order')
            ->get();

        return view('banners.index', compact('banners'));
    }

    public function create()
    {
        return view('banners.create');
    }

    public function store(BannerRequest $request, StorageService $storageService)
    {
        $requestData = $request->validated();

        $requestData ['image']['en']= $storageService->saveFile($requestData['image']['en'], 'banners');
        $requestData ['image']['ru']= $storageService->saveFile($requestData['image']['ru'], 'banners');

        $requestData ['mob_image']['en']= $storageService->saveFile($requestData['mob_image']['en'], 'banners');
        $requestData ['mob_image']['ru']= $storageService->saveFile($requestData['mob_image']['ru'], 'banners');

        $banner = Banner::create($requestData);

        return redirect()->route('admin.banners.index')->with('message', 'Баннер #'.$banner->id.' создан!');
    }

    public function edit(Banner $banner)
    {
        return view('banners.edit', compact('banner'));
    }

    public function update(BannerRequest $request, Banner $banner, StorageService $storageService)
    {
        $requestData = $request->validated();

        if(isset($requestData['image']['en'])) {
            $requestData ['image']['en']= $storageService->saveFile($requestData['image']['en'], 'banners');

            $storageService->deleteFile($banner->getOriginal('image')->en, 'banners');
        }

        if(isset($requestData['image']['ru'])) {
            $requestData ['image']['ru']= $storageService->saveFile($requestData['image']['ru'], 'banners');

            $storageService->deleteFile($banner->getOriginal('image')->ru, 'banners');
        }

        if(isset($requestData['mob_image']['en'])) {
            $requestData ['mob_image']['en']= $storageService->saveFile($requestData['mob_image']['en'], 'banners');

            $storageService->deleteFile($banner->getOriginal('mob_image')->en, 'banners');
        }

        if(isset($requestData['mob_image']['ru'])) {
            $requestData ['mob_image']['ru']= $storageService->saveFile($requestData['mob_image']['ru'], 'banners');

            $storageService->deleteFile($banner->getOriginal('mob_image')->ru, 'banners');
        }

        $banner->update($requestData);

        return redirect()->route('admin.banners.index')->with('message', 'Баннер #'.$banner->id.' изменён!');
    }

    public function destroy(Banner $banner, StorageService $storageService)
    {
        $storageService->deleteFile($banner->getOriginal('image')->en, 'banners');
        $storageService->deleteFile($banner->getOriginal('image')->ru, 'banners');

        $storageService->deleteFile($banner->getOriginal('mob_image')->en, 'banners');
        $storageService->deleteFile($banner->getOriginal('mob_image')->ru, 'banners');

        $banner->delete();

        return redirect()->route('admin.banners.index')->with('message', 'Баннер #'.$banner->id.' удален!');
    }
}
