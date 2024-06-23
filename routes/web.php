<?php

use App\Http\Controllers\CourseController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\LessonController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');


    Route::get('/courses', [CourseController::class, 'index'])->name('courses.admin.index');
    Route::get('/courses/create', [CourseController::class, 'create'])->name('courses.admin.create');
    Route::post('/courses/create', [CourseController::class, 'store'])->name('courses.admin.store');
    Route::get('/courses/detail/{id}', [CourseController::class, 'show'])->name('courses.admin.detail');

    Route::get('/lesson/{courseId}', [LessonController::class, 'create'])->name('lessons.admin.create');
    Route::post('/lesson', [LessonController::class, 'store'])->name('lessons.admin.store');



    Route::prefix('/student')->group(function () {
        Route::get('/dashboard', [DashboardController::class, 'student'])->name('dashboard.student');

        Route::get('/course', [CourseController::class, 'studentIndex'])->name('course.student');
    });

});

require __DIR__ . '/auth.php';
