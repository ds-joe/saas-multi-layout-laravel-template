<?php

use Illuminate\Support\Facades\Route;

Route::prefix(config('routing.prefix.dashboard'))->group(function () {
  require_once __DIR__ . "/home.php";
  require_once __DIR__ . "/user/index.php";
});
