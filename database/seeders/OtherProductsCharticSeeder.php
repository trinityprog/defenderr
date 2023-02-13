<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Characteristic;
use App\Models\CharacteristicSet;
use App\Models\CharacteristicValue;
use App\Models\Product;
use App\Models\ProductColor;
use App\Models\ProductImage;
use App\Services\StorageService;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class OtherProductsCharticSeeder extends Seeder
{
    public function run()
    {
        $this->vectorBattery();
        $this->powerSupply();
    }

    public function vectorBattery()
    {
        Product::query()->where('short_name->en', 'Vector Battery')->update(['parent_group' => 'vector_battery']);

        $set = CharacteristicSet::query()->where('name', 'Блоки')->first();
        $set->update(['for' => 'power-unit']);
        $set_id = $set->id;

        $char_tic = Characteristic::query()->where('slug', 'select-color')->first();
        $char_tic_id = $char_tic->id;

        Product::query()
            ->where('parent_group', 'vector_battery')
            ->get()
            ->each(function ($item) use ($char_tic_id) {
                $name = $item->getTranslation('name', 'en');
                $explode = explode('Defenderr Vector ', $name)[1];
                $color = explode(' Battery', $explode)[0];

                $char_tic_value = CharacteristicValue::query()->firstOrCreate([
                    'slug' => Str::slug($color)
                ], [
                    'name' => [
                        'en' => $color,
                        'ru' => $color
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

    public function powerSupply()
    {
        Product::query()->where('short_name->en', 'Power Supply — 8')->update(['parent_group' => 'power_supply']);

        $set = CharacteristicSet::query()->where('name', 'Блоки')->first();
        $set->update(['for' => 'power-unit']);
        $set_id = $set->id;

        $char_tic = Characteristic::query()->where('slug', 'select-color')->first();
        $char_tic_id = $char_tic->id;

        Product::query()
            ->where('parent_group', 'power_supply')
            ->get()
            ->each(function ($item) use ($char_tic_id) {
                $name = $item->getTranslation('name', 'en');
                $color = explode('Defenderr Power Supply PS-8 ', $name)[1];

                $char_tic_value = CharacteristicValue::query()->firstOrCreate([
                    'slug' => Str::slug($color)
                ], [
                    'name' => [
                        'en' => $color,
                        'ru' => $color
                    ]
                ]);
                $char_tic_value_id = $char_tic_value->id;

                ProductColor::firstOrCreate([
                    'slug' => Str::slug($color)
                ], [
                    'name' => $color,
                    'code' => Str::slug($color) === 'silver' ? '#303133' : '#000'
                ]);


                DB::table('char_tic_char_tic_value_product')->insert([
                    'char_tic_id' => $char_tic_id,
                    'char_tic_val_id' => $char_tic_value_id,
                    'product_id' => $item->id
                ]);
            });
    }
}
//php artisan db:seed --class=OtherProductsCharticSeeder
