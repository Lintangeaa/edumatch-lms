import React, { useState } from "react";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";

const MAX_FILE_SIZE = 2 * 1024 * 1024; // Max 2 MB

const FormCourse = ({
    data,
    setData,
    submit,
    errors,
    processing,
    isEdit = false,
}) => {
    const [error, setError] = useState("");

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setData(name, value);
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file && file.size > MAX_FILE_SIZE) {
            setError("File size exceeds 2 MB. Please choose a smaller image.");
            setData("image", null);
        } else {
            setError("");
            setData("image", file);
        }
    };

    return (
        <form onSubmit={submit} className="mt-6 space-y-6 p-7">
            <div className="flex flex-col space-y-5">
                <div>
                    <InputLabel htmlFor="name" value="Name" />

                    <TextInput
                        id="name"
                        className="block w-full mt-1"
                        value={data.name}
                        onChange={(e) => setData("name", e.target.value)}
                        required={!isEdit}
                        autoComplete="name"
                    />

                    <InputError className="mt-2" message={errors.name} />
                </div>
                <div>
                    <InputLabel htmlFor="description" value="Description" />

                    <textarea
                        id="description"
                        className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        value={data.description}
                        onChange={(e) => setData("description", e.target.value)}
                        required={!isEdit}
                        rows="4"
                    ></textarea>

                    <InputError className="mt-2" message={errors.description} />
                </div>
                <div>
                    <InputLabel htmlFor="level" value="Level" />
                    <select
                        id="level"
                        name="level"
                        value={data.level}
                        onChange={handleInputChange}
                        className="w-40 px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500"
                        required
                    >
                        <option value="">Select Level</option>
                        <option value="beginner">Beginner</option>
                        <option value="intermediate">Intermediate</option>
                        <option value="advanced">Advanced</option>
                    </select>
                    <InputError className="mt-2" message={errors.level} />
                </div>
                <div>
                    <InputLabel htmlFor="price" value="Price" />
                    <TextInput
                        id="price"
                        type="number"
                        className="block w-full mt-1"
                        value={data.price}
                        onChange={(e) => setData("price", e.target.value)}
                        required={!isEdit}
                        autoComplete="price"
                    />
                    <InputError className="mt-2" message={errors.price} />
                </div>
                <div>
                    <InputLabel htmlFor="image" value="Image" />
                    <TextInput
                        id="image"
                        type="file"
                        className="block w-full mt-1"
                        onChange={handleFileChange}
                        required={!isEdit}
                        accept=".png,.jpg,.jpeg"
                    />
                    <InputError
                        className="mt-2"
                        message={error || errors.image}
                    />
                </div>
            </div>
            <div className="flex items-center gap-4">
                <PrimaryButton disabled={processing || error.length > 0}>
                    {isEdit ? "SAVE" : "CREATE"}
                </PrimaryButton>
            </div>
        </form>
    );
};

export default FormCourse;
