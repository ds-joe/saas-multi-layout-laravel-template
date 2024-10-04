<?php

use App\Http\Controllers\Dashboard\User\ProfileController;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth', 'web'])->controller(ProfileController::class)->group(function () {
  Route::middleware('can:show profile')->get('/profile', 'index')->name('user.profile');
  Route::middleware('can:edit profile')->post('/profile/avatar', 'updateAvatar')->name('user.profile.update.avatar');
  Route::middleware('can:edit profile')->delete('/profile/avatar', 'removeAvatar')->name('user.profile.remove.avatar');
  Route::middleware('can:edit profile')->post('/profile/details', 'updateMainDetails')->name('user.profile.update.details');
});
