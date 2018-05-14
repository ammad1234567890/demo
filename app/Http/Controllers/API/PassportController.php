<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Support\Facades\Auth;
use Validator;
use Illuminate\Support\Facades\Hash;

Class PassportController extends Controller{
    public $success_status=200;

    public function login(){
       $email=request('email');
       $password= request('password');

       $credentials = [
        'email' => $email,
        'password' => $password
        ];


        if(Auth::attempt($credentials)){ 
            $user= Auth::user();

            $user_role=User::with('get_role')->where('id', $user->id)->get();
            $role_data=$user_role[0]['get_role'];
            return response()->json([
                'success'=>1,
                'message'=>'Login Successfully',
                'success_code'=>$this->success_status,
                'data'=>[
                    //'token'=>$user->createToken('App')->accessToken,
                    'id'=>$user->id,
                    'name'=>$user->name,
                    'email'=>$user->email,
                    'role'=>$role_data,
                ],
            ]);
        }
        else{
            return response()->json([
                'success'=>0,
                'message'=>'Invalid Login Credentials',
                'success_code'=>401, 
                'data'=>[],
                ]);
        }
        
        
    }

    public function register(Request $request){
        $name=$request->input('username');
        $email=$request->input('email');
        $password=$request->input('password');
        $country=$request->input('country');
        $city=$request->input('city');
        $role_id=$request->input('role');

        if($name!="" && $email!="" && $password!="" && $country!="" && $city!="" && $role_id!=""){
            if(User::where('email', '=', $email)->exists()){
                return response()->json([
                    'success'=>0,
                    'message'=>'User is already exist in our system, Please try different Email Address',
                    'success_code'=>409, //Use For Conflicts
                    'data'=>[],
                    ]);
            }
            else{
                $insert_arr=array(
                    'name'=>$name,
                    'role_id'=>$role_id,
                    'email'=>$email,
                    'password'=>bcrypt($password),
                    'country'=>$country,
                    'city'=>$city,
                );
                User::create($insert_arr);
                return response()->json([
                    'success'=>1,
                    'message'=>'Account has been created succesfully',
                    'success_code'=>$this->success_status, //Use for Not Acceptable Data
                    'data'=>[],
                    ]);
            }
            
        }
        else{
            return response()->json([
                'success'=>0,
                'message'=>'Please fill all the details of user',
                'success_code'=>406, //Use for Not Acceptable Data
                'data'=>[],
                ]);
        }

    }
}