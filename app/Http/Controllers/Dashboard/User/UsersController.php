<?php

namespace App\Http\Controllers\Dashboard\User;

use App\Models\User;
use App\Facade\Notification;
use App\Services\Notification\Enums\NotificationType;
use App\Facade\Inertia;
use App\Facade\Storage;
use App\Http\Requests\Dashboard\User\CreateUserRequest;
use App\Http\Requests\Dashboard\User\UpdateUserRequest;
use App\Http\Resources\Dashboard\User\UpdateUserResource;
use App\Services\Inertia\Enums\RenderLayout;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Inertia\Response;

class UsersController extends UserController
{

  public function __construct()
  {
    parent::__construct();
    $this->setLayoutWords(array_merge([]));
  }

  /**
   * Display users page
   *
   * @return Response
   */
  public function index(): Response
  {
    return Inertia::render(
      RenderLayout::dashboard,
      'user/users/home',
      $this->getLayoutWords(),
      []
    );
  }

  /**
   * Create user page
   *
   * @return Response
   */
  public function createView(): Response
  {
    return Inertia::render(
      RenderLayout::dashboard,
      'user/users/create',
      $this->getLayoutWords(),
      []
    );
  }

  /**
   * Update user page
   *
   * @param User $user
   * @return Response
   */
  public function updateView(User $user): Response
  {

    return Inertia::render(
      RenderLayout::dashboard,
      'user/users/update',
      [
        'user' => UpdateUserResource::collection($user)
      ]
    );
  }

  /**
   * Create user
   *
   * @param CreateUserRequest $request
   * @return \Illuminate\Http\RedirectResponse
   */
  public function create(CreateUserRequest $request): \Illuminate\Http\RedirectResponse
  {
    # Create main details
    $user = User::create([
      'username' => $request->username,
      'password' => Hash::make($request->password),
      'email' => $request->email
    ]);

    # Update meta data
    $this->updateMetaData($user, [
      '_first_name' => $request->_first_name,
      '_last_name' => $request->_last_name,
    ]);

    # Update avatar if there.
    $this->updateUserAvatar($user, $request->file('avatar'));

    # Sync roles
    $this->syncRoles($user, $request->roles);

    return redirect()
      ->route('dashboard.users')
      ->with(
        Notification::create(__('dashboard/pages/user/users.user_created'), NotificationType::success)
      );
  }

  /**
   * Update user
   *
   * @param UpdateUserRequest $request
   * @param User $user
   * @return \Illuminate\Http\RedirectResponse
   */
  public function update(UpdateUserRequest $request, User $user): \Illuminate\Http\RedirectResponse
  {

    # Update user main details
    $user->username = $request->username;
    $user->email = $request->email;
    if ($request->password) {
      $user->password = Hash::make($request->password);
    }
    $user->save();

    # Update meta data
    $this->updateMetaData($user, [
      '_first_name' => $request->_first_name,
      '_last_name' => $request->_last_name,
    ]);

    # Update avatar
    $this->updateUserAvatar($user, $request->file('file'));

    # Sync roles
    $this->syncRoles($user, $request->roles);

    return back()
      ->with(
        Notification::create(__('dashboard/pages/user/users.user_updated'), NotificationType::success)
      );
  }

  /**
   * Delete user request
   *
   * @param User $user
   * @return \Illuminate\Http\RedirectResponse
   */
  public function delete(User $user): \Illuminate\Http\RedirectResponse
  {

    DB::transaction(function () use ($user) {
      $this->removeUserAvatar($user);
      $user->roles()->detach();
      $user->delete();
    });

    return back()
      ->with(
        Notification::create(__('dashboard/pages/user/users.user_deleted'), NotificationType::success)
      );
  }

  /**
   * Sync user roles
   *
   * @param User $user
   * @param array $roles
   * @return void
   */
  private function syncRoles(User $user, array $roles): void
  {
    $user->syncRoles($roles);
  }
}
