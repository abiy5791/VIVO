import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function CreateTask() {
  const defaultContent = `
    <p><strong>Task Title:</strong> Describe the title of your task here.</p>
    <p><br><br><strong>Details:</strong> Provide detailed information about the task.</p>
    <p><br><br><br><br><br><br><strong>Deadline:</strong> Specify the deadline for this task.</p>
  `;

  const [value, setValue] = useState(defaultContent);
  return (
    <div className="relative">
      <ReactQuill
        value={value}
        onChange={setValue}
        modules={{
          toolbar: [
            [{ header: [1, 2, false] }],
            ["bold", "italic", "underline"],
            ["link", "image"],
            [{ list: "ordered" }, { list: "bullet" }],
          ],
        }}
        formats={[
          "header",
          "bold",
          "italic",
          "underline",
          "link",
          "image",
          "list",
          "bullet",
        ]}
        className="min-h-[200px] max-w-2xl m-auto mt-5" // Adjust min height as needed
      />
    </div>
  );
}
