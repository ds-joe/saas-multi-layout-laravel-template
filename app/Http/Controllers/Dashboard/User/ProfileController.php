<?php

namespace App\Http\Controllers\Dashboard\User;

use App\Facade\Inertia;
use App\Services\Inertia\Enums\RenderLayout;
use Inertia\Response;

class ProfileController extends UserController
{

  public function __construct()
  {
    parent::__construct();
    $this->setLayoutWords(array_merge([]));
  }

  /**
   * Display profile page.
   *
   * @return Response
   */
  public function index(): Response
  {
    return Inertia::render(
      RenderLayout::dashboard,
      'user/profile',
      $this->getLayoutWords()
    );
  }
}
