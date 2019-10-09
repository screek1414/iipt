<?php

namespace App\Http\Controllers;

use App\Course;
use App\Helpers\Permission;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CourseController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('courses.index');
    }

    public function getCourses(Request $request)
    {
        $page_size = $request->get('page_size') ?: 12;
        $current_page = $request->get('current_page') ?: 1;
        return Course::orderBy('created_at', 'desc')
            ->paginate($page_size, '*', 'page', $current_page);
    }

    public function courses(Request $request)
    {
        return response()->json([
            'courses' => $this->getCourses($request)->toArray(),
            'is_admin' => Permission::isAdmin(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return response()->json([
            'is_admin' => Permission::isAdmin(),
            'permission' => auth()->user()->can(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string',
            'author' => 'required|string',
            'description' => 'required|string',
            'link' => 'required|string',
            'img' => 'required|string',
        ]);
        $course = new Course([
            'name' => $request->get('name'),
            'author' => $request->get('author'),
            'description' => $request->get('description'),
            'link' => $request->get('link'),
            'img' => $request->get('img'),
        ]);
        $course->save();

        return $this->courses($request);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function show(Request $request)
    {
    $id = $request->get('id');
        if ($id) {
            $course = Course::find($id);
            return response()->json([
                'course' => $course->toArray(),
                'is_admin' => auth()->user()->hasRole('Admin') ?? false,
            ]);
        }
    return response()->json(['message' => 'Course id is missing!'], 400);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Request $request)
    {
        $id = $request->get('id');
        if ($id) {
            $course = Course::find($id);
            return response()->json([
                'course' => $course->toArray(),
            ]);
        }
        return response()->json(['message' => 'Course id is missing!']);

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $id = $request->get('id');
        if ($id) {
            $request->validate([
                'name' => 'required|string',
                'author' => 'required|string',
                'description' => 'required|string',
                'link' => 'required|string',
                'img' => 'required|string',
            ]);
            $course = Course::find($id);
            $course->update([
                'name' => $request->get('name'),
                'author' => $request->get('author'),
                'description' => $request->get('description'),
                'link' => $request->get('link'),
                'img' => $request->get('img'),
            ]);
            return $this->courses($request);
        }
        return response()->json(['message' => 'Course id is missing!'], 400);
    }

    public function search(Request $request)
    {
        $page_size = $request->get('page_size') ?: 12;
        $current_page = $request->get('current_page') ?: 1;
        $search = $request->get('search');
            if ($search) {
                $courses = Course::orWhere('name', 'like', '%' . $search . '%')
                    ->orWhere('author', 'like', '%' . $search . '%')
                    ->orderBy('created_at', 'desc')
                    ->paginate($page_size, '*', 'page', $current_page);
                return response()->json([
                    'courses' => $courses->toArray()]);
            }
        return response()->json(['message' => 'Search missing!'], 400);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        $id = $request->get('id');
        if ($id) {
            $course = Course::find($id);
            $course->delete();

            return $this->courses($request);
        }
        return response()->json(['message' => 'Course id is missing!'], 400);
    }
}
