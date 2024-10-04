<?php

use App\Http\Controllers\Dashboard\Module\ModuleController;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth', 'web'])->controller(ModuleController::class)->group(function () {
  Route::middleware('can:show modules')->get('/modules', 'index')->name('dashboard.modules');
  Route::middleware('can:update modules')->post('/modules/update', 'updateModules')->name('dashboard.modules.update');
});
