<?php

namespace App\Http\Controllers\Internal;

use App\Http\Controllers\Controller;

abstract class InternalController extends Controller
{

  public function __construct()
  {
    $this->setLayoutWords(array_merge([]));
  }
}
