import React from "react";
import CardCourse from "./CardCourse";

const GridCourse = ({ courses }) => {
    return (
        <div className="mt-10">
            <div className="flex justify-between">
                <span>Total</span>
                <div>Sort By: </div>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                {courses.map((course, i) => (
                    <CardCourse key={i} course={course} href={"#"} />
                ))}
            </div>
        </div>
    );
};

export default GridCourse;
