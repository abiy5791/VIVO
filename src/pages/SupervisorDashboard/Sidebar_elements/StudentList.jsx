import { List, Avatar, Steps, Divider } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";

export default function StudentListDetails() {
  const location = useLocation();
  const { studentData, postDetails } = location.state;
  console.log(postDetails);

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
                  {item.first_name}
                </a>
              }
              description={
                <>
                  <div className="font-semibold text-slate-600">
                    <div className="">
                      Name: {item.first_name} {item.last_name}{" "}
                    </div>
                    <div className="">Id: {item.university_id_number} </div>
                    <div>Email: {item.email} </div>
                    <div>Year: {item.batch} </div>
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
