<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\FaqRequest;
use App\Models\Faq;
use App\Models\FaqCategory;

class FaqController extends Controller
{
    public function index()
    {
        $faqs = Faq::query()
            ->orderBy('order')
            ->get();

        $faqs_categories = FaqCategory::query()
            ->orderBy('order')
            ->get();

        return view('faqs.index', compact('faqs', 'faqs_categories'));
    }

    public function create()
    {
        $faqs_categories = FaqCategory::query()
            ->orderBy('order')
            ->get();

        return view('faqs.create', compact('faqs_categories'));
    }

    public function store(FaqRequest $request)
    {
        $requestData = $request->validated();

        $requestData['faq_category_id'] = $requestData['category'];
        unset($requestData['category']);

        $faq = Faq::create($requestData);

        return redirect()->route('admin.faqs.index')->with('message', 'FAQ "'.$faq->question.'" создан!');
    }

    public function edit(Faq $faq)
    {
        $faqs_categories = FaqCategory::query()
            ->orderBy('order')
            ->get();

        return view('faqs.edit', compact('faq', 'faqs_categories'));
    }

    public function update(FaqRequest $request, Faq $faq)
    {
        $requestData = $request->validated();

        $requestData['faq_category_id'] = $requestData['category'];
        unset($requestData['category']);

        $faq->update($requestData);

        return redirect()->route('admin.faqs.index')->with('message', 'FAQ "'.$faq->question.'" изменён!');
    }

    public function destroy(Faq $faq)
    {

        $faq->delete();

        return redirect()->route('admin.faqs.index')->with('message', 'FAQ "'.$faq->question.'" удален!');
    }
}
