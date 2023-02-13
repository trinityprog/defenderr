<?php

namespace App\Models;

use App\Services\StorageService;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Storage;


class Banner extends Model
{
    use HasFactory, SoftDeletes;

    protected $guarded = [];

    protected $casts = [
      'image' => 'object',
      'mob_image' => 'object',
    ];

    protected static function boot()
    {
        parent::boot();
        static::saved(fn() => Cache::forget('banners'));
        static::deleted(fn() => Cache::forget('banners'));
    }

    public function getImagePathAttribute()
    {
        $storageService = new StorageService();
        return $storageService->checkFile($this->image->{app()->getLocale()}, 'banners');
    }

    public function getMobImagePathAttribute()
    {
        $storageService = new StorageService();
        return $storageService->checkFile($this->mob_image->{app()->getLocale()}, 'banners');
    }
}
