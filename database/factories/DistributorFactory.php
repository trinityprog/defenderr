<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Distributor>
 */
class DistributorFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'name' => fake()->sentence(),
            'email' => fake()->email(),
            'phone' => fake()->phoneNumber(),
            'website' => fake()->url(),
            'country' => fake()->country(),
            'city' => fake()->city(),
            'socials' => $this->fakeSocials(),
            'active' => 1
        ];
    }

    public function fakeSocials()
    {
        $socs = ['instagram', 'facebook', 'whatsapp', 'vk', 'telegram'];
        $result = [];

        foreach (range(1, 3) as $i) {
            $result []= [
                'name' => fake()->randomElement($socs),
                'link' => fake()->word()
            ];
        }

        return $result;
    }
}
