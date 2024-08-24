<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class UserPackage extends Model
{
    use HasFactory, SoftDeletes;

    /**
     * Allowed fillable columns.
     * 
     * @var array
     */
    protected $fillable = [
        'user_id',
        'package_id',
        'price',
        'discount',
        'active_at',
        'freeze_at',
        'freeze_days'
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'created_at' => 'date:Y-m-d',
            'updated_at' => 'date:Y-m-d',
            'deleted_at' => 'date:Y-m-d',
            'active_at' => "date:Y-m-d",
            'freeze_at' => 'date:Y-m-d'
        ];
    }

    /**
     * Get who owner of this package.
     * 
     * @return BelongsTo
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Get package.
     * 
     * @return BelongsTo
     */
    public function package(): BelongsTo
    {
        return $this->belongsTo(Package::class);
    }
}
