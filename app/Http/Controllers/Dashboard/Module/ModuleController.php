<?php

namespace App\Http\Controllers\Dashboard\Module;

use App\Http\Controllers\Dashboard\DashboardController;
use Inertia\Response;
use App\Facade\Inertia;
use App\Facade\Module;
use App\Services\Inertia\Enums\RenderLayout;
use App\Facade\Notification;
use App\Http\Requests\Dashboard\Module\UpdateModulesRequest;
use App\Services\Notification\Enums\NotificationType;
use RuntimeException;

class ModuleController extends DashboardController
{
  public function __construct()
  {
    parent::__construct();
    $this->setLayoutWords(array_merge(
      __('dashboard/pages/module/modules')
    ));
  }

  /**
   * Display home page
   *
   * @return Response
   */
  public function index(): Response
  {
    return Inertia::render(
      RenderLayout::dashboard,
      'module',
      $this->getLayoutWords()
    );
  }

  /**
   * Update modules
   *
   * @param UpdateModulesRequest $request
   * @return \Illuminate\Http\RedirectResponse
   */
  public function updateModules(UpdateModulesRequest $request): \Illuminate\Http\RedirectResponse
  {

    $modulesNames = collect($request->modules)
      ->map(fn($module) => $module['name'])
      ->toArray();

    # Check if all incoming modules are exists
    if (!Module::allExists($modulesNames)) {
      throw new RuntimeException('Some modules does not exists, please provide valid data.');
    }

    # Convert into real plugins data.
    $plugins = $request->modules ? collect($request->modules)
      ->reduce(function ($prev, $new) {
        return array_merge($prev, [$new['name'] => filter_var($new['status'], FILTER_VALIDATE_BOOLEAN)]);
      }, []) : Module::getStatusInArray();

    # Update plugin status
    Module::updatePluginStatus($plugins);

    return back()->with(
      Notification::create(
        __('dashboard/pages/module/modules.modules_updated_successfully'),
        NotificationType::success
      )
    );
  }
}
