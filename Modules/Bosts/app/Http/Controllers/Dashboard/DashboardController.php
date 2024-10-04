<?php

namespace Modules\Bosts\Http\Controllers\Dashboard;

use Modules\Bosts\Http\Controllers\BaseController;
use App\Facade\Inertia;
use App\Services\Inertia\Enums\RenderLayout;
use Inertia\Response;

class DashboardController extends BaseController
{

    # Include parent controller __construct. 
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Display react page.
     *
     * @return Response
    */
    public function index(): Response
    {
        return Inertia::render(
            RenderLayout::dashboard,
            'home', # Target page
            [], # Page translated words
            [], # Page props
            module: "bosts" # if you your page outside modules directory you can remove it.
        );
    }
}
