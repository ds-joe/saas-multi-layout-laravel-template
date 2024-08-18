<?php

namespace App\Services\Notification;

use App\Services\Notification\Enums\NotificationType;
use Illuminate\Support\Facades\Session;

class Notification
{

  protected string $session_name = "notification";

  /**
   *  Create a notification array before send response to front end :)
   *
   * @param string $message
   * @param NotificationType $type
   * @return array
   */
  public function create(string $message, NotificationType $type = NotificationType::default): array
  {
    return [
      $this->session_name => [
        'message' => $message,
        'type' => $type->value
      ]
    ];
  }

  /**
   * Push notification to session
   *
   * @param array $notification
   * @return void
   */
  public function pushNotification(array $notification): void
  {
    Session::push($this->session_name, $notification);
  }

  /**
   *  Get notification session name.
   *
   * @return string
   */
  public function getSessionName(): string
  {
    return $this->session_name;
  }

  /**
   * Get session notification.
   *
   * @return array|null
   */
  public function getSessionNotification(): array|null
  {
    return Session::get($this->session_name, null);
  }
}
