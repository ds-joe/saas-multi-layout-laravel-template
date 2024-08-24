<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class PackageService extends Model
{
    use HasFactory;

    /**
     * Allowed timestamps ( created_at, updated_at )
     * 
     * @var bool
     */
    public $timestamps = false;

    /**
     * Allowed fillable columns.
     * 
     * @var array
     */
    protected $fillable = [
        'package_id',
        'service_id',
    ];

    /**
     * Get package.
     * 
     * @return BelongsTo
     */
    public function package(): BelongsTo
    {
        return $this->belongsTo(Package::class);
    }

    /**
     * Get service.
     * 
     * @return BelongsTo
     */
    public function service(): BelongsTo
    {
        return $this->belongsTo(Service::class);
    }
}
