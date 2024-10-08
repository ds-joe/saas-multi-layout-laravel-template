<?php

namespace App\Rules\User;

use Closure;
use Illuminate\Contracts\Validation\ValidationRule;

class AvatarRule implements ValidationRule
{
  /**
   * Run the validation rule.
   *
   * @param  \Closure(string): \Illuminate\Translation\PotentiallyTranslatedString  $fail
   */
  public function validate(string $attribute, mixed $value, Closure $fail): void
  {
    // Allowed MIME types
    $allowedMimes = ['image/png', 'image/jpg', 'image/jpeg', 'image/svg+xml', 'image/webp'];
    $maxSize = 3072; # Max size in kilobytes

    # Validate if it's a valid file
    if (!$value->isValid()) {
      $fail(__('validation.avatar_validate', ['attribute' => $attribute]));
      return;
    }

    # Validate MIME type
    if (!in_array($value->getMimeType(), $allowedMimes)) {
      $fail(__('validation.avatar_type', ['attribute' => $attribute]));
      return;
    }

    # Validate file size
    if ($value->getSize() / 1024 > $maxSize) {
      $fail(__('validation.avatar_size', ['attribute' => $attribute]));
      return;
    }
  }
}
