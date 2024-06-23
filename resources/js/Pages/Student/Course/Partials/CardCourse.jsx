import React from "react";
import { FiBook, FiClock } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { VscGraph } from "react-icons/vsc";
import { Link } from "@inertiajs/react";

const CardCourse = ({ course, href }) => {
    return (
        <Link href={href}>
            <div className="flex flex-col mt-5 bg-white rounded-lg shadow cursor-pointer w-84 h-96">
                <div className="relative h-1/2">
                    {course.image ? (
                        <img
                            src={course.image}
                            alt={course.name}
                            className="object-cover w-full h-full"
                        />
                    ) : (
                        <div className="flex items-center justify-center w-full h-full text-gray-400">
                            No Image
                        </div>
                    )}
                    <div className="absolute flex items-center p-1 px-2 space-x-2 text-sm font-medium text-white bg-red-600 rounded top-4 left-4">
                        <VscGraph /> <span>{course.level}</span>
                    </div>
                </div>
                <div className="p-4 h-1/2">
                    <h1 className="text-lg font-bold text-blue-900 line-clamp-2">
                        {course.name}
                    </h1>
                    <div className="flex justify-between mt-8">
                        <div className="flex items-center space-x-1 text-gray-500">
                            <FiBook /> <span>{course.lesson_total}</span>
                            <span>Lessons</span>
                        </div>
                    </div>
                    <div className="w-full h-0.5 bg-gray-200 mt-5"></div>
                    <div className="flex justify-between mt-5">
                        <div className="flex items-center">
                            {[...Array(5)].map((_, index) => (
                                <FaStar
                                    key={index}
                                    className={
                                        index < course.average_rating
                                            ? "text-yellow-500"
                                            : "text-gray-300"
                                    }
                                />
                            ))}
                            <span className="ml-1 text-gray-600">
                                ({course.rate_total})
                            </span>
                        </div>
                        <div>
                            <span>Rp. {course.price}</span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default CardCourse;
