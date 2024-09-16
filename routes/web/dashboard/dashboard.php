<?php

use App\Http\Controllers\Dashboard\HomeController;
use Illuminate\Support\Facades\Route;


Route::middleware(['auth', 'web'])->controller(HomeController::class)->group(function () {
  Route::get('/', 'index')->name('dashboard.home');
});
