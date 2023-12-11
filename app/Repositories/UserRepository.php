<?php

namespace App\Repositories;
use App\Interfaces\UserInterface;
use App\Models\User;
use App\Models\Salary;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;
use Illuminate\Support\Facades\Validator;



class UserRepository implements UserInterface
{

    public function getlist(){
         $data = User::all();
         return $data;
    }

    public function save($data){
        $user=User::create([
                    'name' => $data->name,
                    'email' => $data->email,
                    'user_role'=>str_replace('_', ' ', $data->user_role),
                    'password' => Hash::make($data->password),
                    'contact_no' => $data->contact_no,
                    'salary' => $data->salary,
                ]);
        return $user;
    }

    public function edit($id){
        $task = User::findOrfail($id);
        if (empty($task)) {
            return back();
        }
        return $task;
    }

    // public function update($id ,$data)
    // {
    //     $validator = Validator::make($data, [
    //         'email' => 'required|email|unique:users,email,'.$id,
    //         'name' => 'required| string|max:255',
    //         'user_role' => 'required|string',

    //     ]);
    //     if ($validator->fails()) {
    //         return response()->json(['errors' => $validator->errors()], 400);
    //     }
    //     $user = User::findOrFail($id)->first();
    //     $items = $user->update($data);
    //     return true;
    // }

    public function update($id, $data)
{
    $validator = Validator::make($data, [
        'email' => 'required|email|unique:users,email,' . $id,
        'name' => 'required|string|max:255',
        'user_role' => 'required|string',
    ]);

    if ($validator->fails()) {
        return response()->json(['errors' => $validator->errors()], 400);
    }

    try {
        $user = User::findOrFail($id);
        $user->update($data);
        return true;
    } catch (\Exception $e) {
        return response()->json(['error' => $e->getMessage()], 500);
    }
}


    public function detail($id)
    {
        $salary = Salary::where('user_id' ,$id)->get();
        $data = User::where('id',$id)->first();
        return [$data ,$salary];

    }

    public function delete($id)
    {
        return User::findOrFail($id)->delete();
    }

}
