// TableLesson.jsx

import React from "react";
import RedirectButton from "@/Components/RedirectButton";
import { FiDownloadCloud, FiPlayCircle } from "react-icons/fi";

const TableLesson = ({ lessons }) => {
    return (
        <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
            <div className="p-6 bg-white border-b border-gray-200">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-3 py-3 text-xs font-medium tracking-wider text-center text-gray-500 uppercase">
                                No
                            </th>
                            <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                                Name
                            </th>
                            <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                                Description
                            </th>
                            <th className="px-6 py-3 text-xs font-medium tracking-wider text-center text-gray-500 uppercase">
                                Module
                            </th>
                            <th className="px-6 py-3 text-xs font-medium tracking-wider text-center text-gray-500 uppercase">
                                Video
                            </th>
                            <th className="px-6 py-3 text-xs font-medium tracking-wider text-center text-gray-500 uppercase">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {lessons.map((lesson, i) => (
                            <tr key={lesson.id}>
                                <td className="px-3 py-4 whitespace-nowrap">
                                    {i + 1}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    {lesson.name}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    {lesson.description}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    {lesson.module ? (
                                        <div className="flex justify-center">
                                            <a
                                                href={lesson.module}
                                                className="text-center text-blue-500 hover:underline"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <FiDownloadCloud className="text-xl hover:text-blue-800" />
                                            </a>
                                        </div>
                                    ) : (
                                        "-"
                                    )}
                                </td>
                                <td className="px-6 py-4 text-center whitespace-nowrap">
                                    {lesson.video ? (
                                        <div className="flex items-center justify-center">
                                            <a
                                                href={lesson.video}
                                                className="text-blue-500 hover:underline"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <FiPlayCircle className="text-xl hover:text-blue-800" />
                                            </a>
                                        </div>
                                    ) : (
                                        "-"
                                    )}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex justify-center">
                                        <RedirectButton className="mr-2 bg-yellow-500 hover:bg-yellow-700">
                                            Edit
                                        </RedirectButton>
                                        <RedirectButton className="bg-red-500 hover:bg-red-700">
                                            Delete
                                        </RedirectButton>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TableLesson;
