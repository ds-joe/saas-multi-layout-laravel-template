<?php

use App\Http\Controllers\Dashboard\User\ProfileController;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth', 'web'])->controller(ProfileController::class)->group(function () {
  Route::get('/profile', 'index')->name('user.profile');
  Route::post('/profile/avatar', 'updateAvatar')->name('user.profile.update.avatar');
  Route::delete('/profile/avatar', 'removeAvatar')->name('user.profile.remove.avatar');
  Route::post('/profile/details', 'updateMainDetails')->name('user.profile.update.details');
});
