import StudentLayout from "@/Layouts/StudentLayout";
import { Head } from "@inertiajs/react";
import React from "react";

const Index = ({ auth }) => {
    return (
        <StudentLayout user={auth.user}>
            <Head title="Dashboard" />
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            You're logged in! Student
                        </div>
                    </div>
                </div>
            </div>
        </StudentLayout>
    );
};

export default Index;
