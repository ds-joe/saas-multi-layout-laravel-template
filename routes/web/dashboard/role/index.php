<?php

use App\Http\Controllers\Dashboard\Role\RoleController;
use Illuminate\Support\Facades\Route;

Route::middleware(['web', 'auth'])->controller(RoleController::class)->group(function () {
  Route::middleware('can:show roles')->get('/roles', 'index')->name('dashboard.roles');
  Route::middleware('can:create roles')->get('/role/create', 'createView')->name('dashboard.role.create.view');
  Route::middleware('can:update roles')->get('/role/update/{role}', 'updateView')->name('dashboard.role.update.view');
  Route::middleware('can:create roles')->post('/role/create', 'create')->name('dashboard.role.create');
  Route::middleware('can:update roles')->put('/role/update/{role}', 'update')->name('dashboard.role.update');
  Route::middleware('can:delete roles')->delete('/role/delete/{role}', 'delete')->name('dashboard.role.delete');
});
