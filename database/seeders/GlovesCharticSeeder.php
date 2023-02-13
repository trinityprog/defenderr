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

class GlovesCharticSeeder extends Seeder
{
    public function run()
    {
        $set = CharacteristicSet::query()->firstOrCreate([
            'for' => 'gloves'
        ], [
            'name' => 'Перчатки',
            'for' => 'gloves',
        ]);
        $set_id = $set->id;

        $char_tic = Characteristic::query()->firstOrCreate([
            'name->en' => 'Select size'
        ], [
            'name' => [
                'en' => 'Select size',
                'ru' => 'Выбор размера'
            ],
            'filter_all_variants' => [
                'en' => 'Select size',
                'ru' => 'Выбор размера'
            ],
            'char_tic_set_id' => $set_id,
            'filterable' => false
        ]);

        $char_tic_id = $char_tic->id;

        Product::query()
            ->where('parent_group', 'nitrile_gloves')
            ->get()
            ->each(function ($item) use ($char_tic_id) {
                $name = $item->name;
                $size = explode('Defenderr Nitrile Gloves ', $name)[1];

                $char_tic_value = CharacteristicValue::query()->firstOrCreate([
                    'slug' => Str::slug($size)
                ], [
                    'name' => [
                        'en' => $size,
                        'ru' => $size
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
//php artisan db:seed --class=GlovesCharticSeeder
