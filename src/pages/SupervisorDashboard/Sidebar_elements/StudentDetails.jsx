import { Steps } from "antd";
import { useOutletContext, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "../../../api/axios";
import useAuth from "../../../hooks/useAuth";
export default function StudentDetails() {
  const {
    user: { user_id, email, role, university_supervisor_id },
  } = useAuth();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const {
    current,
    selectedStudent,
    selectedTasks,
    onChange,
    setSelectedTasks,
    postDetails,
  } = useOutletContext();
  const navigate = useNavigate();

  const [commentVisible, setCommentVisible] = useState(false);
  const [comment, setComment] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  // const rowHeightPercentage = 100 / (selectedTasks.length || 1);
  const rowHeightPercentage = 100 / selectedStudent.tasks.length;
  console.log(selectedStudent);
  const id = selectedStudent.id;

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError(null);

      try {
        // Fetch assignments data

        const response = await axios.get(`posts/${id}/`);
        const fetchedData = response.data || [];
        setData(fetchedData);
        console.log(data);
        // console.log(Data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [university_supervisor_id]);

  const handleStepClick = (index) => {
    if (selectedStudent) {
      const clickedStep = selectedStudent.tasks[index].title;
      console.log("Clicked step title:", clickedStep);

      if (!selectedTasks.includes(clickedStep)) {
        setSelectedTasks((prevTasks) => {
          const tasks = [...prevTasks];
          const clickedIndex = selectedStudent.tasks.findIndex(
            (task) => task.title === clickedStep
          );
          const tasksToAdd = selectedStudent.tasks
            .slice(0, clickedIndex + 1)
            .map((task) => task.title);
          return tasks.concat(
            tasksToAdd.filter((task) => !tasks.includes(task))
          );
        });
      }
    }
  };
  console.log(selectedStudent.tasks.length);

  const handleRegisterClick = () => {
    navigate("/Supervisor/ListOfStudents/StudentListDetail/Evaluation");
  };

  const handleAddCommentClick = () => {
    setCommentVisible(true);
    setIsEditing(true);
  };

  const handleSaveCommentClick = () => {
    setIsEditing(false);
  };

  const handleEditCommentClick = () => {
    setIsEditing(true);
  };

  return (
    <>
      <div className="flex flex-col text-center w-full mb-8">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
          Here General Description about the Intership
        </h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
          {data && data.description}
        </p>{" "}
      </div>

      <div className="flex  mt-4 flex-row border-b p-y-2 ">
        <div className="w-1/3 content-center text-center">
          <span>List Of Tasks</span>
        </div>
        <div className="w-10/12 p-2">
          <div className="h-16 flex justify-between items-center">
            <div className="w-1/3 text-center">
              <p>Estimated Duration</p>
            </div>
            <div className="w-1/3 text-center">
              <p>Skill Gained/Used</p>
            </div>
            <div className="w-1/3 text-center">
              <p>Proficiency Level</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row">
        <div className="w-1/3 flex">
          <Steps
            current={current}
            onChange={onChange}
            direction="vertical"
            items={selectedStudent.tasks.map((task, index) => ({
              title: task.title,
              description: task.description,
              onClick: () => handleStepClick(index),
            }))}
          />
        </div>

        <div className="w-10/12 flex flex-col rounded border">
          {/* {selectedTasks.map((taskTitle, index) => {
            const task = selectedStudent.tasks.find(
              (task) => task.title === taskTitle
            );
            return (
              <div
                key={index}
                className="border-b flex justify-between items-center"
                style={{
                  height: `${rowHeightPercentage}%`,
                  padding: "8px",
                }}
              >
                <div className="w-1/3 text-center">
                  <p>{task.duration}</p>
                </div>
                <div className="w-1/3 text-center">
                  <p>{task.skillGained}</p>
                </div>
                <div className="w-1/3 text-center">
                  <p>{task.proficiencyLevel}</p>
                </div>
              </div>
            );
          })} */}

          {selectedStudent.tasks.map((selectedTasks, index) => {
            return (
              <div
                key={index}
                className="border-b flex justify-between items-center"
                style={{
                  height: `${rowHeightPercentage}%`,
                  padding: "8px",
                }}
              >
                {/* This is task {selectedTasks[index]}
                {console.log("here it is")}
                {console.log(selectedTasks.duration)} */}

                <div className="w-1/3 text-center">
                  <p>{selectedTasks.duration}</p>
                </div>
                <div className="w-1/3 text-center">
                  <p>{selectedTasks.skillGained}</p>
                </div>
                <div className="w-1/3 text-center">
                  <p>{selectedTasks.proficiencyLevel}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="mt-4 mb-4 w-full">
        <h2 className="sm:text-2xl text-1xl text-gray-900 font-medium text-center">
          Supervisors Comment
        </h2>
        {commentVisible && (
          <textarea
            className={`p-2 border-slate-400 rounded w-full ${
              !isEditing && "border-none"
            }`}
            rows="4"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            readOnly={!isEditing}
          />
        )}
        <div className="mt-2 ">
          {!commentVisible && (
            <button
              className="bg-blue-500 float-right hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleAddCommentClick}
            >
              Add Comment
            </button>
          )}
          {commentVisible && isEditing && (
            <button
              className="bg-green-500 float-right hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleSaveCommentClick}
            >
              Save
            </button>
          )}
          {commentVisible && !isEditing && (
            <button
              className="bg-yellow-500 float-right hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleEditCommentClick}
            >
              Edit
            </button>
          )}
        </div>
      </div>
    </>
  );
}
