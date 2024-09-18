<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
  /**
   * Seed the application's database.
   */
  public function run(): void
  {
    User::create([
      'username' => 'admin',
      'email' => 'joe@example.com',
      'password' => bcrypt('password'),
      'email_verified_at' => now(),
    ]);
  }
}
