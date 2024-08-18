<?php

namespace App\Http\Controllers\Website;

use App\Http\Controllers\Controller;

abstract class WebsiteController extends Controller
{

  public function __construct()
  {
    $this->setLayoutWords(array_merge(
      // Put your fixed translated words for website here
    ));
  }


  // Put your methods for website pages here!
}
