import Authenticated from "@/Layouts/AuthenticatedLayout";
import React from "react";
import FormLesson from "./Partials/FormLesson";
import { useForm } from "@inertiajs/react";

const CreateLesson = ({ auth, courseId }) => {
    const { data, setData, post, errors, processing, recentlySuccessful } =
        useForm({
            name: "",
            description: "",
            module: null,
            video: null,
            course_id: courseId,
        });

    const submit = (e) => {
        e.preventDefault();
        post(route("lessons.admin.store"));
    };
    return (
        <Authenticated user={auth.user}>
            <div className="py-12">
                <div className="py-6 mx-auto bg-white max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <FormLesson
                            setData={setData}
                            data={data}
                            errors={errors}
                            processing={processing}
                            submit={submit}
                        />
                    </div>
                </div>
            </div>
        </Authenticated>
    );
};

export default CreateLesson;
