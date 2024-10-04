<?php

namespace Database\Seeders;

use Spatie\Permission\Models\Permission;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PermissionsSeeder extends Seeder
{
  private string $guard = 'web';
  protected array $permissions = [];

  public function __construct()
  {
    $this->permissions = [
      # Profile
      $this->addPermission('edit profile'),
      $this->addPermission('show profile'),

      # Modules
      $this->addPermission('show modules'),
      $this->addPermission('update modules'),

      # Roles
      $this->addPermission('show roles'),
      $this->addPermission('update roles'),
      $this->addPermission('create roles'),
      $this->addPermission('delete roles'),

      # Users
      $this->addPermission('show users'),
      $this->addPermission('update users'),
      $this->addPermission('delete users'),
      $this->addPermission('create users'),

    ];
  }

  /**
   * Run the database seeds.
   */
  public function run(): void
  {

    DB::transaction(function () {
      collect($this->permissions)
        ->each(function ($permission) {
          Permission::create($permission);
        });
    });
  }

  /**
   * Add permissions method
   *
   * @param string $name
   * @return array
   */
  private function addPermission(string $name): array
  {
    return [
      'name' => $name,
      'guard_name' => $this->guard
    ];
  }
}
