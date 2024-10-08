<?php

namespace App\Http\Controllers\Internal\Role;

use App\Http\Controllers\Internal\InternalController;
use Spatie\Permission\Models\Role;
use Spatie\QueryBuilder\QueryBuilder;

class RoleController extends InternalController
{

  public function __construct()
  {
    parent::__construct();
    $this->setLayoutWords(array_merge([]));
  }

  /**
   * Get roles
   *
   * @param Request $request
   * @return \Illuminate\Http\JsonResponse
   */
  public function getNormalRoles(): \Illuminate\Http\JsonResponse
  {
    $query = QueryBuilder::for(Role::class)
      ->allowedFilters(['name', 'id'])
      ->get(['name', 'id'])
      ->toArray();
    return response()->json($query);
  }
}
