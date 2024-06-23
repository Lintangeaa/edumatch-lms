import RedirectButton from "@/Components/RedirectButton";
import React from "react";

const TableCourse = ({ courses }) => {
    return (
        <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
            <div className="p-6 bg-white border-b border-gray-200">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                                Name
                            </th>
                            <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                                Description
                            </th>
                            <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                                Level
                            </th>
                            <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                                Harga
                            </th>

                            <th className="px-6 py-3 text-xs font-medium tracking-wider text-center text-gray-500 uppercase">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {courses.map((course) => (
                            <tr key={course.id}>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    {course.name}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    {course.description}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    {course.level}
                                </td>

                                <td className="px-6 py-4 whitespace-nowrap">
                                    {course.price
                                        ? `Rp. ${course.price}`
                                        : "Not specified"}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <ActionTableCourse id={course.id} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

const ActionTableCourse = ({ id }) => {
    return (
        <div className="flex justify-center">
            <div className="flex space-x-2 jutify-center">
                <RedirectButton
                    href={route("courses.admin.index")}
                    className="bg-yellow-500 hover:bg-yellow-700"
                >
                    Detail
                </RedirectButton>
                <RedirectButton
                    href={route("courses.admin.detail", id)}
                    className="bg-yellow-500 hover:bg-yellow-700"
                >
                    Detail
                </RedirectButton>
            </div>
        </div>
    );
};

export default TableCourse;
