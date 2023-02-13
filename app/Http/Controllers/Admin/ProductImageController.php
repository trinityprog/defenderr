<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\ProductImageRequest;
use App\Models\Product;
use App\Models\ProductImage;
use App\Services\StorageService;
use Illuminate\Http\Request;

class ProductImageController extends Controller
{
    public function index(Request $request)
    {
        $product = Product::query()->findOrFail($request->input('product_id'));
        $images = $product->images;

        return view('products-images.index', compact('images'));
    }

    public function create()
    {
        return view('products-images.create');
    }

    public function store(ProductImageRequest $request, StorageService $storageService)
    {
        $requestData = $request->validated();
        $product = Product::query()->findOrFail($request->input('product_id'));
        $requestData ['image']= $storageService->saveFile($requestData['image'], 'products');

        $product->images()->create($requestData);

        return redirect()->route('admin.products-images.index', ['product_id' => $product->id])->with('message', 'Изображение создано!');
    }

    public function edit(ProductImage $products_image)
    {
        return view('products-images.edit', compact('products_image'));
    }

    public function update(ProductImageRequest $request, ProductImage $products_image, StorageService $storageService)
    {
        $requestData = $request->validated();

        if(isset($requestData['image'])) {
            $requestData ['image']= $storageService->saveFile($requestData['image'], 'products');

            $storageService->deleteFile($products_image->image, 'products');
        }

        $products_image->update($requestData);

        return redirect()->route('admin.products-images.index', ['product_id' => $products_image->product_id])->with('message', 'Изображение изменено!');
    }

    public function destroy(ProductImage $products_image, StorageService $storageService)
    {
        $storageService->deleteFile($products_image->image, 'products');
        $products_image->delete();

        return redirect()->route('admin.products-images.index', ['product_id' => $products_image->product_id])->with('message', 'Изображение удалено!');
    }
}
