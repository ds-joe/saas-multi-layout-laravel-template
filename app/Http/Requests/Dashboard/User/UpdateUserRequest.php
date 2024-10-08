<?php

namespace App\Http\Requests\Dashboard\User;

use App\Rules\User\AvatarRule;
use App\Rules\User\PasswordRule;
use App\Rules\User\UsernameRule;
use Illuminate\Foundation\Http\FormRequest;

class UpdateUserRequest extends FormRequest
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
    $meta_rules = config('meta-data.user_meta.validation');
    $id = request()->user()->id;

    return [
      'username' => ['required', new UsernameRule()],
      'email' => ['required', "email", "unique:users,email,{$id}"],
      'password' => ['sometimes', "nullable", new PasswordRule(), 'confirmed'],
      'password_confirmation' => "sometimes|nullable",
      'roles' => "required|array",
      'roles.*' => "string",
      'avatar' => ['sometimes', 'nullable', new AvatarRule()],
      ...$meta_rules,
    ];
  }
}
