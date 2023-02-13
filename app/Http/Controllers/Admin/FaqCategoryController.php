<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\FaqCategoryRequest;
use App\Models\FaqCategory;

class FaqCategoryController extends Controller
{
    public function create()
    {
        return view('faqs-categories.create');
    }

    public function store(FaqCategoryRequest $request)
    {
        $requestData = $request->validated();

        $faqs_category = FaqCategory::create($requestData);

        return redirect()->route('admin.faqs.index')->with('message', 'FAQ Категория "'.$faqs_category->name.'" создана!');
    }

    public function edit(FaqCategory $faqs_category)
    {
        return view('faqs-categories.edit', compact('faqs_category'));
    }

    public function update(FaqCategoryRequest $request, FaqCategory $faqs_category)
    {
        $requestData = $request->validated();

        $faqs_category->update($requestData);

        return redirect()->route('admin.faqs.index')->with('message', 'FAQ Категория "'.$faqs_category->name.'" изменёна!');
    }

    public function destroy(FaqCategory $faqs_category)
    {
        $faqs_category->delete();

        return redirect()->route('admin.faqs.index')->with('message', 'FAQ Категория "'.$faqs_category->name.'"  удалена!');
    }
}
