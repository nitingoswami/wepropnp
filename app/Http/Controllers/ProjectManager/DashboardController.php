<?php

namespace App\Http\Controllers\ProjectManager;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class DashboardController extends Controller
{
    //
    public function index(){
        // dd(123);
        return Inertia::Render('ProjectManager/Dashboard/View');
    }
}
