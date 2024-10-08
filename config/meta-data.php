<?php

use App\Rules\User\NameRule;

return [

  // User Meta data config
  'user_meta' => [
    'allowed_keys' => ['_first_name', '_last_name', '_avatar'],
    'validation' => [
      '_first_name' => ['required', new NameRule()],
      '_last_name' => ['sometimes', "nullable", new NameRule()],
    ]
  ],

];
