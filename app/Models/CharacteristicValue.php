<?php

namespace App\Models;

use App\Services\StorageService;
use Cviebrock\EloquentSluggable\Sluggable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Cache;
use Spatie\Translatable\HasTranslations;

class CharacteristicValue extends Model
{
    use HasFactory, HasTranslations, Sluggable;

    protected $guarded = [];

    public $translatable = ['name'];

    public function sluggable(): array
    {
        return [
            'slug' => [
                'source' => 'enName'
            ]
        ];
    }

    protected static function boot()
    {
        parent::boot();
        static::saved(fn() => Cache::forget('characteristics'));
        static::deleted(fn() => Cache::forget('characteristics'));
    }

    public function getEnNameAttribute()
    {
        return $this->getTranslation('name', 'en');
    }

    public function getImagePathAttribute()
    {
        $storageService = new StorageService();
        return $storageService->checkFile($this->image, 'characteristics');
    }

    public function product_characteristic_value()
    {
        return $this->hasMany(CharacteristicWithValue::class, 'char_tic_val_id');
    }

    public function products()
    {
        return $this->belongsToMany(Product::class, 'char_tic_char_tic_value_product', 'char_tic_val_id', 'product_id');
    }

    public function characteristic()
    {
        return $this->belongsToMany(Characteristic::class, 'char_tic_char_tic_value_product', 'char_tic_val_id', 'char_tic_id');
    }

    public function color()
    {
        return $this->hasOne(ProductColor::class, 'slug', 'slug');
    }
}
