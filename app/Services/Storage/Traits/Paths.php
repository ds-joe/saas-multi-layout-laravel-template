<?php

namespace App\Services\Storage\Traits;

use App\Models\User;
use Illuminate\Support\Facades\Vite;

trait Paths
{
  /**
   * application paths.
   * 
   * @var array
   */
  protected $PATHS = [];

  /**
   * Construct method
   * 
   * @return void 
   */
  public function __construct()
  {
    $this->PATHS = [
      User::class => "users",
    ];
  }

  /**
   * Add paths.
   * 
   * @param array $paths
   * @return array
   */
  public function setPaths(array $paths): array
  {
    $this->PATHS = array_unique(
      array_merge($this->PATHS, $paths)
    );
    return $this->PATHS;
  }

  /**
   * Get system path.
   *
   * @param string $pathModel
   * @return string
   */
  public function getPath(string $pathModel): string
  {
    return $this->PATHS[$pathModel];
  }


  /**
   * Get system paths.
   *
   * @return array
   */
  public function getPaths(): array
  {
    return $this->PATHS;
  }

  /**
   * Get file url
   *
   * @param ?string $path = null
   * @return ?string
   */
  public function getFileUrl(?string $path = null): ?string
  {
    if (!$path) return null;
    return  Vite::asset('public/storage/uploads' . "/" . $path);
  }
}
