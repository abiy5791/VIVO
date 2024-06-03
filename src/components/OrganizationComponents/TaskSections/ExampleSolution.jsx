import CreateTask from "./CreateTask";

const ExampleSolution = ({ content, handleContent }) => {
  return (
    <>
      <h1 className="mb-4 text-xl font-bold first-letter:uppercase text-center">Example Solution</h1>
      <CreateTask
        content={content}
        handleContent={handleContent}
        section={"exampleSolution"}
      />
    </>
  );
};

export default ExampleSolution;
