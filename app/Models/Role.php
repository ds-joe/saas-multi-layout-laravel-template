<?php

namespace App\Models\Tenancy;

use Spatie\Permission\Models\Role as ModelsRole;
use Illuminate\Database\Eloquent\SoftDeletes;


class Role extends ModelsRole
{
  use SoftDeletes;

  protected $guard_name = 'system';

  protected $casts = [
    'created_at' => 'date:Y-m-d',
    'updated_at' => 'date:Y-m-d',
    'deleted_at' => 'date:Y-m-d',
  ];
}
