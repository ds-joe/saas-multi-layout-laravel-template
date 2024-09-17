<?php

use App\Http\Controllers\Website\Auth\LoginController;
use Illuminate\Support\Facades\Route;

Route::middleware(['web', 'guest'])->controller(LoginController::class)->group(function () {
  Route::get('/login', 'index')->name('login');
  Route::post('/login', 'login')->name('auth.login');
});

Route::middleware(['web', 'auth'])->controller(LoginController::class)->group(function () {
  Route::post('/logout', 'logout')->name('auth.logout');
});
