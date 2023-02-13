<?php

namespace App\Models;

use App\Services\StorageService;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductImage extends Model
{
    use HasFactory;

    protected $guarded = [];

    const FOR_CARD = 'card';
    const FOR_NEWEST = 'newest';
    const FOR_OPTION = 'option';
    const FOR_PAGE_CHARACTERISTIC = 'page_characteristic';
    const FOR_PAGE_DESCRIPTION = 'page_description';
    const FOR_PAGE_COMMENT = 'page_comment';

    protected static function boot()
    {
        parent::boot();
    }

    public function getImagePathAttribute()
    {
        $storageService = new StorageService();
        return $storageService->checkFile($this->image, 'products');
    }

    public static function getForList()
    {
        return [
            'card' => 'Карточка товара',
            'newest' => 'Новинка',
            'option' => 'При выборе в корзину',
            'page_characteristic' => 'Для блока характеристик(страница товара)',
            'page_description' => 'Для блока описания(страница товара)',
            'page_comment' => 'Для блока комментария(страница товара)',
        ];
    }

    public function product()
    {
        return $this->belongsTo(Product::class);
    }
}
