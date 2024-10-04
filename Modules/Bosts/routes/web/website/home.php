<?php

use Illuminate\Support\Facades\Route;
use Modules\Bosts\Http\Controllers\BostsController;
use Modules\Bosts\Http\Controllers\Website\WebsiteController;

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

# Website layout controller.
Route::controller(WebsiteController::class)->group(function () {
    Route::get('bosts/website/home', 'index')->name('bosts.website.home');
});
