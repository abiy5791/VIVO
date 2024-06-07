import CreateTask from "./CreateTask";

const VideoInstruction = ({ content, handleContent, handleVideoChange }) => {

  const handleVideoUpload = (e) => {
    const video = e.target.value;
    handleVideoChange(video);
  };

  return (
    <>
      <h1 className="mb-4 text-xl font-bold first-letter:uppercase text-center">
        Video Instruction
      </h1>
      <CreateTask
        content={content}
        handleContent={handleContent}
        section="video_instruction"
      />
      <div className="mt-4">
        <label
          htmlFor="video"
          className="block text-sm font-medium text-gray-700"
        >
          Attach a Video URL
        </label>
        <input
          id="video"
          type="text"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          onChange={handleVideoUpload}
        />
      </div>
    </>
  );
};

export default VideoInstruction;
