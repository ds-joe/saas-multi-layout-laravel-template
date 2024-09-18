<?php

namespace App\Rules\User;

use Closure;
use Illuminate\Contracts\Validation\ValidationRule;

class UsernameRule implements ValidationRule
{
  /**
   * Run the validation rule.
   *
   * @param  \Closure(string): \Illuminate\Translation\PotentiallyTranslatedString  $fail
   */
  public function validate(string $attribute, mixed $value, Closure $fail): void
  {
    $pattern = '/^[a-zA-Z0-9_]{3,40}$/';
    if (!preg_match($pattern, $value)) {
      $fail(__('validation.username', ['attribute' => $attribute]));
    }
  }
}
