<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use DB;

class FrontController extends Controller
{
    public function login_view(){
        return View('login');
    }
}

?>