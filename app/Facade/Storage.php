<?php

namespace App\Facade;

use Illuminate\Support\Facades\Facade;


/**
 * @method static ?string store(string $path, \Illuminate\Http\UploadedFile|null $file) Upload file.
 * @method static ?string restore(string $oldFilePath, string $path, ?\Illuminate\Http\UploadedFile $newFile = false) update file
 * @method static bool delete(string $filePath) Delete file.
 * @method static string getPath(string $pathModel) Get path.
 * @method static array getPaths() Get paths.
 * @method static array getRules() Get array of rules like image.
 * @method static ?string getFileUrl(?string $path = null) Get file url
 */
class Storage extends Facade
{
  protected static function getFacadeAccessor(): string
  {
    return "Storage";
  }
}
