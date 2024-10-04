<?php

use Illuminate\Support\Facades\Route;
use Modules\Bosts\Http\Controllers\BostsController;
use Modules\Bosts\Http\Controllers\Dashboard\DashboardController;

/* ************************************************************************************
    | Example routes
    |
    |
    | This is just example routes for each layout you can change it depending on your logic.
    |
************************************************************************************* */

# None layout controller.
Route::controller(BostsController::class)->group(function () {
    Route::get('bosts/home', 'index')->name('bosts.home');
});

# Dashboard layout controller.
Route::controller(DashboardController::class)->group(function () {
    Route::get('bosts/dashboard/home', 'index')->name('bosts.dashboard.home');
});