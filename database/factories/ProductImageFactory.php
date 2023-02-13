<?php

namespace Database\Factories;

use App\Models\ProductImage;
use App\Services\StorageService;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class ProductImageFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        $images = ['category-1.png', 'category-2.png', 'category-3.png', 'category-4.png'];
        $storageService = new StorageService();
        $fakeImage = $storageService->fileFromLocalUrl(public_path('temporary/' . fake()->randomElement($images)));

        return [
            'image' => $storageService->saveFile($fakeImage, 'products'),
            'for' => ProductImage::FOR_CARD
        ];
    }
}
