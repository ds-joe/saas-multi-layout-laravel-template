<?php

namespace App\Providers;

use App\Services\Inertia\Inertia;
use App\Services\Notification\Notification;
use App\Services\Module\Module;
use App\Services\Storage\Storage;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
  /**
   * Register any application services.
   */
  public function register(): void
  {
    //
  }

  /**
   * Bootstrap any application services.
   */
  public function boot(): void
  {
    $this->app->bind("Storage", fn() => new Storage());
    $this->app->bind('Inertia', fn() => new Inertia());
    $this->app->bind('Notification', fn() => new Notification());
    $this->app->bind('Module', fn() => new Module());

    // Disable resource wrapping
    JsonResource::withoutWrapping();
  }
}
