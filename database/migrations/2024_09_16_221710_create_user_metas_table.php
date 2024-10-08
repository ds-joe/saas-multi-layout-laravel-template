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
    Schema::create('user_meta', function (Blueprint $table) {
      $table->id();
      $table->string('key');
      $table->longText('value')->nullable();
      $table->boolean('private')->default(false);
      $table->foreignId("user_id")->constrained('users')->cascadeOnDelete();
      $table->softDeletes();
      $table->timestamps();
    });
  }

  /**
   * Reverse the migrations.
   */
  public function down(): void
  {
    Schema::dropIfExists('user_meta');
  }
};
