<?php

use App\Http\Middleware\SetGuestCartToken;
use App\Http\Middleware\SetGuestFavoritesToken;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get('downloadcartridgesguide', fn () => redirect(asset('docs/cartridges-guide.pdf')))->name('cartridges-guide');

Route::view('/{any}', 'main')
    ->where('any', '.*')
    ->name('index')
    ->middleware(SetGuestCartToken::class, SetGuestFavoritesToken::class);
