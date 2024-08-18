<?php

namespace App\Services\Storage\Traits;

trait Rules
{

  /**
   * Image rules
   *
   * @var array
   */
  protected array $IMAGE_RULES = [
    'max' => 5124,
    'types' => 'jpeg,bmp,png,svg,jpg',
  ];

  /**
   * Get Rules
   *
   * @return array
   */
  public function getRules(): array
  {
    return [
      'image' => $this->IMAGE_RULES
    ];
  }
}
