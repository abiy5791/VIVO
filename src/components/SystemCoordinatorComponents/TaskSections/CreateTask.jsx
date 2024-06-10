import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "./CKEditorStyle.css";

const editorConfiguration = {
  toolbar: [
    "heading",
    "|",
    "bold",
    "italic",
    "link",
    "bulletedList",
    "numberedList",
    "|",
    "insertTable",
    "blockQuote",
    "|",
    "undo",
    "redo",
    "|",
  ],
};

const CreateTask = ({ content, handleContent, section }) => {
  return (
    <div>
      <CKEditor
        editor={ClassicEditor}
        config={editorConfiguration}
        data={content}
        onChange={(event, editor) => {
          const data = editor.getData();
          handleContent(section, data);
        }}
      />
    </div>
  );
};

export default CreateTask;
