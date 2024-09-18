<?php

namespace App\Http\Resources\Dashboard\User;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class InertiaUserResource extends JsonResource
{

  /**
   * Transform the resource into an array.
   *
   * @return array<string, mixed>
   */
  public function toArray(Request $request): array
  {
    return [
      'username' => $this->username,
      'email' => $this->email,
      'created_at' => $this->created_at,
      'avatar' => $this->avatar
    ];
  }
}
