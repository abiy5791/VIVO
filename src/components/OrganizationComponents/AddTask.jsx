import React, { useState } from "react";
import { Stepper } from "react-form-stepper";
import { json, useLocation } from "react-router-dom";
import axios from "../../api/axios";
import TaskTitle from "./TaskSections/TaskTitle";
import VideoInstruction from "./TaskSections/VideoInstruction";
import BackgroundInformation from "./TaskSections/BackgroundInformation";
import TaskBrief from "./TaskSections/TaskBrief";
import TaskResource from "./TaskSections/TaskResource";
import SubmitTask from "./TaskSections/SubmitTask";
import ExampleSolution from "./TaskSections/ExampleSolution";
import LoadingIndicator from "../../components/loading_indicator";

// Define the initial content for each editor
const initialContent = {
  videoInstruction: "<p>Initial content for Video Instruction</p>",
  backgroundInformation: "<p>Initial content for Background Information</p>",
  taskBrief: "<p>Initial content for Task Brief</p>",
  taskResource: "<p>Initial content for Task Resource</p>",
  submitTask: "<p>Initial content for Submit Task</p>",
  exampleSolution: "<p>Initial content for Example Solution</p>",
};

const AddTask = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [taskId, setTaskId] = useState(null);
  const [title, setTitle] = useState("");
  const [duration, setDuration] = useState("");
  const [content, setContent] = useState(initialContent);
  const [videoFiles, setVideoFiles] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [checkboxStates, setCheckboxStates] = useState({
    submitTask: {
      file: false,
      url: false,
      writing: false,
    },
  });

  const id = location.state?.id;
  const handleTitleChange = (newTitle) => {
    setTitle(newTitle);
  };

  const handleDurationChange = (newDuration) => {
    setDuration(newDuration);
  };

  const handleContentChange = (section, newContent) => {
    setContent((prevContent) => ({
      ...prevContent,
      [section]: newContent,
    }));
  };

  const handleVideoChange = (section, file) => {
    setVideoFiles((prevVideos) => ({
      ...prevVideos,
      [section]: file,
    }));
  };

  const handleCheckboxChange = (section, newCheckboxState) => {
    setCheckboxStates((prevStates) => ({
      ...prevStates,
      [section]: newCheckboxState,
    }));
  };

  const handleNext = async () => {
    if (activeStep === 0) {
      // Handle task creation in the first step
      try {
        setIsLoading(true);
        const response = await axios.post("/tasks/", {
          title,
          duration,
          post: id,
        });
        setTaskId(response.data.id); // Store the created task ID
        setIsLoading(false);
        setActiveStep(activeStep + 1);
      } catch (error) {
        setIsLoading(false);
        console.error("Error creating task:", error);
      }
    } else {
      setActiveStep(activeStep + 1);
    }
  };

  const handleCreateTask = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      // Initialize an array to store data for each section
      const requestData = [];

      // Iterate over each section and prepare data
      for (const section in content) {
        const data = {
          task: taskId, // Assuming task ID is 1, you can replace it with actual task ID
          title: section,
          content: content[section],
        };

        if (section === "submitTask") {
          // Add checkbox states to the data if section is "submitTask"
          data.is_file = checkboxStates[section].file;
          data.is_url = checkboxStates[section].url;
          data.is_text = checkboxStates[section].writing;
        }

        // Add video data only for the "videoInstruction" section
        if (section === "videoInstruction") {
          // Add video file if exists
          data.video = videoFiles[section];
        }

        // Add data to requestData array
        requestData.push(data);
      }

      // Send one request with all data
      const response = await axios.post("/api/create_task", requestData);
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error creating task:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const steps = [
    { label: "Task Title" },
    { label: "Video Instruction" },
    { label: "Background Information" },
    { label: "Task Brief" },
    { label: "Task Resource" },
    { label: "Submit Task" },
    { label: "Example Solution" },
  ];

  function getSectionComponent() {
    switch (activeStep) {
      case 0:
        return (
          <TaskTitle
            title={title}
            duration={duration}
            handleTitleChange={handleTitleChange}
            handleDurationChange={handleDurationChange}
          />
        );
      case 1:
        return (
          <VideoInstruction
            content={content.videoInstruction}
            handleContent={handleContentChange}
            handleVideoChange={handleVideoChange}
          />
        );
      case 2:
        return (
          <BackgroundInformation
            content={content.backgroundInformation}
            handleContent={handleContentChange}
          />
        );
      case 3:
        return (
          <TaskBrief
            content={content.taskBrief}
            handleContent={handleContentChange}
          />
        );
      case 4:
        return (
          <TaskResource
            content={content.taskResource}
            handleContent={handleContentChange}
          />
        );
      case 5:
        return (
          <SubmitTask
            content={content.submitTask}
            handleContent={handleContentChange}
            handleCheckboxChange={(newCheckboxState) =>
              handleCheckboxChange("submitTask", newCheckboxState)
            }
          />
        );
      case 6:
        return (
          <ExampleSolution
            content={content.exampleSolution}
            handleContent={handleContentChange}
          />
        );
      default:
        return null;
    }
  }

  return (
    <div className="flex items-center justify-center mt-8">
      <div className="bg-white p-6 rounded-lg shadow-md w-full lg:max-w-4xl">
        <Stepper
          steps={steps}
          activeStep={activeStep}
          connectorStateColors={true}
          connectorStyleConfig={{
            completedColor: "#5A5A5A",
            activeColor: "#5A5A5A",
            disabledColor: "#eee",
          }}
          styleConfig={{
            activeBgColor: "#808080",
            completedBgColor: "#5A5A5A",
            inactiveBgColor: "#eee",
            activeTextColor: "#fff",
            completedTextColor: "#fff",
            inactiveTextColor: "#5A5A5A",
          }}
        />
        <div style={{ padding: "20px" }}>
          {getSectionComponent()}
          <div className="max-w-3xl mx-auto px-4 mt-5">
            <div className="flex justify-between">
              {activeStep !== 0 && (
                <div className="w-1/2">
                  <button
                    onClick={() => setActiveStep(activeStep - 1)}
                    className="w-32 focus:outline-none py-2 px-5 rounded-lg shadow-sm text-center text-gray-600 bg-white hover:bg-gray-100 font-medium border"
                  >
                    Previous
                  </button>
                </div>
              )}
              {activeStep !== steps.length - 1 ? (
                <div className="w-1/2">
                  <button
                    onClick={handleNext}
                    className={`w-32 focus:outline-none border border-transparent py-2 px-5 rounded-lg shadow-sm text-center text-white hover:bg-gray-600 font-medium ${
                      !isLoading
                        ? " bg-gray-800"
                        : "cursor-not-allowed disabled bg-gray-600"
                    } `}
                  >
                    Next
                  </button>
                </div>
              ) : (
                <div className="w-1/2">
                  {isLoading ? (
                    <div className="flex justify-center w-32 focus:outline-none border border-transparent py-2 px-5 rounded-lg shadow-sm text-center text-white bg-gray-400 hover:bg-gray-600 font-medium">
                      <LoadingIndicator />
                    </div>
                  ) : (
                    <button
                      className="w-40 focus:outline-none border border-transparent py-2 px-5 rounded-lg shadow-sm text-center text-white bg-gray-800 hover:bg-gray-600 font-medium"
                      onClick={handleCreateTask}
                    >
                      Create Task
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTask;
