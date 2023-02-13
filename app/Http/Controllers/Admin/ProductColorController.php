<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\ProductColorRequest;
use App\Models\ProductColor;
use Illuminate\Http\Request;

class ProductColorController extends Controller
{
    public function index(Request $request)
    {
        $colors = ProductColor::query()
            ->get();

        return view('products-colors.index', compact('colors'));
    }

    public function create()
    {
        return view('products-colors.create');
    }

    public function store(ProductColorRequest $request)
    {
        $products_color = ProductColor::create($request->validated());

        return redirect()->route('admin.products-colors.index')->with('message', 'Цвет "'.$products_color->name.'" создан!');
    }

    public function edit(ProductColor $products_color)
    {
        return view('products-colors.edit', compact('products_color'));
    }

    public function update(ProductColorRequest $request, ProductColor $products_color)
    {
        $products_color->update($request->validated() + ['slug' => null]);

        return redirect()->route('admin.products-colors.index')->with('message', 'Цвет "'.$products_color->name.'" изменён!');
    }

    public function destroy(ProductColor $products_color)
    {
        $products_color->delete();

        return redirect()->route('admin.products-colors.index')->with('message', 'Цвет "'.$products_color->name.'" удален!');
    }
}
