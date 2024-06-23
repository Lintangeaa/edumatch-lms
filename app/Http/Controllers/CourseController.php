<?php

namespace App\Http\Controllers;

use App\Models\Course;
use App\Models\Lesson;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CourseController extends Controller
{
    public function studentIndex()
    {
        $courses = Course::all()->map(function ($course) {
            $course->image = $course->image ? asset('storage/' . $course->image) : null;
            $course->rate_total = $course->ratings->count();
            $course->average_rating = $course->averageRating();

            // Hitung jumlah lesson
            $course->lesson_total = Lesson::where('course_id', $course->id)->count();

            return $course;
        });

        return Inertia::render('Student/Course/Index', ['courses' => $courses]);
    }
    public function index()
    {
        $courses = Course::all()->map(function ($course) {
            $course->image = $course->image ? asset('storage/' . $course->image) : null;
            return $course;
        });

        return Inertia::render('Admin/Courses/Index', ['courses' => $courses]);
    }

    public function create()
    {

        return Inertia::render('Admin/Courses/Create', ['session' => session()->all(),]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'required|string',
            'level' => 'required|string|in:beginner,intermediate,advanced',
            'image' => 'nullable|mimes:jpeg,png,jpg,gif|max:2048',
            'price' => 'required|numeric|min:0'
        ]);

        $path = null;
        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('images', 'public');
        }

        Course::create([
            'name' => $request->input('name'),
            'description' => $request->input('description'),
            'level' => $request->input('level'),
            'image' => $path,
            'price' => $request->input('price'),
        ]);

        return redirect()->route('courses.admin.index')->with('success', 'Course created successfully.');
    }

    public function show($id)
    {
        $course = Course::findOrFail($id);
        $lessons = Lesson::where('course_id', $id)->get();
        $formattedLessons = $lessons->map(function ($lesson) {
            $lesson->module = $lesson->module ? asset('storage/' . $lesson->module) : null;
            $lesson->video = $lesson->video ? asset('storage/' . $lesson->video) : null;
            return $lesson;
        });

        return Inertia::render('Admin/Courses/Detail', compact('course', 'lessons'));
    }
}
