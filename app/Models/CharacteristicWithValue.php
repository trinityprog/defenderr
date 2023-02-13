<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CharacteristicWithValue extends Model
{
    use HasFactory;

    protected $table = 'char_tic_char_tic_value_product';

    public $timestamps = [];

    public function characteristic()
    {
        return $this->belongsTo(Characteristic::class, 'char_tic_id');
    }

    public function values()
    {
        return $this->belongsTo(CharacteristicValue::class, 'char_tic_val_id');
    }
}
