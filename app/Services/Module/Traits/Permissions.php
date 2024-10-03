<?php

namespace App\Services\Module\Traits;

trait Permissions
{
  /**
   * Check if any module is active
   *
   * @param array $modules
   * @return bool
   */
  public function anyActive(array $modules): bool
  {
    return collect($modules)->contains(fn($module) => isset($this->modules_data[$module]) && $this->modules_data[$module]);
  }

  /**
   * Check if all modules active.
   *
   * @param array $modules
   * @return bool
   */
  public function allActive(array $modules): bool
  {
    return !collect($modules)->contains(fn($module) => !isset($this->modules_data[$module]) || !$this->modules_data[$module]);
  }

  /**
   * All exists
   *
   * @param array $modules
   * @return bool
   */
  public function allExists(array $modules): bool
  {
    return !collect($modules)->contains(fn($module) => !isset($this->modules_data[$module]));
  }
}
