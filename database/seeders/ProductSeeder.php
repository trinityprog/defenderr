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

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->createMachines();
        $this->createCartridges();
        $this->createOtherProducts();
    }

    public function createMachines()
    {
        $models = ['Iron S', 'Diamond', 'Ruby', 'Vector', 'Onyx', 'Titanium'];
        $colors = ['Stealth', 'Gunmetal', 'Brownstone', 'Chromium', 'Pink'];

        $categoryId = Category::where('name->en', 'Machines')->value('id');

        foreach (range(1, rand(20, 40)) as $i) {
            $productModel = fake()->randomElement($models);
            $productName = 'Defender' . ' ' . $productModel . ' ' . fake()->randomElement($colors) . ' ' . rand(10, 99);
            $product = Product::create([
                'name' => [
                    'en' => $productName,
                    'ru' => $productName,
                ],
                'short_name' => [
                    'en' => $productModel,
                    'ru' => $productModel,
                ],
                'description' => [
                    'en' => fake()->text(),
                    'ru' => fake()->text(),
                ],
                'parent_group' => Str::slug($productModel),
                'is_popular' => fake()->randomElement([true, false]),
                'amazon_link' => rand(0, 1) ? 'https://www.amazon.com/' : ''
            ]);

            $storageService = new StorageService();
            $randNumber = rand(1, 4);
            $fakeImage = $storageService->fileFromLocalUrl(public_path('temporary/machine-' . $randNumber . '.png'));
            $product->images()->create([
                'image' => $storageService->saveFile($fakeImage, 'products'),
                'for' => ProductImage::FOR_CARD,
                'order' => 1
            ]);
            $fakeImage = $storageService->fileFromLocalUrl(public_path('temporary/machine-' . $randNumber + 1  . '.png'));
            $product->images()->create([
                'image' => $storageService->saveFile($fakeImage, 'products'),
                'for' => ProductImage::FOR_CARD,
                'order' => 2
            ]);
            $fakeImage = $storageService->fileFromLocalUrl(public_path('temporary/color-' . rand(1, 5)  . '.png'));
            $product->images()->create([
                'image' => $storageService->saveFile($fakeImage, 'products'),
                'for' => ProductImage::FOR_OPTION
            ]);


            $product->prices()->create([
                'value' => rand(100, 1000)
            ]);
            $product->prices()->create([
                'value' => rand(100, 1000),
                'for' => 'RUB'
            ]);


            $product->categories()->attach($categoryId);

            $this->createMachinesCharacteristics($product);

            if(rand(0, 3) > 1) {
                $images = ['titanium-background.png', 'ruby-background.png', 'iron-s-background.png'];
                $storageService = new StorageService();
                $fakeImage = $storageService->fileFromLocalUrl(public_path('temporary/' . fake()->randomElement($images)));

                $product->update(['is_newest' => true]);
                $product->images()->create([
                    'image' => $storageService->saveFile($fakeImage, 'products'),
                    'for' => ProductImage::FOR_NEWEST
                ]);
            }
        }
    }

    public function createMachinesCharacteristics($product)
    {
        $CharTicSet = CharacteristicSet::firstOrCreate([
            'name' => 'For Machines'
        ]);
        $product->update([
            'char_tic_set_id' => $CharTicSet->id
        ]);

        $CharTic = Characteristic::firstOrCreate([
            'name->en' => 'Needle Stroke'
        ], [
            'name' => [
                'en' => 'Needle Stroke',
                'ru' => 'Ход Иглы'
            ],
            'filter_all_variants' => [
                'en' => 'All Needle Strokes',
                'ru' => 'Все Ходы Игл'
            ],
            'char_tic_set_id' => $CharTicSet->id,
            'filterable' => true
        ]);
        $needle_strokes = ['2.38', '2.5', '3.5', '7 eccentrics'];
        $rand = fake()->randomElement($needle_strokes);
        $CharTicValue = CharacteristicValue::firstOrCreate([
            'name->en' => $rand
        ], [
            'name' => [
                'en' => $rand,
                'ru' => $rand
            ]
        ]);
        DB::table('char_tic_char_tic_value_product')->insert([
            'char_tic_id' => $CharTic->id,
            'char_tic_val_id' => $CharTicValue->id,
            'product_id' => $product->id
        ]);

        $CharTic = Characteristic::firstOrCreate([
            'name->en' => 'Select color'
        ], [
            'name' => [
                'en' => 'Select color',
                'ru' => 'Выбор цвета'
            ],
            'char_tic_set_id' => $CharTicSet->id
        ]);
        $colors = [
            'Stealth' => '#717486',
            'Gunmetal' => '#5C5D5B',
            'Brownstone' => '#625A54',
            'Chromium' => '#36422F',
            'Pink' => '#EC3B83'
        ];
        $randColor = fake()->randomElement(array_keys($colors));
        $CharTicValue = CharacteristicValue::firstOrCreate([
            'name->en' => $randColor
        ], [
            'name' => [
                'en' => $randColor,
                'ru' => $randColor
            ]
        ]);
        DB::table('char_tic_char_tic_value_product')->insert([
            'char_tic_id' => $CharTic->id,
            'char_tic_val_id' => $CharTicValue->id,
            'product_id' => $product->id
        ]);

        ProductColor::firstOrCreate([
            'name' => $randColor,
        ], [
            'name' => $randColor,
            'slug' => $CharTicValue->slug,
            'code' => fake()->randomElement($colors)
        ]);
    }

    public function createCartridges()
    {
        $models = ['RRLT', 'RLMT', 'RLST', 'RLMT', 'RLHLT', 'RLLT', 'RLST', 'RLMT-T', 'RSST', 'SEMST'];
        $configs = ['18/01', '20/01', '25/01', '30/01', '33/01', '35/01'];
        $lines = ['Nano System', 'Ink Tek'];

        $categoryId = Category::where('name->en', 'Cartridges')->value('id');

        foreach (range(1, rand(50, 60)) as $i) {
            $productName = fake()->randomElement($lines);
            $productShortName = fake()->randomElement($models) . ' ' . fake()->randomElement($configs);
            $product = Product::create([
                'name' => [
                    'en' => $productName,
                    'ru' => $productName,
                ],
                'short_name' => [
                    'en' => $productShortName,
                    'ru' => $productShortName,
                ],
                'description' => [
                    'en' => fake()->text(),
                    'ru' => fake()->text(),
                ]
            ]);

            $storageService = new StorageService();
            $fakeImageName = $productName === 'Ink Tek' ? 'ink-tek-' . rand(1, 3) : 'nano-system-' . rand(1, 4);
            $fakeImage = $storageService->fileFromLocalUrl(public_path('temporary/' . $fakeImageName . '.png'));
            $product->images()->create([
                'image' => $storageService->saveFile($fakeImage, 'products'),
                'for' => ProductImage::FOR_CARD
            ]);
            $product->prices()->create([
                'value' => rand(100, 1000)
            ]);
            $product->prices()->create([
                'value' => rand(100, 1000),
                'for' => 'RUB'
            ]);

            $product->categories()->attach($categoryId);

            $this->createCartridgesCharacteristics($product);
        }
    }

    public function createCartridgesCharacteristics($product)
    {
        $CharTicSet = CharacteristicSet::firstOrCreate([
            'name' => 'For Cartridges',
        ]);
        $product->update([
            'char_tic_set_id' => $CharTicSet->id
        ]);

        $CharTic = Characteristic::firstOrCreate([
            'name->en' => 'Line'
        ], [
            'name' => [
                'en' => 'Line',
                'ru' => 'Линейка'
            ],
            'filter_all_variants' => [
                'en' => 'All Lines',
                'ru' => 'Все Линейки'
            ],
            'char_tic_set_id' => $CharTicSet->id,
            'filterable' => true
        ]);

        $name = $product->getTranslation('name', 'en');
        $storageService = new StorageService();
        $fakeImageName = $name === 'Nano System' ? 'nano-system-char-tic.png' : 'ink-tek-char-tic.png';
        $fakeImage = $storageService->fileFromLocalUrl(public_path('temporary/' . $fakeImageName));
        $CharTicValue = CharacteristicValue::firstOrCreate([
            'name->en' => $product->getTranslation('name', 'en')
        ], [
            'name' => [
                'en' => $product->getTranslation('name', 'en'),
                'ru' => $product->getTranslation('name', 'ru')
            ],
            'image' => $storageService->saveFile($fakeImage, 'characteristics'),
        ]);
        DB::table('char_tic_char_tic_value_product')->insert([
            'char_tic_id' => $CharTic->id,
            'char_tic_val_id' => $CharTicValue->id,
            'product_id' => $product->id
        ]);

        $CharTic = Characteristic::firstOrCreate([
            'name->en' => 'Pattern'
        ], [
            'name' => [
                'en' => 'Pattern',
                'ru' => 'Узор'
            ],
            'filter_all_variants' => [
                'en' => 'All Patterns',
                'ru' => 'Все Узоры'
            ],
            'char_tic_set_id' => $CharTicSet->id,
            'filterable' => true
        ]);
        $patterns = [
            '1 Needle',
            '3 Needle',
            '5 Needle',
            '7 Needle',
            '1 Textured Needle',
            '5 Shader',
            '7 Shader',
            '3 Magnum',
            '5 Magnum',
        ];
        $rand = fake()->randomElement($patterns);
        $CharTicValue = CharacteristicValue::firstOrCreate([
            'name->en' => $rand
        ], [
            'name' => [
                'en' => $rand,
                'ru' => $rand
            ]
        ]);
        DB::table('char_tic_char_tic_value_product')->insert([
            'char_tic_id' => $CharTic->id,
            'char_tic_val_id' => $CharTicValue->id,
            'product_id' => $product->id
        ]);

        $CharTic = Characteristic::firstOrCreate([
            'name->en' => 'Type'
        ], [
            'name' => [
                'en' => 'Type',
                'ru' => 'Тип'
            ],
            'filter_all_variants' => [
                'en' => 'All Types',
                'ru' => 'Все Типы'
            ],
            'char_tic_set_id' => $CharTicSet->id,
            'filterable' => true
        ]);
        $types = ['RRLT', 'RLMT', 'RLST', 'RLMT', 'RLHLT', 'RLLT', 'RLST', 'RLMT-T', 'RSST', 'SEMST'];
        $rand = fake()->randomElement($types);
        $CharTicValue = CharacteristicValue::firstOrCreate([
            'name->en' => $rand
        ], [
            'name' => [
                'en' => $rand,
                'ru' => $rand
            ]
        ]);
        DB::table('char_tic_char_tic_value_product')->insert([
            'char_tic_id' => $CharTic->id,
            'char_tic_val_id' => $CharTicValue->id,
            'product_id' => $product->id
        ]);
    }

    public function createOtherProducts()
    {
        foreach (range(1, 20) as $i) {
            $category = Category::query()->whereNotIn('name->en', ['Machines', 'Cartridges', 'Accessories'])->inRandomOrder()->first();
            $categoryId = $category->id;

            $productName = 'Defender' . ' ' . fake()->sentence(rand(2, 3));
            $productShortName = fake()->sentence(rand(2, 3));
            $product = Product::create([
                'name' => [
                    'en' => $productName,
                    'ru' => $productName,
                ],
                'short_name' => [
                    'en' => $productShortName,
                    'ru' => $productShortName,
                ],
                'description' => [
                    'en' => fake()->text(),
                    'ru' => fake()->text(),
                ]
            ]);

            $storageService = new StorageService();
            $fakeImageName = $category->slug == 'power-unit' ? 'power-' . rand(1, 2) : 'accessories-' . rand(1, 2);
            $fakeImage = $storageService->fileFromLocalUrl(public_path('temporary/' . $fakeImageName . '.png'));
            $product->images()->create([
                'image' => $storageService->saveFile($fakeImage, 'products'),
                'for' => ProductImage::FOR_CARD
            ]);


            $product->prices()->create([
                'value' => rand(100, 1000)
            ]);
            $product->prices()->create([
                'value' => rand(100, 1000),
                'for' => 'RUB'
            ]);


            $product->categories()->attach($categoryId);
        }
    }
}
