<?php

namespace App\Models\Tenancy;

use Spatie\Permission\Models\Permission as ModelsPermission;
use Illuminate\Database\Eloquent\SoftDeletes;


class Permission extends ModelsPermission
{
  use SoftDeletes;

  protected $guard_name = 'system';

  protected $casts = [
    'created_at' => 'date:Y-m-d',
    'updated_at' => 'date:Y-m-d',
    'deleted_at' => 'date:Y-m-d',

  ];
}
