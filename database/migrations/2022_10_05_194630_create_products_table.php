<?php

use App\Models\CharacteristicSet;
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
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->json('name');
            $table->json('short_name')->nullable();
            $table->string('slug');
            $table->json('description')->nullable();
            $table->string('parent_group')->nullable();
            $table->string('amazon_link')->nullable();
            $table->tinyInteger('is_newest')->default(false);
            $table->tinyInteger('is_popular')->default(false);
            $table->tinyInteger('active')->default(true);
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
};
