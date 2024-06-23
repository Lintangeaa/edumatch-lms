<?php

namespace App\Http\Controllers;

use App\Models\Lesson;
use Illuminate\Http\Request;
use Inertia\Inertia;

class LessonController extends Controller
{
    public function create($courseId)
    {
        return Inertia::render('Admin/Courses/Lessons/Create', ['courseId' => $courseId]);
    }
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'required|string',
            'module' => 'required|mimes:jpeg,png,jpg,gif,pdf|max:20480',
            'video' => 'nullable|mimes:mp4,avi,mkv|max:20480',
            'course_id' => 'required|exists:courses,id',
        ]);

        $id = $request->course_id;

        $pathVideo = null;
        if ($request->hasFile('video')) {
            $pathVideo = $request->file('video')->store('videos', 'public');
        }



        Lesson::create([
            'name' => $request->input('name'),
            'description' => $request->input('description'),
            'module' => $request->file('module')->store('modules', 'public'),
            'video' => $pathVideo,
            'course_id' => $request->input('course_id'),
        ]);

        return redirect()->route('courses.admin.detail', $id)->with('success', 'Lesson added successfully.');
    }
}
