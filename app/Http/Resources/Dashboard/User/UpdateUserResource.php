<?php

namespace App\Http\Resources\Dashboard\User;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class UpdateUserResource extends JsonResource
{
  /**
   * Transform the resource into an array.
   *
   * @return array<string, mixed>
   */
  public function toArray(Request $request): array
  {
    $metaData = collect($this->meta)
      ->reduce(function ($prev, $meta) {
        return array_merge($prev, [$meta->key => $meta->value]);
      }, []);

    return array_merge([
      'id' => $this->id,
      'username' => $this->username,
      'email' => $this->email,
      'created_at' => $this->created_at,
      'avatar' => $this->avatar,
    ], $metaData);
  }
}
