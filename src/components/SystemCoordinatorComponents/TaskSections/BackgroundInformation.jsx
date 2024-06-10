import CreateTask from "./CreateTask";

const BackgroundInformation = ({ content, handleContent }) => {
  return (
    <>
      <h1 className="mb-4 text-xl font-bold first-letter:uppercase text-center">
        Background Information
      </h1>
      <CreateTask
        content={content}
        handleContent={handleContent}
        section={"background_info"}
      />
    </>
  );
};

export default BackgroundInformation;
