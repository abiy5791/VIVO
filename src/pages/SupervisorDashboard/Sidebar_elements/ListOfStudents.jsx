import { useState } from "react";
import { List, Avatar, Steps, Divider } from "antd";
import { Outlet, useNavigate } from "react-router-dom";

const data = [
  {
    id: "",
    name: "Jane Cooper",
    current: 3,
    tasks: [
      {
        title: "Task 1",
        description: "This is a Step 1.",
        duration: "2 hours",
        skillGained: "Basic Coding",
        proficiencyLevel: "Beginner",
      },
      {
        title: "Task 2",
        description: "This is a Step 1.",
        duration: "2 hours",
        skillGained: "Basic Coding",
        proficiencyLevel: "Beginner",
      },
      {
        title: "Task 3",
        description: "This is a Step 1.",
        duration: "2 hours",
        skillGained: "Basic Coding",
        proficiencyLevel: "Beginner",
      },
      {
        title: "Task 4",
        description: "This is a Step 1.",
        duration: "2 hours",
        skillGained: "Basic Coding",
        proficiencyLevel: "Beginner",
      },
      {
        title: "Task 5",
        description: "This is a Step 1.",
        duration: "2 hours",
        skillGained: "Basic Coding",
        proficiencyLevel: "Beginner",
      },
      {
        title: "Task 6",
        description: "This is a Step 1.",
        duration: "2 hours",
        skillGained: "Basic Coding",
        proficiencyLevel: "Beginner",
      },
    ],
    email: "jane.cooper@example.com",
    imgsrc: "https://i.pravatar.cc/150?img=2",
  },
  {
    name: "John Doe",
    current: 1,
    status: "error",
    tasks: [
      {
        title: "Task 1",
        description: "This is a Step 2.",
        duration: "3 hours",
        skillGained: "Problem Solving",
        proficiencyLevel: "Beginner",
      },

      {
        title: "Task 2",
        description: "This is a Step 2.",
        duration: "3 hours",
        skillGained: "Problem Solving",
        proficiencyLevel: "Beginner",
      },

      {
        title: "Task 3",
        description: "This is a Step 2.",
        duration: "3 hours",
        skillGained: "Problem Solving",
        proficiencyLevel: "Beginner",
      },

      {
        title: "Task 4",
        description: "This is a Step 2.",
        duration: "3 hours",
        skillGained: "Problem Solving",
        proficiencyLevel: "Beginner",
      },

      {
        title: "Task 5",
        description: "This is a Step 2.",
        duration: "3 hours",
        skillGained: "Problem Solving",
        proficiencyLevel: "Beginner",
      },
    ],
    email: "john.Doe@example.com",
    imgsrc: "https://i.pravatar.cc/150?img=3",
  },
  {
    name: "Alice Smith",
    current: 6,
    tasks: [
      {
        title: "Task 1",
        description: "This is a Step 3.",
        duration: "4 hours",
        skillGained: "Algorithm Design",
        proficiencyLevel: "Intermediate",
      },

      {
        title: "Task 2",
        description: "This is a Step 3.",
        duration: "4 hours",
        skillGained: "Algorithm Design",
        proficiencyLevel: "Intermediate",
      },

      {
        title: "Task 3",
        description: "This is a Step 3.",
        duration: "4 hours",
        skillGained: "Algorithm Design",
        proficiencyLevel: "Intermediate",
      },

      {
        title: "Task 4",
        description: "This is a Step 3.",
        duration: "4 hours",
        skillGained: "Algorithm Design",
        proficiencyLevel: "Intermediate",
      },

      {
        title: "Task 5",
        description: "This is a Step 3.",
        duration: "4 hours",
        skillGained: "Algorithm Design",
        proficiencyLevel: "Intermediate",
      },

      {
        title: "Task 6",
        description: "This is a Step 3.",
        duration: "4 hours",
        skillGained: "Algorithm Design",
        proficiencyLevel: "Intermediate",
      },

      {
        title: "Task 7",
        description: "This is a Step 3.",
        duration: "4 hours",
        skillGained: "Algorithm Design",
        proficiencyLevel: "Intermediate",
      },

      {
        title: "Task 8",
        description: "This is a Step 3.",
        duration: "4 hours",
        skillGained: "Algorithm Design",
        proficiencyLevel: "Intermediate",
      },

      {
        title: "Task 9",
        description: "This is a Step 3.",
        duration: "4 hours",
        skillGained: "Algorithm Design",
        proficiencyLevel: "Intermediate",
      },

      {
        title: "Task 10",
        description: "This is a Step 3.",
        duration: "4 hours",
        skillGained: "Algorithm Design",
        proficiencyLevel: "Intermediate",
      },

      {
        title: "Task 11",
        description: "This is a Step 3.",
        duration: "4 hours",
        skillGained: "Algorithm Design",
        proficiencyLevel: "Intermediate",
      },

      {
        title: "Task 12",
        description: "This is a Step 3.",
        duration: "4 hours",
        skillGained: "Algorithm Design",
        proficiencyLevel: "Intermediate",
      },

      {
        title: "Task 13",
        description: "This is a Step 3.",
        duration: "4 hours",
        skillGained: "Algorithm Design",
        proficiencyLevel: "Intermediate",
      },
    ],
    email: "alice.smith@example.com",
    imgsrc: "https://i.pravatar.cc/150?img=3",
  },
  {
    name: "Bob Brown",
    current: 6,
    tasks: [
      {
        title: "Task 1",
        description: "This is a Step 4.",
        duration: "1.5 hours",
        skillGained: "Data Structures",
        proficiencyLevel: "Intermediate",
      },
      {
        title: "Task 2",
        description: "This is a Step 4.",
        duration: "1.5 hours",
        skillGained: "Data Structures",
        proficiencyLevel: "Intermediate",
      },
      {
        title: "Task 3",
        description: "This is a Step 4.",
        duration: "1.5 hours",
        skillGained: "Data Structures",
        proficiencyLevel: "Intermediate",
      },
      {
        title: "Task 4",
        description: "This is a Step 4.",
        duration: "1.5 hours",
        skillGained: "Data Structures",
        proficiencyLevel: "Intermediate",
      },
      {
        title: "Task 5",
        description: "This is a Step 4.",
        duration: "1.5 hours",
        skillGained: "Data Structures",
        proficiencyLevel: "Intermediate",
      },
      {
        title: "Task 6",
        description: "This is a Step 4.",
        duration: "1.5 hours",
        skillGained: "Data Structures",
        proficiencyLevel: "Intermediate",
      },
      {
        title: "Task 7",
        description: "This is a Step 4.",
        duration: "1.5 hours",
        skillGained: "Data Structures",
        proficiencyLevel: "Intermediate",
      },
      {
        title: "Task 8",
        description: "This is a Step 4.",
        duration: "1.5 hours",
        skillGained: "Data Structures",
        proficiencyLevel: "Intermediate",
      },
      {
        title: "Task 9",
        description: "This is a Step 4.",
        duration: "1.5 hours",
        skillGained: "Data Structures",
        proficiencyLevel: "Intermediate",
      },
    ],
    email: " bob.brown@example.com",
    imgsrc: "https://i.pravatar.cc/150?img=4",
  },
];

export default function ListOfStudents() {
  const [current, setCurrent] = useState(0);
  const [clickedItem, setClickedItem] = useState(null);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [selectedTasks, setSelectedTasks] = useState([]);
  const navigate = useNavigate();

  const handleItemClick = (item) => {
    if (item) {
      setClickedItem(item);
      setSelectedStudent(item);
      setCurrent(item.current);
      setSelectedTasks(
        item.tasks.slice(0, item.current + 1).map((task) => task.title)
      );
      navigate(`/Supervisor/ListOfStudents/StudentListDetail`, {
        state: { studentData: item },
      });
    }
  };

  const contextValue = {
    current,
    selectedStudent,
    selectedTasks,
    onChange: setCurrent,
    setSelectedTasks,
  };

  return (
    <div className="w-9/12 mx-auto">
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item, index) => (
          <List.Item onClick={() => handleItemClick(item)}>
            <List.Item.Meta
              avatar={<Avatar src={item.imgsrc} />}
              title={<a href="#">{item.name}</a>}
              description={item.email}
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
      {selectedStudent && (
        <>
          <Divider />
          <Outlet context={contextValue} />
        </>
      )}
    </div>
  );
}
