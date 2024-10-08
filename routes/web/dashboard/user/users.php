<?php

use App\Http\Controllers\Dashboard\User\UsersController;
use Illuminate\Support\Facades\Route;


Route::middleware('web')->controller(UsersController::class)->group(function () {
  Route::middleware('can:show users')->get('/users', 'index')->name('dashboard.users');
  Route::middleware('can:create users')->get('/user/create', 'createView')->name('dashboard.user.create.view');
  Route::middleware('can:update users')->get('/user/update/{user}', 'updateView')->name('dashboard.user.update.view');
  Route::middleware('can:create users')->post('/user/create', 'create')->name('dashboard.user.create');
  Route::middleware('can:update users')->post('/user/update/{user}', 'update')->name('dashboard.user.update');
  Route::middleware('can:delete users')->delete('/user/delete/{user}', 'delete')->name('dashboard.user.delete');
});
