import React, { useState } from "react";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // Max 2 MB

const FormLesson = ({
    data,
    setData,
    submit,
    errors,
    processing,
    isEdit = false,
}) => {
    const [error, setError] = useState("");

    const handleModulChange = (e) => {
        const file = e.target.files[0];
        if (file && file.size > MAX_FILE_SIZE) {
            setError("File size exceeds 5 MB. Please choose a smaller image.");
            setData("module", null);
        } else {
            setError("");
            setData("module", file);
        }
    };

    const handleVideoChange = (e) => {
        const file = e.target.files[0];
        if (file && file.size > MAX_FILE_SIZE) {
            setError("File size exceeds 5 MB. Please choose a smaller image.");
            setData("video", null);
        } else {
            setError("");
            setData("video", file);
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
                    <InputLabel htmlFor="module" value="Modul" />
                    <TextInput
                        id="module"
                        type="file"
                        className="block w-full mt-1"
                        onChange={handleModulChange}
                        required={!isEdit}
                        accept=".pdf, .png"
                    />
                    <InputError
                        className="mt-2"
                        message={error || errors.module}
                    />
                </div>
                <div>
                    <InputLabel htmlFor="vide0" value="Video" />
                    <TextInput
                        id="video"
                        type="file"
                        className="block w-full mt-1"
                        onChange={handleVideoChange}
                        required={false}
                        accept=".mp4,.3gp,.mkv"
                    />
                    <InputError
                        className="mt-2"
                        message={error || errors.video}
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

export default FormLesson;
