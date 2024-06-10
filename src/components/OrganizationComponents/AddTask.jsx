import React, { useState, useEffect } from "react";
import { Stepper } from "react-form-stepper";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "../../api/axios";
import TaskTitle from "./TaskSections/TaskTitle";
import VideoInstruction from "./TaskSections/VideoInstruction";
import BackgroundInformation from "./TaskSections/BackgroundInformation";
import TaskBrief from "./TaskSections/TaskBrief";
import TaskResource from "./TaskSections/TaskResource";
import SubmitTask from "./TaskSections/SubmitTask";
import Loading from "../../components/loading_spinner";

import {
  VideoInstructionInitial,
  BackgroundInformationInitial,
  TaskBriefInitial,
  TaskResourceInitial,
  TaskSubmitInitial,
} from "./TaskSections/InitialContent";

// Define the initial content for each editor
const initialContent = {
  video_instruction: VideoInstructionInitial,
  background_info: BackgroundInformationInitial,
  task_brief: TaskBriefInitial,
  task_resource: TaskResourceInitial,
  submit_task: TaskSubmitInitial,
};

const AddTask = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [taskId, setTaskId] = useState(null);
  const [title, setTitle] = useState("");
  const [duration, setDuration] = useState("");
  const [content, setContent] = useState(initialContent);
  const [video, setVideo] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [Key, setKey] = useState(Date.now());
  const [checkboxStates, setCheckboxStates] = useState({
    submit_task: {
      file: false,
      url: false,
      writing: false,
    },
  });

  const navigate = useNavigate();

  useEffect(() => {
    console.log(content);
  }, [content]);

  useEffect(() => {
    console.log(video);
  }, [video]);

  const location = useLocation();
  console.log(location);
  const post_id = location.state?.postId;

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

  const handleVideoChange = (video) => {
    setVideo(video);
  };

  const handleCheckboxChange = (updatedCheckboxStates) => {
    setCheckboxStates(updatedCheckboxStates);
  };

  const handleNext = async () => {
    if (activeStep === 0) {
      // Handle task creation in the first step
      try {
        setIsLoading(true);
        const response = await axios.post("/tasks/", {
          title,
          duration,
          post: post_id,
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
      const requestData = [];

      // Iterate over each section and prepare data
      for (const section in content) {
        const data = {
          task: taskId, // Assuming task ID is 1, you can replace it with actual task ID
          title: section,
          content: content[section],
        };
        if (section === "videoInstruction") {
          // Add video file if exists
          data.video = video;
        }
        if (section === "submitTask") {
          // Add checkbox states to the data if section is "submitTask"
          data.is_file = checkboxStates[section].file;
          data.is_url = checkboxStates[section].url;
          data.is_text = checkboxStates[section].writing;
        }

        // Add data to requestData array
        requestData.push(data);
      }

      // Send the FormData
      const response = await axios.post(
        `tasks/${taskId}/sections/`,
        requestData
      );

      if (response.status == 201) {
        setKey(Date.now());
        navigate(location.pathname, {
          replace: true,
          state: { post_id: post_id },
        });
      }

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
            content={content.video_instruction}
            handleContent={handleContentChange}
            handleVideoChange={handleVideoChange}
          />
        );
      case 2:
        return (
          <BackgroundInformation
            content={content.background_info}
            handleContent={handleContentChange}
          />
        );
      case 3:
        return (
          <TaskBrief
            content={content.task_brief}
            handleContent={handleContentChange}
          />
        );
      case 4:
        return (
          <TaskResource
            content={content.task_resource}
            handleContent={handleContentChange}
          />
        );
      case 5:
        return (
          <SubmitTask
            content={content.submit_task}
            checkboxStates={checkboxStates}
            handleContent={handleContentChange}
            handleCheckboxChange={handleCheckboxChange}
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
                    <button className="w-40 focus:outline-none border border-transparent py-2 px-5 rounded-lg shadow-sm text-center text-white bg-gray-800 hover:bg-gray-600 font-medium">
                      <Loading />
                    </button>
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
