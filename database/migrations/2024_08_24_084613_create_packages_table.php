<?php

use App\Facade\Package;
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
        Schema::create('packages', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->integer('duration')->default(0);
            $table->enum('duration_by', Package::getDurationOptions());
            $table->decimal('price', 8, 2)->default(0.00);
            $table->decimal('discount', 8, 2)->default(0.00);
            $table->integer('addition_days')->default(0);
            $table->boolean('hidden')->default(false);
            $table->foreignId('created_by')->nullable()->constrained('users')->nullOnDelete();
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('packages');
    }
};
