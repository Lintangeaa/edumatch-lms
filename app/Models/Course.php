<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'image',
        'level',
        'description',
        'price',
    ];

    public function lessons()
    {
        return $this->hasMany(Lesson::class);
    }

    public function assignments()
    {
        return $this->hasMany(Assignment::class);
    }

    public function quizzes()
    {
        return $this->hasMany(Quiz::class);
    }
    public function ratings()
    {
        return $this->hasMany(CourseRating::class);
    }

    // Method untuk mendapatkan rata-rata rating
    public function averageRating()
    {
        return $this->ratings()->avg('rating');
    }
}
