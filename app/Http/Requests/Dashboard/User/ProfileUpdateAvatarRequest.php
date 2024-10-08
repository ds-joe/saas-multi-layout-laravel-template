<?php

namespace App\Http\Requests\Dashboard\User;

use App\Rules\User\AvatarRule;
use Illuminate\Foundation\Http\FormRequest;

class ProfileUpdateAvatarRequest extends FormRequest
{
  /**
   * Determine if the user is authorized to make this request.
   */
  public function authorize(): bool
  {
    return true;
  }

  /**
   * Get the validation rules that apply to the request.
   *
   * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
   */
  public function rules(): array
  {
    return [
      'avatar' => ['required', new AvatarRule()], # 3 MB Max size
    ];
  }
}
