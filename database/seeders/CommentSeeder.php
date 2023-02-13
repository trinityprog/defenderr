<?php

namespace Database\Seeders;

use App\Models\Comment;
use App\Services\StorageService;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CommentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Comment::factory(500)->create([
            'avatar' => $this->fakeAvatar()
        ]);
    }

    public function fakeAvatar()
    {
        $storageService = new StorageService();
        $fakeAvatar = $storageService->fileFromWebUrl('https://picsum.photos/200/300');
        return $storageService->saveFile($fakeAvatar, 'comments');
    }
}
