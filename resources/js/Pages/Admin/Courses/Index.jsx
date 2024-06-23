import React from "react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import RedirectButton from "@/Components/RedirectButton";
import { Head } from "@inertiajs/react";
import TableCourse from "./Partials/TableCourse";

const CourseIndex = ({ auth, courses }) => {
    return (
        <Authenticated user={auth.user}>
            <Head title="Courses" />
            <div className="py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="flex justify-between mb-6">
                    <h2 className="text-2xl font-semibold leading-tight text-gray-900">
                        Courses
                    </h2>
                    <RedirectButton href={route("courses.admin.create")}>
                        Create Course
                    </RedirectButton>
                </div>

                <TableCourse courses={courses} />
            </div>
        </Authenticated>
    );
};

export default CourseIndex;
