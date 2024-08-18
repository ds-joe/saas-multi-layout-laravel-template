<?php

namespace App\Services\Inertia\Traits;

use App\Services\Inertia\Enums\RenderLayout;
use Inertia\Response;

trait Render
{

  /**
   * Render inertia page
   *
   * @param RenderLayout $layout
   * @param string $page
   * @param array $words
   * @param array $props
   * @param ?string $module
   * @return Response
   */
  public function render(RenderLayout $layout, string $page, array $words = [], array $props = [], ?string $module = null): Response
  {
    $modulePath = $module ? "Modules/" . ucfirst($module) . "/" : "";
    $path = "{$layout->value}/{$modulePath}{$this->resolvePageName($page)}";
    return inertia()->render($path, ['page_words' => $words, ...$props]);
  }

  /** Resolve page name
   * @param string $page
   * @return string
   */
  private function resolvePageName(string $page): string
  {
    $result = explode('/', $page);
    if (is_array($result)) : $result = array_map(fn($item) => ucfirst($item), $result);
    endif;
    return is_array($result) ? implode('/', $result) : ucfirst($page);
  }
}
