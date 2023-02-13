<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\Cache;
use Spatie\Translatable\HasTranslations;

class Faq extends Model
{
    use HasFactory, SoftDeletes, HasTranslations;

    protected $guarded = [];

    public $translatable = ['question', 'answer'];

    protected static function boot()
    {
        parent::boot();
        static::saved(fn() => Cache::forget('faqs'));
        static::deleted(fn() => Cache::forget('faqs'));
    }

    public function category()
    {
        return $this->belongsTo(FaqCategory::class);
    }
}
