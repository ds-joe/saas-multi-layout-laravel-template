<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;

abstract class DashboardController extends Controller
{
  public function __construct()
  {
    $this->setLayoutWords(array_merge(
      __("dashboard/components/layout/sidebar"),
      __("dashboard/components/layout/navbar"),
      __("dashboard/components/layout/footer"),
    ));
  }

  // Put your methods for dashboard pages here!
}
