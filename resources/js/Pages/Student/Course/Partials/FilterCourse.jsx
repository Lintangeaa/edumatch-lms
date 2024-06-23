import React, { useState } from "react";
import { GiSettingsKnobs } from "react-icons/gi";

const FilterCourse = () => {
    const [categories, setCategories] = useState([
        "All Categories",
        "Category 1",
        "Category 2",
        "Category 3",
    ]);

    const [levels, setLevels] = useState([
        "All Levels",
        "Level 1",
        "Level 2",
        "Level 3",
    ]);
    return (
        <div className="flex justify-between px-6 py-4 bg-white rounded-lg shadow-sm">
            <div className="flex items-center justify-center space-x-2 font-semibold">
                <GiSettingsKnobs className="text-xl font-bold text-blue-700" />
                <span>Filters</span>
            </div>
            <div className="flex justify-between space-x-6">
                <select
                    name="category"
                    id="category"
                    className="flex p-2 rounded cursor-pointer lg:w-48 bg-slate-200"
                >
                    {categories.map((category, index) => (
                        <option key={index} value={category}>
                            {category}
                        </option>
                    ))}
                </select>
                <select
                    name="level"
                    id="level"
                    className="flex p-2 rounded cursor-pointer lg:w-48 bg-slate-200"
                >
                    {levels.map((level, index) => (
                        <option key={index} value={level}>
                            {level}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default FilterCourse;
