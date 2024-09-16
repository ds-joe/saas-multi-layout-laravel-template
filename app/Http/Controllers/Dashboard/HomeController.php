<?php

namespace App\Http\Controllers\Dashboard;

use App\Facade\Inertia;
use App\Services\Inertia\Enums\RenderLayout;
use Inertia\Response;

class HomeController extends DashboardController
{
  public function __construct()
  {
    parent::__construct();
    $this->setLayoutWords(array_merge(
      __("dashboard/pages/home"),
    ));
  }

  /**
   * Display home page.
   *
   * @return Response
   */
  public function index(): Response
  {
    return Inertia::render(
      RenderLayout::dashboard,
      'home',
      $this->getLayoutWords(),
    );
  }
}
