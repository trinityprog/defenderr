<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\File;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
         User::query()->forceCreate([
             'name' => 'Admin',
             'email' => 'admin@defenderrsupply.com',
             'password' => bcrypt('Y1xvF8q9x74%'),
             'role' => 'admin',
         ]);


        File::deleteDirectory(storage_path('app/public/banners'));
        File::deleteDirectory(storage_path('app/public/categories'));
        File::deleteDirectory(storage_path('app/public/characteristics'));
        File::deleteDirectory(storage_path('app/public/products'));
        File::deleteDirectory(storage_path('app/public/comments'));

        Artisan::call('cache:clear');

         $this->call([
            BannerSeeder::class,
            CategorySeeder::class,
            ProductSeeder::class,
            CurrencySeeder::class,
            FaqSeeder::class,
            DistributorSeeder::class,
            CommentSeeder::class,
         ]);

    }
}
