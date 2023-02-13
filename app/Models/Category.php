<?php

namespace App\Models;

use App\Services\StorageService;
use Cviebrock\EloquentSluggable\Sluggable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\Cache;
use Spatie\Translatable\HasTranslations;

class Category extends Model
{
    use HasFactory, SoftDeletes, HasTranslations, Sluggable;

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
        static::saved(fn() => Cache::forget('categories'));
        static::deleted(fn() => Cache::forget('categories'));
    }

    public function getEnNameAttribute()
    {
        return $this->getTranslation('name', 'en');
    }

    public function getImagePathAttribute()
    {
        $storageService = new StorageService();
        return $storageService->checkFile($this->image, 'categories');
    }

    public function products()
    {
        return $this->belongsToMany(Product::class);
    }
}
