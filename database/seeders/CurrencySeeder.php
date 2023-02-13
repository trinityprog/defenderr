<?php

namespace Database\Seeders;

use App\Models\Currency;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CurrencySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Currency::create([
            'name' => 'Доллар США',
            'code' => 'USD',
            'symbol' => '$'
        ]);

        Currency::create([
            'name' => 'Российский рубль',
            'code' => 'RUB',
            'symbol' => '₽'
        ]);
    }
}
