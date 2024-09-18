<?php

namespace App\Http\Controllers\Dashboard\User;

use App\Http\Controllers\Dashboard\DashboardController;

abstract class UserController extends DashboardController
{

  public function __construct()
  {
    parent::__construct();
    $this->setLayoutWords(array_merge(
      __('dashboard/pages/user/profile')
    ));
  }

  # Any additional methods.

}
