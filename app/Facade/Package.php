<?php

namespace App\Facade;

use Illuminate\Support\Facades\Facade;


/**
 * @method static array getDurationOptions() Get package duration options.
 */
class Package extends Facade
{
  protected static function getFacadeAccessor(): string
  {
    return "Package";
  }
}
