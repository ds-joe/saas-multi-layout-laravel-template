<?php

namespace App\Http\Controllers\Dashboard\Role;

use App\Http\Controllers\Dashboard\DashboardController;
use Inertia\Response;
use App\Facade\Inertia;
use App\Services\Inertia\Enums\RenderLayout;
use App\Facade\Notification;
use App\Http\Requests\Dashboard\Role\CreateRoleRequest;
use App\Http\Requests\Dashboard\Role\UpdateRoleRequest;
use App\Http\Resources\Dashboard\Role\PermissionResource;
use App\Services\Notification\Enums\NotificationType;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class RoleController extends DashboardController
{

  /**
   * Default guard name
   *
   * @var string
   */
  private string $guard_name = 'web';

  public function __construct()
  {
    parent::__construct();
    $this->setLayoutWords(array_merge(
      __('dashboard/pages/role/roles')
    ));
  }

  /**
   * Show roles page.
   *
   * @return Response
   */
  public function index(): Response
  {
    return Inertia::render(
      RenderLayout::dashboard,
      'role/roles',
      $this->getLayoutWords(),
      [] // Role resource here
    );
  }

  /**
   * Create view
   *
   * @return Response
   */
  public function createView(): Response
  {
    $permissions = Permission::all();

    return Inertia::render(
      RenderLayout::dashboard,
      'role/create',
      $this->getLayoutWords(),
      [
        'permissions' =>  PermissionResource::collection($permissions)
      ]
    );
  }

  /**
   * Update view
   *
   * @param Role $role
   * @return Response
   */
  public function updateView(Role $role): Response
  {
    $permissions = Permission::all();

    return Inertia::render(
      RenderLayout::dashboard,
      'role/update',
      $this->getLayoutWords(),
      [
        'selected_permissions' => $role->permissions->pluck('name'),
        'permissions' => PermissionResource::collection($permissions),
        'role' => $role
      ]
    );
  }

  /**
   * Create role
   *
   * @param CreateRoleRequest $request
   *
   */
  public function create(CreateRoleRequest $request)
  {
    $role = Role::create([
      'name' => $request->name,
      'guard_name' => $this->guard_name
    ]);
    $role->syncPermissions($request->permissions);

    return redirect()->route('dashboard.roles')
      ->with(Notification::create(
        __('dashboard/pages/role/roles.role_created_successfully'),
        NotificationType::success
      ));
  }

  /**
   * Update role
   *
   * @param UpdateRoleRequest $request
   * @param Role $role
   */
  public function update(UpdateRoleRequest $request, Role $role)
  {
    $role->update([
      'name' => $request->name,
      'guard_name' => $this->guard_name,
    ]);

    # Protect admin permissions
    if ($role->id != 1) {
      $role->syncPermissions($request->permissions);
    }

    return back()
      ->with(Notification::create(
        __('dashboard/pages/role/roles.role_updated_successfully'),
        NotificationType::success
      ));
  }

  /**
   * Delete role
   *
   * @param Role $role
   */
  public function delete(Role $role)
  {

    # Protect admin permissions
    if ($role->id == 1) return back()->with($this->adminErrorNotification());

    $role->delete();

    return redirect()->route('dashboard.roles')
      ->with(Notification::create(
        __('dashboard/pages/role/roles.role_deleted_successfully'),
        NotificationType::success
      ));
  }

  /**
   * Admin Error message.
   *
   * @return array
   */
  private function adminErrorNotification(): array
  {
    return Notification::create(__('dashboard/pages/role/roles.cannot_remove_or_edit_admin'), NotificationType::error);
  }
}
