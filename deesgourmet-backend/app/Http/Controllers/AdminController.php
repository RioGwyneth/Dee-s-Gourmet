<?php

namespace App\Http\Controllers;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    public $successStatus = 200;
    public function login()

    {
        if (Auth::attempt(['username' => request('username'), 'password' => request('password')])) {
            $users = Auth::user();
            $success['user_id'] = $users->id;
            return response()->json(["message" => 'successful ka', "data" => $success], $this->successStatus);
        }else {
            return response()->json(['ERROR' => 'Unauthorised'], 401);
        }
    }
}
