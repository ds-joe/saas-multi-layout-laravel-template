<?php

use App\Facade\Inertia;
use App\Services\Inertia\Enums\RenderLayout;
use Illuminate\Support\Facades\Route;


Route::get('/', function () {
  return Inertia::render(
    RenderLayout::dashboard,
    'home',
    []
  );
});
