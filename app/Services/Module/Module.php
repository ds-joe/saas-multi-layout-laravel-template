<?php

namespace App\Services\Module;

use Illuminate\Support\Facades\File;
use App\Services\Module\Traits;
use RuntimeException;

class Module
{

  use Traits\Permissions, Traits\Validation;

  /**
   * The path of modules status file
   *
   * @var string
   */
  private string $modules_file;

  /**
   * Modules config
   *
   * @var array
   */
  protected array $modules_config;

  /**
   * The modules status array.
   *
   * @var array
   */
  protected array $modules_data;

  public function __construct()
  {
    $this->modules_file = base_path('modules_statuses.json');
    $this->modules_data = json_decode($this->getFileContent(), true);
    $this->modules_config = config('modules');
  }

  /**
   * Get File Content.
   * NOTE: by default it return content as json data.
   *
   * @return string
   */
  public function getFileContent(): string
  {
    $content = "";
    if (File::exists($this->modules_file)) return File::get($this->modules_file);
    return $content;
  }

  /**
   * Get Module information
   *
   * @param string $module
   * @return array
   */
  public function getModuleInfo(string $module): array
  {
    $this->exists($module);
    $moduleConfigPath = $this->modules_config['paths']['modules']  . "/" . $module . "/" . "module.json";
    if (!File::exists($moduleConfigPath)) {
      throw new RuntimeException("Module config file not found for module: '{$module}'. Please ensure you have published the module config file.");
    }
    return json_decode(File::get($moduleConfigPath), true);
  }

  /**
   * Update file content
   *
   * @param array $plugins
   * @return array
   */
  public function updatePluginStatus(array $plugins): array
  {
    if (File::exists($this->modules_file)) {
      File::put($this->modules_file, json_encode($plugins));
      $this->modules_data = $plugins;
    }
    return $plugins;
  }

  /**
   * Get in array.
   *
   * @return array
   */
  public function getStatusInArray(): array
  {
    return $this->modules_data;
  }

  /**
   * Get modules with config.
   *
   * @return array
   */
  public function getModulesWithConfig(): array
  {
    return collect($this->modules_data)->keys()
      ->map(function ($moduleName) {
        return array_merge(
          $this->getModuleInfo($moduleName),
          ['status' => $this->modules_data[$moduleName]]
        );
      })->toArray();
  }
}
