<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Spatie\Permission\Traits\HasRoles;
use App\Observers\Dashboard\UserObserver;
use Illuminate\Database\Eloquent\Attributes\ObservedBy;

#[ObservedBy([UserObserver::class])]
class User extends Authenticatable
{
  use HasFactory, Notifiable, SoftDeletes, HasRoles;

  /**
   * The attributes that are mass assignable.
   *
   * @var array<int, string>
   */
  protected $fillable = [
    'username',
    'email',
    'email_verified_at',
    'password',
  ];

  /**
   * The attributes that should be hidden for serialization.
   *
   * @var array<int, string>
   */
  protected $hidden = [
    'password',
    'remember_token',
  ];

  /**
   * Get the attributes that should be cast.
   *
   * @return array<string, string>
   */
  protected function casts(): array
  {
    return [
      'email_verified_at' => 'date:Y-m-d',
      'created_at' => 'date:Y-m-d',
      'updated_at' => 'date:Y-m-d',
      'deleted_at' => 'date:Y-m-d',
      'password' => 'hashed',
    ];
  }

  /**
   * User meta data.
   *
   * @return HasMany
   */
  public function meta(): HasMany
  {
    return $this->hasMany(UserMeta::class);
  }

  /**
   * Get user avatar
   *
   * @return string|null
   */
  public function getAvatarAttribute(): string|null
  {
    return $this->meta()->where('key', '_avatar')->value('value');
  }
}
