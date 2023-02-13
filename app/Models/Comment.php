<?php

namespace App\Models;

use App\Services\StorageService;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Comment extends Model
{
    use HasFactory, SoftDeletes;

    protected $guarded = [];

    public function getAvatarPathAttribute()
    {
        $storageService = new StorageService();
        return $storageService->checkFile($this->avatar, 'comments');
    }

    public function product()
    {
        return $this->belongsTo(Product::class);
    }
}
