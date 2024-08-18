<?php

namespace App\Facade;

use Illuminate\Support\Facades\Facade;


/**
 * @method static array create(string $message, NotificationType $type = NotificationType::default) create new notification array.
 * @method static string getSessionName() Get notification session name.
 * @method static array|null getSessionNotification() Get available notifications from session.
 * @method static void pushNotification(array $notification) Push notification to session.
 */
class Notification extends Facade
{
  protected static function getFacadeAccessor(): string
  {
    return "Notification";
  }
}
