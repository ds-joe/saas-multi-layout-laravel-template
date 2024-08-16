<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class UsedFeature extends Model
{
    use HasFactory;

    protected array $fillable = [
        'feature_id',
        'user_id',
        'credits',
    ];

    /**
     * Casts
     * 
     * @return array
     */
    protected function casts(): array
    {
        return  [
            'data' => 'array'
        ];
    }

    /**
     * Who used feature
     * 
     * @return BelongsTo
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    /**
     * The used feature
     * 
     * @return BelongsTo
     */
    public function feature(): BelongsTo
    {
        return $this->belongsTo(Feature::class);
    }
}
