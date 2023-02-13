<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Characteristic;
use App\Models\CharacteristicSet;
use App\Models\CharacteristicValue;
use App\Models\Product;
use App\Models\ProductImage;
use App\Services\StorageService;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class CartridgeCharticSeeder extends Seeder
{
    public function run()
    {
        
        $set = CharacteristicSet::query()->where('for', 'cartriges')->first();
        $set_id = $set->id;

        $char_tic = Characteristic::query()->firstOrCreate([
            'name->en' => 'Select diameter'
        ], [
            'name' => [
                'en' => 'Select diameter',
                'ru' => 'Выбор диаметра'
            ],
            'filter_all_variants' => [
                'en' => 'Select diameter',
                'ru' => 'Выбор диаметра'
            ],
            'char_tic_set_id' => $set_id,
            'filterable' => false
        ]);

        $char_tic_id = $char_tic->id;

        Product::query()
            ->whereHas('categories', fn($q) => $q->where('slug', 'cartriges'))
            ->get()
            ->each(function ($item) use ($char_tic_id) {
                $shortName = $item->short_name;
                $diameter = explode(' ', $shortName)[0];

                $char_tic_value = CharacteristicValue::query()->firstOrCreate([
                    'slug' => Str::slug($diameter)
                ], [
                    'name' => [
                        'en' => $diameter,
                        'ru' => $diameter
                    ]
                ]);
                $char_tic_value_id = $char_tic_value->id;


                DB::table('char_tic_char_tic_value_product')->insert([
                    'char_tic_id' => $char_tic_id,
                    'char_tic_val_id' => $char_tic_value_id,
                    'product_id' => $item->id
                ]);
            });
    }
}
//php artisan db:seed --class=CartridgeCharticSeeder
