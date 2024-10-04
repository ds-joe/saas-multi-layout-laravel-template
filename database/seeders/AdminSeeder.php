<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class AdminSeeder extends Seeder
{
  /**
   * Run the database seeds.
   */
  public function run(): void
  {

    DB::transaction(function () {

      # Create admin account
      $admin = User::create([
        'username' => 'admin',
        'email' => 'joe@example.com',
        'password' => bcrypt('password'),
        'email_verified_at' => now(),
      ]);

      # Create admin role & Assign permissions to this role
      $role = Role::create([
        'name' => 'admin',
        'guard_name' => 'web'
      ]);
      $permissions = Permission::all()
        ->pluck('id');
      $role->syncPermissions($permissions);

      # Assign role to admin
      $admin->assignRole($role);
    });
  }
}
