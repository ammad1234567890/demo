<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class User_roles extends Model
{
    protected $fillable=['id', 'name'];

    protected $table="user_roles";

    public function User()
    {
      return $this->hasMany('App\User', 'role_id');
    }
}