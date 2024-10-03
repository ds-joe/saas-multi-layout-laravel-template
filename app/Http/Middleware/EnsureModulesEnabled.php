<?php

namespace App\Http\Middleware;

use App\Facade\Module;
use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class EnsureModulesEnabled
{
  /**
   * Handle an incoming request.
   *
   * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
   */
  public function handle(Request $request, Closure $next, ...$modules): Response
  {
    if (!Module::allExists($modules)) {
      abort(Response::HTTP_FORBIDDEN, 'Some modules are disabled or not found.');
    }

    return $next($request);
  }
}
