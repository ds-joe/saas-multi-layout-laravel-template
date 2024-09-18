<?php

namespace App\Observers\Dashboard;

use App\Models\User;

class UserObserver
{

  /**
   * Additional meta data.
   *
   * @var array
   */
  protected $metaData = [
    '_first_name' => null,
    '_last_name' => null,
    '_avatar' => null,
    '_phone' => null,
  ];

  public function created(User $user)
  {

    foreach ($this->metaData as $key => $value) {
      $user->meta()->create([
        'key' => $key,
        'value' => $value,
      ]);
    }
  }
}
