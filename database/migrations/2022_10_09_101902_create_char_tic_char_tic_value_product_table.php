<?php

use App\Models\Characteristic;
use App\Models\CharacteristicValue;
use App\Models\Product;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('char_tic_char_tic_value_product', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(Characteristic::class, 'char_tic_id')->constrained('characteristics')->cascadeOnUpdate()->cascadeOnDelete();
            $table->foreignIdFor(CharacteristicValue::class, 'char_tic_val_id')->constrained('characteristic_values')->cascadeOnUpdate()->cascadeOnDelete();
            $table->foreignIdFor(Product::class, 'product_id')->constrained()->cascadeOnUpdate()->cascadeOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('characteristic_characteristic_value');
    }
};
