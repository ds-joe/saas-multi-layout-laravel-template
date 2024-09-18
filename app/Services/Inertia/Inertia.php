<?php

namespace App\Services\Inertia;

use App\Services\Inertia\Traits\Render;

class Inertia
{
  use Render;

  /**
   * Resolve route uri
   * NOTE: this method using to resolve route prefix with uri :D.
   *
   * @param string $uri
   * @return string
   */
  public function resolveRouteUri(string $uri): string
  {
    return "/" . trim(preg_replace("/\/\//i", '/', $uri));
  }
}
