<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Internal\Role\RoleController;

Route::middleware(['auth'])->controller(RoleController::class)->group(function () {
  Route::middleware('can:show roles')->get('roles/normal', 'getNormalRoles')->name('internal.roles-normal.get');
});
