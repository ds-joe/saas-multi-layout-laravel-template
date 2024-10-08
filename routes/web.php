<?php

use Illuminate\Support\Facades\Route;


require_once __DIR__ . "/web/index.php";


Route::prefix('internal')->group(function(){
	require_once __DIR__ . "/internalApis/index.php";
});