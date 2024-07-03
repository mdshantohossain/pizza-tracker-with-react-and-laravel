<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('food', function (Blueprint $table) {
            $table->id();
            $table->foreignId('category_id')->constrained()->cascadeOnDelete();
            $table->string('name')->unique();
            $table->float('price');
            $table->string('size');
            $table->string('crust');
            $table->json('toppings');
            $table->longText('description');
            $table->string('slug');
            $table->text('image')->nullable();
            $table->string('total_click')->nullable();
            $table->string('status')->comment('0=disabled, 1=active');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('food');
    }
};
