import { Steps } from "antd";
import { useOutletContext, useNavigate } from "react-router-dom";

export default function StudentDetails() {
  const {
    current,
    selectedStudent,
    selectedTasks,
    onChange,
    setSelectedTasks,
  } = useOutletContext();
  const navigate = useNavigate();

  const rowHeightPercentage = 100 / (selectedTasks.length || 1);

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

  const handleRegisterClick = () => {
    navigate("/Supervisor/ListOfStudents/StudentListDetail/Evaluation");
  };

  return (
    <>
      <div className="flex m-1 flex-row border-b p-y-2 ">
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
          {selectedTasks.map((taskTitle, index) => {
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
          })}
        </div>
      </div>
      <button
        className="bg-blue-500 float-right mt-8 mr-20 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleRegisterClick}
      >
        Download Document
      </button>
    </>
  );
}
