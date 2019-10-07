<?php

namespace App\Http\Controllers;

use App\Helpers\Permission;
use App\User;
use Illuminate\Http\Request;
use App\Role;

class DashboardController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $qwe = 'Hello';
        return view('dashboard.index');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function users()
    {
        return response()->json([
            'users' => User::with('roles')->get()->toArray(),
            'is_admin' => Permission::isAdmin(),
            'roles' => Role::all()->toArray(),
        ]);
    }

    public function changerole(Request $request)
    {
        $id = $request->get('id');
        $role = $request->get('role');
        if ($id) {
            $user = User::with('roles')->find($id);
            $user->assignRole("{$role}");
            return true;
        }
        return response()->json(['message' => 'User id is missing!']);
    }
}
