<?php

namespace Database\Seeders;

use App\Models\Banner;
use App\Models\Category;
use App\Services\StorageService;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(StorageService $storageService)
    {
        $data = [
            [
              'name' => ['en' => 'Machines', 'ru' => 'Машинки'],
              'image' => 'category-1.png'
            ], [
                'name' => ['en' => 'Cartridges', 'ru' => 'Картриджи'],
                'image' => 'category-2.png'
            ], [
                'name' => ['en' => 'Power Unit', 'ru' => 'Блок питания'],
                'image' => 'category-3.png'
            ], [
                'name' => ['en' => 'Accessories', 'ru' => 'Аксессуары'],
                'image' => 'category-4.png'
            ]
        ];

        foreach (range(0, 3) as $i) {
            $item_data = $data[$i];
            $fakeImage = $storageService->fileFromLocalUrl(public_path('temporary/' . $item_data['image']));
            $item_data['image'] = $storageService->saveFile($fakeImage, 'categories');
            Category::create($item_data);
        }
    }
}
