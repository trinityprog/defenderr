<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\CategoryRequest;
use App\Models\Category;
use App\Services\StorageService;

class CategoryController extends Controller
{
    public function index()
    {
        $categories = Category::query()
            ->withCount('products')
            ->orderBy('order')
            ->get();

        return view('categories.index', compact('categories'));
    }

    public function create()
    {
        return view('categories.create');
    }

    public function store(CategoryRequest $request, StorageService $storageService)
    {
        $requestData = $request->validated();

        $requestData ['image']= $storageService->saveFile($requestData['image'], 'categories');

        $category = Category::create($requestData);

        return redirect()->route('admin.categories.index')->with('message', 'Категория "'.$category->name.'" создана!');
    }

    public function edit(Category $category)
    {
        return view('categories.edit', compact('category'));
    }

    public function update(CategoryRequest $request, Category $category, StorageService $storageService)
    {
        $requestData = $request->validated();

        if(isset($requestData['image'])) {
            $requestData ['image']= $storageService->saveFile($requestData['image'], 'categories');

            $storageService->deleteFile($category->image, 'categories');
        }

        $category->update($requestData);

        return redirect()->route('admin.categories.index')->with('message', 'Категория "'.$category->name.'" изменёна!');
    }

    public function destroy(Category $category, StorageService $storageService)
    {
        $storageService->deleteFile($category->image, 'categories');
        $category->delete();

        return redirect()->route('admin.categories.index')->with('message', 'Категория "'.$category->name.'" удалена!');
    }
}
