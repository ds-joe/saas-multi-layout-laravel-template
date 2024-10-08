<?php

namespace App\Http\Controllers\Dashboard\User;

use App\Facade\Storage;
use App\Http\Controllers\Dashboard\DashboardController;
use App\Models\User;
use RuntimeException;

abstract class UserController extends DashboardController
{

  public function __construct()
  {
    parent::__construct();
    $this->setLayoutWords(array_merge(
      __('dashboard/pages/user/user'),
    ));
  }

  /**
   * Update user avatar
   *
   * @param User $user
   * @param \Illuminate\Http\UploadedFile|null $avatar
   * @return void
   */
  protected function updateUserAvatar(User $user, \Illuminate\Http\UploadedFile|null $avatar): void
  {
    if (!$avatar) return;

    # Check if avatar field exists.
    if (!$user->meta()->where('key', '_avatar')->exists()) {
      new RuntimeException("Avatar meta data key does not found.");
    }

    # Update avatar
    $newAvatar = Storage::restore(
      $user->avatar_raw,
      Storage::getPath(User::class),
      $avatar
    );

    # Update user in meta
    $user->meta()->where('key', '_avatar')->update([
      'value' => $newAvatar,
    ]);
  }

  /**
   * Remove user avatar
   *
   * @param User $user
   * @return void
   */
  protected function removeUserAvatar(User $user): void
  {
    # Check if avatar field exists.
    if (!$user->meta()->where('key', '_avatar')->exists()) {
      new RuntimeException("Avatar meta data key does not found.");
    }

    # Remove avatar
    $state = Storage::delete($user->avatar_raw);
    if (!$state) {
      new RuntimeException('Something wrong when trying to remove your avatar please try again.');
    }

    $user->meta()->where('key', '_avatar')->update([
      'value' => null,
    ]);
  }

  /**
   * Update user meta data
   *
   * @param User $user
   * @param array $data
   * @return void
   */
  protected function updateMetaData(User $user, array $data): void
  {
    $user->meta()->where('key', '_first_name')->update(['value' => $data['_first_name']]);
    $user->meta()->where('key', '_last_name')->update(['value' => $data['_last_name']]);
  }
}
