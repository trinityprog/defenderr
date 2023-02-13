<?php

use App\Http\Controllers\Admin\BannerController;
use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\Admin\CharacteristicController;
use App\Http\Controllers\Admin\CharacteristicSetController;
use App\Http\Controllers\Admin\CharacteristicValueController;
use App\Http\Controllers\Admin\DistributorController;
use App\Http\Controllers\Admin\FaqCategoryController;
use App\Http\Controllers\Admin\FaqController;
use App\Http\Controllers\Admin\ProductColorController;
use App\Http\Controllers\Admin\ProductController;
use App\Http\Controllers\Admin\ProductImageController;
use Illuminate\Support\Facades\Route;

Route::view('/', 'dashboard')->name('index');

Route::resource('categories', CategoryController::class)->except('show');

Route::resource('products', ProductController::class)->except('show');
Route::get('products/characteristics/{product:id}', [ProductController::class, 'characteristics'])->name('products.characteristics');
Route::post('products/characteristics/{product:id}', [ProductController::class, 'characteristicsStore'])->name('products.characteristics.store');
Route::get('products/docs/{product:id}', [ProductController::class, 'docs'])->name('products.docs');
Route::post('products/docs/{product:id}', [ProductController::class, 'docsStore'])->name('products.docs.store');
Route::resource('products-images', ProductImageController::class)->except('show');
Route::resource('products-colors', ProductColorController::class)->except('show');
Route::get('products/edit-parent-group', [ProductController::class, 'editParentGroup'])->name('products.edit-parent-group');
Route::post('products/update-parent-group', [ProductController::class, 'updateParentGroup'])->name('products.update-parent-group');
//Route::get('products-images/index-parent-group', [ProductImageController::class, 'indexParentGroup'])->name('products-images.index-parent-group');

Route::resource('characteristics', CharacteristicController::class)->except('show');
Route::resource('characteristics-values', CharacteristicValueController::class)->except('show');
Route::resource('characteristics-sets', CharacteristicSetController::class)->except('show');


Route::resource('banners', BannerController::class)->except('show');
Route::resource('faqs', FaqController::class)->except('show');
Route::resource('faqs-categories', FaqCategoryController::class)->except('index', 'show');
Route::resource('distributors', DistributorController::class)->except('show');
