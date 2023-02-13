<?php

namespace Database\Seeders;

use App\Models\Faq;
use App\Models\FaqCategory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class FaqSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        FaqCategory::factory(rand(2, 5))->create()->each(
            fn($cat) => Faq::factory(rand(5, 8))->create(['faq_category_id' => $cat->id])
        );
    }
}
