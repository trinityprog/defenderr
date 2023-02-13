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

class CartridgeSeeder extends Seeder
{
    CONST NANO_SYSTEMS_DESCRIPTION =
'Главные преимущества:
•  Самая широкая линейка на рынке ПМ.
•  Тонкий носик, который не загораживает обзор при работе.
•  Запатентованная технологии стабилизации иглы «Z – Systems, Long bar fixing lock» обеспечивает идеально ровный ход, чтобы подчеркнуть самые мелкие детали.
•  Запатентованная система «Ink Flow Cup» гарантирует быстрый набор и равномерную подачу пигмента без разбрызгивания.
•  Облегченная мембрана для предотвращения попадания пигмента в машинку и улучшения возврата иглы.
•  Японская медицинская сталь AISI 316L.
•  Стерилизованы с использованием газа окиси этилена.

Диаметр иглы: 0.18, 0.20, 0.25, 0,27, 0.30, 0.33, 0.35.

Тип заточки:
ST — Short taper 1,5 mm (короткая заточка)
MT – Medium taper 3,5 mm (средняя заточка)
LT – Long taper 7,5 mm (острая заточка)
SLT — Super long taper 8,5 mm (супер острая заточка)
T – Texture (текстура)
RS — Round Shader (короткая заточка шайдер)
SEMST — Soft Edge Magnum Short Taper (закруглённый магнум с короткой заточкой)

________________________________________

Advantages:
•  The widest product range in the market of PM tattoo machines.
•  Thin tip does not block the view during artist’s work.
•  Patented needle stabilizing technology «Z – Systems, Long bar fixing lock» provides ideally smooth operation and let the user highlight the finest details.
•  Patented system «Ink Flow Cup» is a guarantee of quick drawing up the ink and equal pigment feeding without splashing.
•  Simplified membrane for preventing ink from getting into machine and for better needle return.
•  Japanese stainless steel AISI 315L (medical grade).
•  Sterilized with ethylene oxide.

Needle diameter: 0.18, 0.20, 0.25, 0,27, 0.30, 0.33, 0.35.

Taper type:
ST — Short taper 1,5 mm
MT – Medium taper 3,5 mm
LT – Long taper 7,5 mm
SLT — Super long taper 8,5 mm
T – Texture
RS — Round Shader
SEMST — SOFT EDGE MAGNUM SHORT TAPER 3, SOFT EDGE MAGNUM SHORT TAPER 5.';

    CONST INKTEK_DESCRIPTION =
'InkTek Soft Membrane — новые усовершенствованные картриджи от Defenderr.

Главные изменения:
⚡️Новый эргономичный дизайн.
⚡️Облегченная эластичная мембрана нового поколения, разработанная специально для InkTek из силикона высокого качества.
⚡️Усовершенствованная система подачи пигмента — для быстрой и удобной работы.
⚡️Новая марка медицинской стали, которая дает хорошую сцепку с кожей и, благодаря плавному проколу, позволяет работать атравматично.
⚡️Совместимы даже с маломощными аппаратами для ПМ.

👉Технологии Defenderr проверенные временем:

▶️Запатентованная технологии стабилизации иглы «Z – Systems, Long bar fixing lock» обеспечивает идеально ровный ход без лишней вибрации для самых четких пикселей.
⠀
▶️Запатентованная система «Ink Flow Cup» гарантирует равномерную подачу пигмента без разбрызгивания.
⠀
▶️Надежная мембрана для предотвращения попадания пигмента в машинку и улучшения возврата иглы.

📌Конфигурации:
RLST — Round Liner Short Taper (1,5 мм) Короткая пулевидная заточка
RLMT — Round Liner Medium Taper (3,5 мм) Средняя заточка
RLLT — Round Liner Long Taper (7.5 мм) Длинная заточка
RLMT-T — Texture (3,5 мм) Текстура
RSST — Round Shader Short Taper (1,5 мм) Короткая заточка шейдер
SEMST — Soft Edge Magnum Short Taper (1,5 мм) Закруглённый магнум

📌Диаметр иглы: 0.18, 0.25, 0.30, 0.35, 0.40.

⚡️InkTek — мягкие, острые и безупречные картриджи для тех, кто привык выбирать лучшее для своей работы.

_____________________________________

InkTek Soft Membrane — new improved cartridges by Defenderr.

Major modifications:
⚡️New ergonomic design.
⚡️New-generation lightweight elastic membrane specifically designed for InkTek and made of high-quality silicone.
⚡️Advanced pigment supply system — for quick and easy work.
⚡️A new grade of medical steel giving a good skin adhesion and allowing to work atraumatically, thanks to a smooth puncture.
⚡️Compatible even with low-power PMU devices.

👉Time-proved Defenderr technologies:

▶️Patent-protected needle stabilization technology “Z – Systems, Long bar fixing lock” delivers a perfectly smooth, vibration-free operation for clear pixels.

▶️Patented “Ink Flow Cup” system guarantees a uniform supply of pigment without splashing.

▶️Reliable membrane to prevent pigment from entering the device and improve needle return.

📌Configurations:
RLST — Round Liner Short Taper (1.5 mm)
RLMT — Round Liner Medium Taper (3.5 mm)
RLLT — Round Liner Long Taper (7.5 mm)
RLMT-T — Texture (3.5 mm)
RSST — Round Shader Short Taper (1.5 mm)
SEMST — Soft Edge Magnum Short Taper (1.5 mm)

📌Needle diameter: 0.18, 0.25, 0.30, 0.35, 0.40.

⚡️InkTek — soft, sharp and perfect cartridges for those who are used to choosing the best for their work.';

    public function run()
    {
        $this->nano_systems();
        $this->inktek();
    }

    public function nano_systems()
    {
        $configs = [
            '18/01 RLST',
            '20/01 RLST',
            '25/01 RLST',
            '27/01 RLST',
            '30/01 RLST',
            '33/01 RLST',
            '35/01 RLST',
            '18/01 RLMT',
            '20/01 RLMT',
            '25/01 RLMT',
            '27/01 RLMT',
            '30/01 RLMT',
            '33/01 RLMT',
            '35/01 RLMT',
            '18/01 RLHLT',
            '20/01 RLHLT',
            '25/01 RLHLT',
            '27/01 RLHLT',
            '30/01 RLHLT',
            '33/01 RLHLT',
            '35/01 RLHLT',
            '18/01 RLLT',
            '20/01 RLLT',
            '25/01 RLLT',
            '27/01 RLLT',
            '30/01 RLLT',
            '33/01 RLLT',
            '35/01 RLLT',
            '18/01 RLSLT',
            '20/01 RLSLT',
            '25/01 RLSLT',
            '27/01 RLSLT',
            '30/01 RLSLT',
            '33/01 RLSLT',
            '35/01 RLSLT',
            '25/01 RLMT-T',
            '30/01 RLMT-T',
            '35/01 RLMT-T',
            '25/03 RLMT',
            '30/03 RLMT',
            '35/03 RLMT',
            '25/03 RLLT',
            '30/03 RLLT',
            '35/03 RLLT',
            '25/05 RLMT',
            '25/3 RSST',
            '25/5 RSST',
            '25/7 RSST',
            '25/3 SEMST',
            '25/5 SEMST',
        ];

        $line = 'Defenderr Nano Systems';

        $set = CharacteristicSet::query()->where('name', 'Картриджи')->first();
        $set_id = $set->id;

        $char_tic = Characteristic::query()->where('slug', 'taper-type')->first();
        $char_tic_id = $char_tic->id;

        foreach ($configs as $config) {
            $product = Product::create([
               'name' => [
                   'en' => $line . ' ' . $config,
                   'ru' => $line . ' ' . $config
               ],
               'short_name' => [
                    'en' => $config,
                    'ru' => $config
               ],
                'description' => [
                    'en' => self::NANO_SYSTEMS_DESCRIPTION,
                    'ru' => self::NANO_SYSTEMS_DESCRIPTION
                ],
                'parent_group' => 'nano_systems',
                'char_tic_set_id' => $set_id
            ]);

            $storageService = new StorageService();
            $fakeImage = $storageService->fileFromLocalUrl(public_path('temporary/nano-system.png'));
            $product->images()->create([
                'image' => $storageService->saveFile($fakeImage, 'products'),
                'for' => ProductImage::FOR_CARD
            ]);

            $categoryId = Category::where('slug', 'cartriges')->value('id');
            $product->categories()->attach($categoryId);

            $product->prices()->create([
                'value' => 35,
                'for' => 'USD'
            ]);
            $product->prices()->create([
                'value' => 2080,
                'for' => 'RUB'
            ]);


            $type = explode(' ', $config)[1];
            $char_tic_value = CharacteristicValue::query()->firstOrCreate([
                'slug' => Str::slug($type)
            ], [
                'name' => [
                    'en' => $type,
                    'ru' => $type
                ]
            ]);
            $char_tic_value_id = $char_tic_value->id;


            DB::table('char_tic_char_tic_value_product')->insert([
                'char_tic_id' => $char_tic_id,
                'char_tic_val_id' => $char_tic_value_id,
                'product_id' => $product->id
            ]);
        }
    }

    public function inktek()
    {
        $configs = [
            '25/01 RLST',
            '30/01 RLST',
            '25/01 RLMT',
            '30/01 RLMT',
            '35/01 RLMT',
            '18/01 RLLT',
            '25/01 RLLT',
            '30/01 RLLT',
            '35/01 RLLT',
            '40/01 RLLT',
            '25/01 RLMT-T',
            '30/01 RLMT-T',
            '35/01 RLMT-T',
            '25/03 RLMT',
            '30/03 RLMT',
            '35/03 RLMT',
            '25/03 RLLT',
            '30/03 RLLT',
            '35/03 RLLT',
            '25/05 RLLT',
            '25/3 RSST',
            '25/5 RSST',
            '25/7 RSST',
            '25/3 SEMST',
            '25/5 SEMST'
        ];

        $line = 'Defenderr InkTek';

        $set = CharacteristicSet::query()->where('name', 'Картриджи')->first();
        $set_id = $set->id;

        $char_tic = Characteristic::query()->where('slug', 'taper-type')->first();
        $char_tic_id = $char_tic->id;

        foreach ($configs as $config) {
            $product = Product::create([
               'name' => [
                   'en' => $line . ' ' . $config,
                   'ru' => $line . ' ' . $config
               ],
               'short_name' => [
                    'en' => $config,
                    'ru' => $config
                ],
                'description' => [
                    'en' => self::INKTEK_DESCRIPTION,
                    'ru' => self::INKTEK_DESCRIPTION
                ],
                'parent_group' => 'inktek',
                'char_tic_set_id' => $set_id
            ]);

            $storageService = new StorageService();
            $fakeImage = $storageService->fileFromLocalUrl(public_path('temporary/inktek.png'));
            $product->images()->create([
                'image' => $storageService->saveFile($fakeImage, 'products'),
                'for' => ProductImage::FOR_CARD
            ]);

            $categoryId = Category::where('slug', 'cartriges')->value('id');
            $product->categories()->attach($categoryId);

            $product->prices()->create([
                'value' => 35,
                'for' => 'USD'
            ]);
            $product->prices()->create([
                'value' => 1880,
                'for' => 'RUB'
            ]);

            $type = explode(' ', $config)[1];
            $char_tic_value = CharacteristicValue::query()->firstOrCreate([
                'slug' => Str::slug($type)
            ], [
                'name' => [
                    'en' => $type,
                    'ru' => $type
                ]
            ]);
            $char_tic_value_id = $char_tic_value->id;


            DB::table('char_tic_char_tic_value_product')->insert([
                'char_tic_id' => $char_tic_id,
                'char_tic_val_id' => $char_tic_value_id,
                'product_id' => $product->id
            ]);
        }
    }
}
