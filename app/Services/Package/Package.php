<?php

namespace App\Services\Package;


class Package
{

  /**
   * Package duration options
   * 
   * @var array
   */
  private array $durationOptions = ['day', 'month', 'year'];


  /**
   * Get package duration options.
   * 
   * @return array
   */
  public function getDurationOptions(): array
  {
    return $this->durationOptions;
  }
}
