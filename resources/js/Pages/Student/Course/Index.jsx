import StudentLayout from "@/Layouts/StudentLayout";
import React from "react";
import FilterCourse from "./Partials/FilterCourse";
import GridCourse from "./Partials/GridCourse";

const Index = ({ auth, courses }) => {
    return (
        <StudentLayout user={auth.user}>
            <div className="px-8 py-12 lg:px-24 lg:py-20">
                <FilterCourse />
                {courses.length > 0 ? (
                    <GridCourse courses={courses} />
                ) : (
                    <div>Tidak Ada Course</div>
                )}
            </div>
        </StudentLayout>
    );
};

export default Index;
