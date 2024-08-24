<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Service extends Model
{
    use HasFactory;

    /**
     * Allowed fillable columns
     * 
     * @var array
     */
    protected $fillable = [
        'name',
        'author',
        'status',
        'disabled_by',
        'disabled_at',
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
            'disabled_at' => 'date:Y-m-d'
        ];
    }

    /**
     * Get who disabled this service.
     * 
     * @return BelongsTo
     */
    public function disabledBy(): BelongsTo
    {
        return $this->belongsTo(User::class, 'disabled_by');
    }
}
