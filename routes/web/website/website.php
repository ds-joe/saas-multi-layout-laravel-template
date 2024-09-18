<?php

use Illuminate\Support\Facades\Route;

Route::prefix(config('routing.prefix.website'))->group(function () {
  require_once __DIR__ . "/auth/auth.php";
});
