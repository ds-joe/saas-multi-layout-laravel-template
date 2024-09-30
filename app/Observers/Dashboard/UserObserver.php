<?php

namespace App\Observers\Dashboard;

use App\Models\User;
use Illuminate\Support\Facades\DB;

class UserObserver
{

  /**
   * Additional meta data.
   *
   * @var array
   */
  protected $metaData = [
    '_first_name' => 'Demo',
    '_last_name' => null,
    '_avatar' => null,
  ];

  public function created(User $user)
  {
    DB::transaction(function () use ($user) {
      foreach ($this->metaData as $key => $value) {
        $user->meta()->create([
          'key' => $key,
          'value' => $value,
        ]);
      }
    });
  }
}
