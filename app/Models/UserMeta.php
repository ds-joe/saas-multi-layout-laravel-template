<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;
use RuntimeException;

/**
 * NOTE: this table using to save additional data of user like google account id, etc..
 * right now we don't have any additional data.
 *
 */
class UserMeta extends Model
{
  use HasFactory, SoftDeletes;

  /**
   * Table name
   *
   * @var string
   */
  protected $table = 'user_meta';

  /**
   * Allowed fillable columns.
   *
   * @var array
   */
  protected $fillable = [
    'key',
    'value',
    'user_id',
    'private'
  ];

  /**
   * Relationship with User model.
   *
   * @return BelongsTo
   */
  public function user(): BelongsTo
  {
    return $this->belongsTo(User::class);
  }

  /**
   * Validate allowed keys in boot
   *
   * @return void
   */
  public static function boot()
  {
    parent::boot();

    static::saving(function ($metaItem) {
      if (!in_array($metaItem->key, config('meta-data.user_meta.allowed_keys', []))) {
        throw new RuntimeException("Your keys not matched allowed keys");
      }
    });
  }
}
