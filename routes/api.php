<?php

use App\Http\Controllers\Api\BannerController;
use App\Http\Controllers\Api\CartController;
use App\Http\Controllers\Api\CategoryController;
use App\Http\Controllers\Api\ContactsController;
use App\Http\Controllers\Api\FaqController;
use App\Http\Controllers\Api\CharacteristicController;
use App\Http\Controllers\Api\FavoriteController;
use App\Http\Controllers\Api\NewsletterSubscriptionController;
use App\Http\Controllers\Api\OrderController;
use App\Http\Controllers\Api\ProductController;
use App\Http\Middleware\DistributorsExportAuthKeyCheck;
use App\Http\Resources\AuthUserResource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('banners/one-random', [BannerController::class, 'oneRandom']);

Route::get('categories/list', [CategoryController::class, 'list']);

Route::get('characteristics/list', [CharacteristicController::class, 'list']);

Route::get('contacts/distributors', [ContactsController::class, 'distributors']);
Route::post('contacts/distributors-export', [ContactsController::class, 'distributorsExport'])->middleware(DistributorsExportAuthKeyCheck::class);

Route::get('faqs/list', [FaqController::class, 'list']);

Route::group(['prefix' => 'products'], function () {
    Route::get('popular', [ProductController::class, 'popular']);
    Route::get('newest', [ProductController::class, 'newest']);
    Route::get('similar', [ProductController::class, 'similar']);
    Route::get('search', [ProductController::class, 'search']);
    Route::get('cart', [ProductController::class, 'cart']);
    Route::get('add-to-cart/{product:id}', [ProductController::class, 'addToCart']);
    Route::get('catalog/{slug?}', [ProductController::class, 'catalog']);
    Route::get('{product:slug}', [ProductController::class, 'getProduct']);
});

Route::group(['prefix' => 'cart'], function () {
    Route::post('add', [CartController::class, 'add']);
    Route::post('remove', [CartController::class, 'remove']);
    Route::get('get-content', [CartController::class, 'getContent']);
});

Route::group(['prefix' => 'favorites'], function () {
    Route::post('add', [FavoriteController::class, 'add']);
    Route::post('remove', [FavoriteController::class, 'remove']);
    Route::get('get-content', [FavoriteController::class, 'getContent']);
});

Route::post('order', OrderController::class);

Route::post('newsletter-subscriptions/join', [NewsletterSubscriptionController::class, 'join']);

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', function (Request $request) {
        return new AuthUserResource($request->user());
    });
});
