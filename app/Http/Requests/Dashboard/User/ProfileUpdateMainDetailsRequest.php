<?php

namespace App\Http\Requests\Dashboard\User;

use App\Rules\User\NameRule;
use App\Rules\User\PasswordRule;
use App\Rules\User\PhoneRule;
use App\Rules\User\UsernameRule;
use Illuminate\Foundation\Http\FormRequest;

class ProfileUpdateMainDetailsRequest extends FormRequest
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
    $id = request()->user()->id;
    return [
      'username' => ['required', new UsernameRule()],
      'email' => ['required', "email", "unique:users,email,{$id}"],
      'password' => ['sometimes', "nullable", new PasswordRule(), 'confirmed'],
      'password_confirmation' => "sometimes|nullable",
      '_first_name' => ['required', new NameRule()],
      '_last_name' => ['sometimes', "nullable", new NameRule()],
      '_phone' => ['sometimes', "nullable", new PhoneRule]
    ];
  }
}
