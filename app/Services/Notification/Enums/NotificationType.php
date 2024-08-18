<?php

namespace App\Services\Notification\Enums;

enum NotificationType: string
{
  case warning = "warning";
  case error = "error";
  case default = 'default';
  case success = "success";
  case info = "info";
}
