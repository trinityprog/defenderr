<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CharacteristicSet extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function char_tic()
    {
        return $this->hasMany(Characteristic::class, 'char_tic_set_id');
    }
}
