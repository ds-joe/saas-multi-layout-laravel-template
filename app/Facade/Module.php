<?php

namespace App\Facade;

use Illuminate\Support\Facades\Facade;


/**
 * @method static bool anyActive(array $modules) Check if any module is active
 * @method static bool allActive(array $modules) Check if all modules active
 * @method static bool allExists(array $modules) Check if all modules exists
 * @method static string getFileContent() by default it return content as json data.
 * @method static array updatePluginStatus(array $plugins) Update file content.
 * @method static array getStatusInArray() Get in array.
 * @method static array getModuleInfo(string $name) Get module config information.
 * @method static array getModulesWithConfig() Get modules config with information.
 */

class Module extends Facade
{
  protected static function getFacadeAccessor(): string
  {
    return "Module";
  }
}
