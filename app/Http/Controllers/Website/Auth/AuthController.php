<?php

namespace App\Http\Controllers\Website\Auth;

use App\Http\Controllers\Website\WebsiteController;

abstract class AuthController extends WebsiteController
{

  public function __construct()
  {
    parent::__construct();
    $this->setLayoutWords(array_merge(
      __('website/auth'),
    ));
  }

  // Your custom auth method here.
}
