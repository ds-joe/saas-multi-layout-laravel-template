<?php

namespace App\Http\Controllers\Website\Auth;

use App\Facade\Inertia;
use App\Facade\Notification;
use App\Http\Requests\Website\Auth\LoginRequest;
use App\Services\Inertia\Enums\RenderLayout;
use App\Services\Notification\Enums\NotificationType;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Inertia\Response;


class LoginController extends AuthController
{

  public function __construct()
  {
    parent::__construct();
  }

  /**
   * Display login page.
   *
   * @return Response
   */
  public function index(): Response
  {
    return Inertia::render(
      RenderLayout::website,
      'auth/login',
      $this->getLayoutWords(),
    );
  }

  /**
   * Normal Login
   *
   * @param LoginRequest $request
   * @return RedirectResponse
   */
  public function login(LoginRequest $request): RedirectResponse
  {
    if (Auth::attempt(['email' => $request->email, 'password' => $request->password], $request->remember_me)) {
      return redirect()->route('dashboard.home')->with(Notification::create(__('website/auth.login_successfully'), NotificationType::success));
    }
    return back()->with(Notification::create(__('website/auth.login_credentials_invalid'), NotificationType::warning));
  }

  /**
   * Logout
   *
   * @return RedirectResponse
   */
  public function logout(): RedirectResponse
  {
    Auth::logout();
    return redirect()->route('login')->with(Notification::create(__('website/auth.logout_successfully'), NotificationType::success));
  }
}
