<?php

namespace App\Http\Controllers\ProjectManager;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ProjectController extends Controller
{
    public function list(){
        return Inertia::render('Admin/Project/List');
    }
}
