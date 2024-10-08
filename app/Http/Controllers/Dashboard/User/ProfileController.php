<?php

namespace App\Http\Controllers\Dashboard\User;

use App\Facade\Inertia;
use App\Facade\Notification;
use App\Facade\Storage;
use App\Http\Requests\Dashboard\User\ProfileUpdateAvatarRequest;
use App\Http\Requests\Dashboard\User\ProfileUpdateMainDetailsRequest;
use App\Models\User;
use App\Services\Inertia\Enums\RenderLayout;
use App\Services\Notification\Enums\NotificationType;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Response;
use RuntimeException;

class ProfileController extends UserController
{

  public function __construct()
  {
    parent::__construct();
    $this->setLayoutWords(array_merge(
      __('dashboard/pages/user/profile'),
    ));
  }

  /**
   * Display profile page.
   *
   * @return Response
   */
  public function index(): Response
  {
    return Inertia::render(
      RenderLayout::dashboard,
      'user/profile',
      $this->getLayoutWords()
    );
  }

  /**
   * Update profile image
   *
   * @param ProfileUpdateAvatarRequest $request
   * @return \RuntimeException|\Illuminate\Http\RedirectResponse
   */
  public function updateAvatar(ProfileUpdateAvatarRequest $request): \RuntimeException|\Illuminate\Http\RedirectResponse
  {
    $user = User::findOrFail($request->user()->id);

    $this->updateUserAvatar($user, $request->file('avatar'));

    return back()->with(Notification::create(
      __('dashboard/pages/user/profile.avatar_updated'),
      NotificationType::success
    ));
  }

  /**
   * Remove profile avatar.
   *
   * @param Request $request
   * @return \Illuminate\Http\RedirectResponse
   */
  public function removeAvatar(Request $request): \Illuminate\Http\RedirectResponse
  {
    $user = User::findOrFail($request->user()->id);

    $this->removeUserAvatar($user);

    return back()->with(Notification::create(
      __('dashboard/pages/user/profile.avatar_removed'),
      NotificationType::success
    ));
  }

  /**
   * Update profile information.
   *
   * @param ProfileUpdateMainDetailsRequest $request
   * @return \RuntimeException|\Illuminate\Http\RedirectResponse
   */
  public function updateMainDetails(ProfileUpdateMainDetailsRequest $request): \RuntimeException|\Illuminate\Http\RedirectResponse
  {
    $user = User::findOrFail($request->user()->id);

    # Meta data required keys.
    $requiredKeys = ['_first_name', '_last_name'];
    $containsAllKeys = collect($user->meta)->whereIn('key', $requiredKeys)->pluck('key')->intersect($requiredKeys)->count() === count($requiredKeys);

    if (!$containsAllKeys) {
      return new RuntimeException("Some meta fields not found.");
    }

    # Update user information
    DB::transaction(function () use ($user, $request) {
      $user->update([
        'username' => $request->username,
        'email' => $request->email,
      ]);

      if ($request->password) {
        $user->update(['password' => bcrypt($request->password)]);
      }

      // Update meta data
      $user->meta()->where('key', '_first_name')->update(['value' => $request->_first_name]);
      $user->meta()->where('key', '_last_name')->update(['value' => $request->_last_name]);
    });

    return back()->with(Notification::create(
      __('dashboard/pages/user/profile.profile_updated'),
      NotificationType::success
    ));
  }
}
