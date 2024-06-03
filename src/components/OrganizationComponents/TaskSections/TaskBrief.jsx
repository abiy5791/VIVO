import CreateTask from "./CreateTask";

const TaskBrief = ({ content, handleContent }) => {
  return (
    <>
      <h1 className="mb-4 text-xl font-bold first-letter:uppercase text-center">Task Brief</h1>
      <CreateTask
        content={content}
        handleContent={handleContent}
        section={"taskBrief"}
      />
    </>
  );
};

export default TaskBrief;
