<?php

namespace App\Models;

use Cviebrock\EloquentSluggable\Sluggable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Cache;
use Spatie\Translatable\HasTranslations;

class Characteristic extends Model
{
    use HasFactory, HasTranslations, Sluggable;

    protected $guarded = [];

    public $translatable = ['name', 'filter_all_variants'];

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

    public function set()
    {
        return $this->belongsTo(CharacteristicSet::class,  'char_tic_set_id');
    }

    public function values()
    {
        return $this->belongsToMany(CharacteristicValue::class, 'char_tic_char_tic_value_product', 'char_tic_id', 'char_tic_val_id');
    }
}
