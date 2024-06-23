import React, { useState } from "react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import RedirectButton from "@/Components/RedirectButton";
import { Head, useForm } from "@inertiajs/react";
import TableLesson from "./Partials/TableLesson";
import FormLesson from "./Partials/FormLesson";

const CourseDetail = ({ auth, course, lessons }) => {
    return (
        <Authenticated user={auth.user}>
            <Head title={course.name} />
            <div className="py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="flex justify-between mb-6">
                    <div>
                        <h2 className="text-2xl font-semibold leading-tight text-gray-900">
                            {course.name}
                        </h2>
                        <p className="text-gray-600">{course.description}</p>
                    </div>
                    <div>
                        <RedirectButton
                            href={route("lessons.admin.create", course.id)}
                        >
                            + Add Lesson
                        </RedirectButton>
                    </div>
                </div>
                <TableLesson lessons={lessons} />
            </div>
        </Authenticated>
    );
};

export default CourseDetail;
