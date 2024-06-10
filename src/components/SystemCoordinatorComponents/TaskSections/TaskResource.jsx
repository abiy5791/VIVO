import CreateTask from "./CreateTask";

const TaskResource = ({ content, handleContent }) => {
  return (
    <>
      <h1 className="mb-4 text-xl font-bold first-letter:uppercase text-center">
        TaskResource
      </h1>
      <CreateTask
        content={content}
        handleContent={handleContent}
        section={"task_resource"}
      />
    </>
  );
};

export default TaskResource;
