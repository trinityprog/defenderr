<?php

namespace App\Models;

use Cviebrock\EloquentSluggable\Sluggable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\Cache;
use Spatie\Translatable\HasTranslations;

class FaqCategory extends Model
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
        static::saved(fn() => Cache::forget('faqs'));
        static::deleted(fn() => Cache::forget('faqs'));
    }

    public function getEnNameAttribute()
    {
        return $this->getTranslation('name', 'en');
    }

    public function faqs()
    {
        return $this->hasMany(Faq::class);
    }
}
