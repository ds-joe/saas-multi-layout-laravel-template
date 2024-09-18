<?php

use App\Http\Controllers\Dashboard\User\ProfileController;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth', 'web'])->controller(ProfileController::class)->group(function () {
  Route::get('/profile', 'index')->name('user.profile');
});
