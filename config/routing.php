<?php

return [
  /*
  |--------------------------------------------------------------------------
  | Application Routes Prefixes
  |--------------------------------------------------------------------------
  |
  | These configuration, using to add the default prefix to dashboard or website
  |
  | For example for website if you set prefix to "website/" the url will be "website/<ROUTE_URI>"
  |
  | NOTE: Example use, this option using when you need the dashboard uri only set it to "/" or null
  |
  */
  'prefix' => [
    'dashboard' => env('APP_DASHBOARD_URI_PREFIX', "dashboard"),
    'website' => env('APP_WEBSITE_URI_PREFIX', "")
  ],

];
