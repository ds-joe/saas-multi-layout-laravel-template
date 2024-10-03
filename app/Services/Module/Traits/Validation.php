<?php

namespace App\Services\Module\Traits;

use RuntimeException;

trait Validation
{

  /**
   * Module exists
   *
   * @param string $module
   * @return bool
   */
  protected function exists(string $module): bool
  {
    if ($this->allExists([$module])) {
      return true;
    }
    return throw new RuntimeException('Module not found.');
  }
}
