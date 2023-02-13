<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Faq>
 */
class FaqFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'question' => [
                'en' => fake()->sentence(rand(5, 15)),
                'ru' => fake()->sentence(rand(5, 15)),
            ],
            'answer' => [
                'en' => fake()->text(),
                'ru' => fake()->text(),
            ],
            'order' => rand(1, 5)
        ];
    }
}
