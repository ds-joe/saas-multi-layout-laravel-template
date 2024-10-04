<?php

namespace App\Http\Middleware;

use App\Facade\Module;
use Illuminate\Http\Request;
use Inertia\Middleware;
use App\Facade\Notification;
use App\Http\Resources\Dashboard\User\InertiaUserResource;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Spatie\QueryBuilder\QueryBuilder;

class HandleInertiaRequests extends Middleware
{
  /**
   * The root template that is loaded on the first page visit.
   *
   * @var string
   */
  protected $rootView = 'index';

  /**
   * Determine the current asset version.
   */
  public function version(Request $request): string|null
  {
    return parent::version($request);
  }

  /**
   * Get user permissions
   *
   * @return array
   */
  private function getUserPermissions(Request $request): array
  {
    if (!$request->user()) return [];

    return User::findOrFail($request->user()->id)
      ->getAllPermissions()
      ->pluck('name')
      ->toArray();
  }


  /**
   * Define the props that are shared by default.
   *
   * @return array<string, mixed>
   */
  public function share(Request $request): array
  {

    return [
      ...parent::share($request),
      'auth' => [
        'user' => $request->user() ? new InertiaUserResource($request->user()) : null,
        'permissions' => $this->getUserPermissions($request)
      ],
      'modules' => Module::getModulesWithConfig(),
      Notification::getSessionName() => Notification::getSessionNotification(),
    ];
  }
}
