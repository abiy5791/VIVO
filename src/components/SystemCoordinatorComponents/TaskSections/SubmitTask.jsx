import React from "react";
import CreateTask from "./CreateTask";

const SubmitTask = ({
  content,
  checkboxStates,
  handleContent,
  handleCheckboxChange,
}) => {
  const handleCheckbox = (e) => {
    const { name, checked } = e.target;
    console.log(`Checkbox changed: ${name} - ${checked}`); // Debugging
    handleCheckboxChange({
      ...checkboxStates,
      [name]: checked,
    });
  };

  return (
    <>
      <h1 className="mb-4 text-xl font-bold first-letter:uppercase text-center">
        Submit Task
      </h1>
      <CreateTask
        content={content}
        handleContent={handleContent}
        section={"submit_task"}
      />
      <div className="flex flex-col justify-content w-full mt-6">
        <label className="">How Should the file be submitted?</label>
        <label
          htmlFor="file"
          className="flex cursor-pointer items-start gap-4 mb-4 mt-4 rounded-lg border border-gray-200 p-4 transition hover:bg-gray-50"
        >
          <div className="flex items-center">
            &#8203;
            <input
              type="checkbox"
              className="size-4 rounded border-gray-300"
              id="file"
              name="file"
              checked={checkboxStates.file || false}
              onChange={handleCheckbox}
            />
          </div>
          <div>
            <strong className="font-medium text-gray-900">File</strong>
            <p className="mt-1 text-sm text-gray-700">
              Do you want applicants to submit this task as a file? e.g., txt,
              pdf, patch, doc
            </p>
          </div>
        </label>
        <label
          htmlFor="url"
          className="flex cursor-pointer items-start mb-4 gap-4 rounded-lg border border-gray-200 p-4 transition hover:bg-gray-50"
        >
          <div className="flex items-center">
            &#8203;
            <input
              type="checkbox"
              className="size-4 rounded border-gray-300"
              id="url"
              name="url"
              checked={checkboxStates.url || false}
              onChange={handleCheckbox}
            />
          </div>
          <div>
            <strong className="font-medium text-gray-900">URL</strong>
            <p className="mt-1 text-sm text-gray-700">
              Do you want applicants to submit this task as a URL for the
              solution? e.g., GitHub link, Google Drive link
            </p>
          </div>
        </label>
        <label
          htmlFor="writing"
          className="flex cursor-pointer items-start gap-4 rounded-lg border border-gray-200 p-4 transition hover:bg-gray-50"
        >
          <div className="flex items-center">
            &#8203;
            <input
              type="checkbox"
              className="size-4 rounded border-gray-300"
              id="writing"
              name="writing"
              checked={checkboxStates.writing || false}
              onChange={handleCheckbox}
            />
          </div>
          <div>
            <strong className="font-medium text-gray-900">Writing</strong>
            <p className="mt-1 text-sm text-gray-700">
              Do you want applicants to submit this task by writing their
              answer?
            </p>
          </div>
        </label>
      </div>
    </>
  );
};

export default SubmitTask;
