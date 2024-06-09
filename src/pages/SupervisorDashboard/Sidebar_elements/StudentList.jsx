import { List, Avatar, Steps, Divider } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";

export default function StudentListDetails() {
  const location = useLocation();
  const { studentData } = location.state;
  console.log(studentData);

  const navigate = useNavigate();
  // Define the context object containing the student data
  const contextValue = {
    current: studentData.current,
    selectedStudent: studentData,
    selectedTasks: studentData.tasks
      .slice(0, studentData.current + 1)
      .map((task) => task.title),
    onChange: () => {}, // Dummy onChange function, adjust if needed
    setSelectedTasks: () => {}, // Dummy setSelectedTasks function, adjust if needed
  };
  const handleRegisterClick = () => {
    navigate("/Supervisor/ListOfStudents/StudentListDetail/Evaluation");
  };

  return (
    <div className="w-9/12 mx-auto">
      <List
        itemLayout="horizontal"
        dataSource={[studentData]}
        renderItem={(item, index) => (
          <List.Item key={index}>
            <List.Item.Meta
              avatar={<Avatar src={item.imgsrc} />}
              title={
                <a className="font-semibold text-lg" href="">
                  {item.name}
                </a>
              }
              description={
                <>
                  <div className="font-semibold text-slate-600">
                    <div className="">Id: {item.email} </div>
                    <div>Address: {item.Name} </div>
                    <div>Year: {item.email} </div>
                  </div>
                </>
              }
            />
            <Steps
              style={{ marginTop: 8 }}
              type="inline"
              current={item.current}
              status={item.status}
              items={item.tasks.map((task) => ({
                title: task.title,
                description: task.description,
              }))}
            />
          </List.Item>
        )}
      />
      <Divider />
      {/* Pass the contextValue as context prop */}
      <Outlet context={contextValue} />
    </div>
  );
}
