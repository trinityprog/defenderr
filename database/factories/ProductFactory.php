<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class ProductFactory extends Factory
{
    public function definition()
    {
        $shortName = fake()->sentence(rand(1, 2));
        return [
            'name' => [
                'en' => 'Defender' . ' ' . $shortName,
                'ru' => 'Defender' . ' ' . $shortName,
            ],
            'short_name' => [
                'en' => $shortName,
                'ru' => $shortName,
            ],
            'description' => [
                'en' => fake()->text(),
                'ru' => fake()->text(),
            ],
        ];
    }
}
