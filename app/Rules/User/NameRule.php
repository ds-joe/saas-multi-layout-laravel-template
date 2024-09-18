<?php

namespace App\Rules\User;

use Closure;
use Illuminate\Contracts\Validation\ValidationRule;

class NameRule implements ValidationRule
{
  /**
   * Run the validation rule.
   *
   * @param  \Closure(string): \Illuminate\Translation\PotentiallyTranslatedString  $fail
   */
  public function validate(string $attribute, mixed $value, Closure $fail): void
  {
    $pattern = '/^([a-zA-Z]([0-9]?)){3,50}/';

    if (!preg_match($pattern, $value)) {
      $fail(__('validation.name', ['attribute' => $attribute]));
    }
  }
}
