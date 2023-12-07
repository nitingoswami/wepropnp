<?php


namespace App\Repositories;
use App\Interfaces\ProjectInterface;
use App\Models\Project;
use App\Models\Developer;
use App\Models\User;
use App\Models\Task;

class ProjectRepository implements ProjectInterface
{
    public function getlist()
    {
        $developer = User::whereIn('user_role',['senior developer','junior developer'])->get();
        $manager = User::where('user_role','project manager')->get();
        $data = Project::all();
        return [$data , $developer ,$manager];
    }

    public function save($req)
    {
       try {
        $data = Project::create([
            'title' => $req['title'],
            'description' => $req['description'],
            'start_date' => $req['start_date'],
            'project_manager' => $req['project_manager'],
        ]);

        $project_id = $data->id;
        $project = Project::find($project_id);
                $project = $project->developer()->create([  'project_id' => $project_id,
                'developer_id' => implode(',', $req['developer']),
                ]);
        return [
            'success' => true,
            'message' => "Project Created Successfully ."
        ];
       } catch (\Throwable $th) {
        return [
            'success' => false ,
            'message' => $th->getMessage(),
        ];
       }
    }

    public function edit($id)
    {
        try {
            $data = Project::findOrFail($id);
        $dev_id = Developer::where('project_id', $data->id)->pluck('developer_id');
        $dev = $dev_id->toArray();

        $developer = array_map('intval', explode(',', $dev[0]));
        $developer = array_unique($developer);

        $manager = User::whereIn('user_role', ['project manager'])->pluck('name');
        $devUsers = User::select('id', 'name', 'user_role')->whereIn('user_role', ['junior developer', 'senior developer'])->get();
        return [ 'success' => true ,
            $data,  $devUsers,  $manager, $developer];
        } catch (\Throwable $th) {
            return [
                'success' => false,
                'message' => $th->getMessage(),
            ];
        }
    }

    public function update($id,$item)
    {
       try {
        $data = Project::findOrFail($id);
        $data->title = $item['title'];
        $data->description = $item['description'];
        $data->start_date = $item['start_date'];
        // $data->end_date = $item['end_date'];
        $data->project_manager = $item['project_manager'];
        $data->save();
        $developer = implode(',', $item['developer']);
        $projId = $data->id;
        $dev =  Developer::where('project_id', $projId)->first();
        $id = $dev->update(['developer_id' => $developer]);
        return [
            'success' => true,
            'message' => " Project Update Successfully",
        ];
       } catch (\Throwable $th) {
        return [
            'success' => false,
            'message' => $th->getMessage(),
            ];
    }
    }

    public function detail($id)
    {
        try {
            $data = Project::findOrFail($id);
            $dev_id = Developer::where(['assignable_id'=>$data->id , 'assignable_type'=> 'App\Models\Project'])->pluck('developer_id');
            $developer = explode(',',$dev_id);
            $developer = str_replace(array('[', ']', '"'),'',$developer);
            $dev = array_map('intval', $developer);
            $user = User::whereIn('id', $dev)->get();
            $task = Task::where(['project_id'=>$id])->get();

           return [
            'success'=>true ,
            $data , $user , $task
           ];
        } catch (\Throwable $th) {
            return [
                'success'=>false,
                'message' => $th->getMessage(),
            ];
        }
    }
}
