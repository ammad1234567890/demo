<?php

use Illuminate\Database\Seeder;

class RolesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data_arr=array(
            ['id'=>1,'name'=>'Student'],['id'=>2,'name'=>'Teacher'],['id'=>3,'name'=>'Institute']
        );
        DB::table('user_roles')->insert($data_arr);
    }
}
