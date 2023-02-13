<?php

namespace App\Models;

use App\Services\PriceService;
use Cviebrock\EloquentSluggable\Sluggable;
use EloquentFilter\Filterable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\Cache;
use Spatie\Translatable\HasTranslations;

class Product extends Model
{
    use HasFactory, SoftDeletes, HasTranslations, Sluggable, Filterable;

    protected $guarded = [];

    public $translatable = ['name', 'short_name', 'description', 'page_characteristics_block'];

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
        static::saved(function() {
            Cache::forget('popular-products');
            Cache::forget('newest-products');
        });
        static::deleted(function() {
            Cache::forget('popular-products');
            Cache::forget('newest-products');
        });
    }

    public function getEnNameAttribute()
    {
        return $this->getTranslation('name', 'en');
    }

    public function getPriceWithSymbolAttribute()
    {
        $service = new PriceService();
        $price = $this->price_value ?? ProductPrice::where('for', $service->relatedCurrencyCode())->where('product_id', $this->id)->value('value');
        return $service->priceWithSymbol($price);
    }

    public function scopeJoinPrice($query)
    {
        $service = new PriceService();
        return $query->join('product_prices as price', fn($join) =>
                $join->on('price.product_id', '=', 'products.id')
                    ->where('price.for', $service->relatedCurrencyCode())
            )
            ->select('products.*', 'price.value as price_value');
    }

    public function images()
    {
        return $this->hasMany(ProductImage::class)->orderBy('order');
    }

    public function prices()
    {
        return $this->hasMany(ProductPrice::class);
    }

    public function categories()
    {
        return $this->belongsToMany(Category::class);
    }

    public function char_tic_set()
    {
        return $this->belongsTo(CharacteristicSet::class, 'char_tic_set_id');
    }

    public function product_characteristic_value()
    {
        return $this->hasMany(CharacteristicWithValue::class, 'product_id')->with('characteristic', 'values');
    }

    public function comments()
    {
        return $this->hasMany(Comment::class);
    }
}
