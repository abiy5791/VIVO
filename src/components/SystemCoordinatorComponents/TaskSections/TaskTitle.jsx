import { useState } from "react";

const TaskTitle = ({
  title,
  duration,
  handleTitleChange,
  handleDurationChange,
}) => {
  return (
    <>
      <h1 className="mb-4 text-xl font-bold first-letter:uppercase text-center">
        Task Title
      </h1>
      <div className="mt-4">
        <label
          htmlFor="title"
          className="block text-sm font-medium text-gray-700"
        >
          Title
        </label>
        <input
          placeholder="title of task"
          id="title"
          type="text"
          value={title}
          onChange={(e) => handleTitleChange(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div className="mt-4">
        <label
          htmlFor="duration"
          className="block text-sm font-medium text-gray-700"
        >
          Duration
        </label>
        <input
          placeholder="50 min"
          id="duration"
          type="text"
          value={duration}
          onChange={(e) => handleDurationChange(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
    </>
  );
};

export default TaskTitle;
