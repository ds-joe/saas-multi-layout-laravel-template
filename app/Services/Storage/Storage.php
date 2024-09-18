<?php

namespace App\Services\Storage;

use App\Services\Storage\Traits\Paths;
use App\Services\Storage\Traits\Rules;
use Illuminate\Support\Facades\Storage as FStorage;

class Storage
{
  use Paths, Rules;

  /**
   * Uploads disk
   *
   * @var string
   */
  private string $uploadsDisk = 'uploads';

  /**
   * Store file.
   *
   * @param string $path
   * @param \Illuminate\Http\UploadedFile|null $file
   * @return ?string
   */
  public function store(string $path, \Illuminate\Http\UploadedFile|null $file): ?string
  {

    if (!$file) return null;

    # Store the file using the specified disk.
    $filename = $file->getClientOriginalName();
    $extension = $file->getClientOriginalExtension();
    $newFilename = md5($filename . time()) . '.' . $extension;

    # Store the file using the specified disk
    return $file->storeAs($path, $newFilename, $this->uploadsDisk);
  }

  /**
   * Update file.
   *
   * @param ?string $oldFilePath
   * @param string $path
   * @param \Illuminate\Http\UploadedFile|null $newFile
   * @return string|null
   */
  public function restore(?string $oldFilePath, string $path, ?\Illuminate\Http\UploadedFile $newFile): ?string
  {
    # Check if the old file exists
    if (!$newFile) return $oldFilePath;

    # Delete the old file
    if ($oldFilePath) {
      FStorage::disk($this->uploadsDisk)->exists($oldFilePath) && $this->delete($oldFilePath);
    }

    # Store the new file if provided
    if ($newFile) return $this->store($path, $newFile);

    return null;
  }

  /**
   * Delete file.
   *
   * @param string $filePath
   * @return bool
   */
  public function delete(string $filePath): bool
  {
    # Check if the file exists
    if (!FStorage::disk($this->uploadsDisk)->exists($filePath)) return false;

    # Delete the file
    return FStorage::disk($this->uploadsDisk)->delete($filePath);
  }
}
