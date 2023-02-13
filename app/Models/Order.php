<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;

    protected $guarded = [];

    CONST QUEUE_STATUS = 0; //Заказ в обработке
    CONST SENTED_STATUS = 1; //Заказ отправлен
    CONST COMPLETED_STATUS = 2; //Завершен
    CONST RETURN_STATUS = 3; //Возврат
    CONST RETURNED_STATUS = 4; //Возврат завершен

    public function info()
    {
        return $this->hasOne(OrderInfo::class);
    }

    public function products()
    {
        return $this->hasMany(OrderProduct::class);
    }

    public function currency()
    {
        return $this->hasOne(Currency::class);
    }
}
