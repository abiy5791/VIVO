import { useState, useEffect } from "react";

import { List, Avatar, Steps, Divider } from "antd";
import { Outlet, useNavigate } from "react-router-dom";
import axios from "../../../api/axios";
import useAuth from "../../../hooks/useAuth";
// const data = [
//   {
//     id: "",
//     name: "Jane Cooper",
//     current: 3,
//     tasks: [
//       {
//         title: "Task 1",
//         description: "This is a Step 1.",
//         duration: "2 hours",
//         skillGained: "Basic Coding",
//         proficiencyLevel: 9,
//       },
//       {
//         title: "Task 2",
//         description: "This is a Step 1.",
//         duration: "2 hours",
//         skillGained: "Basic Coding",
//         proficiencyLevel: 8,
//       },
//       {
//         title: "Task 3",
//         description: "This is a Step 1.",
//         duration: "2 hours",
//         skillGained: "Basic Coding",
//         proficiencyLevel: 8,
//       },
//       {
//         title: "Task 4",
//         description: "This is a Step 1.",
//         duration: "2 hours",
//         skillGained: "Basic Coding",
//         proficiencyLevel: 6,
//       },
//       {
//         title: "Task 5",
//         description: "This is a Step 1.",
//         duration: "2 hours",
//         skillGained: "Basic Coding",
//         proficiencyLevel: 9,
//       },
//       {
//         title: "Task 6",
//         description: "This is a Step 1.",
//         duration: "2 hours",
//         skillGained: "Basic Coding",
//         proficiencyLevel: 9,
//       },
//     ],
//     email: "jane.cooper@example.com",
//     imgsrc: "https://i.pravatar.cc/150?img=2",
//   },
//   {
//     name: "John Doe",
//     current: 1,
//     status: "error",
//     tasks: [
//       {
//         title: "Task 1",
//         description: "This is a Step 2.",
//         duration: "3 hours",
//         skillGained: "Problem Solving",
//         proficiencyLevel: 9,
//       },

//       {
//         title: "Task 2",
//         description: "This is a Step 2.",
//         duration: "4 years",
//         skillGained: "ziget",
//         proficiencyLevel: 5,
//       },

//       {
//         title: "Task 3",
//         description: "This is a Step 2.",
//         duration: "3 hours",
//         skillGained: "",
//         proficiencyLevel: "",
//       },

//       {
//         title: "Task 4",
//         description: "This is a Step 2.",
//         duration: "3 hours",
//         skillGained: "Problem Solving",
//         proficiencyLevel: 7,
//       },

//       {
//         title: "Task 5",
//         description: "This is a Step 2.",
//         duration: "3 hours",
//         skillGained: "Problem Solving",
//         proficiencyLevel: 7,
//       },
//     ],
//     email: "john.Doe@example.com",
//     imgsrc: "https://i.pravatar.cc/150?img=3",
//   },
//   {
//     name: "Alice Smith",
//     current: 6,
//     tasks: [
//       {
//         title: "Task 1",
//         description: "This is a Step 3.",
//         duration: "4 hours",
//         skillGained: "Algorithm Design",
//         proficiencyLevel: 8,
//       },

//       {
//         title: "Task 2",
//         description: "This is a Step 3.",
//         duration: "4 hours",
//         skillGained: "Algorithm Design",
//         proficiencyLevel: 7,
//       },

//       {
//         title: "Task 3",
//         description: "This is a Step 3.",
//         duration: "4 hours",
//         skillGained: "Algorithm Design",
//         proficiencyLevel: 10,
//       },

//       {
//         title: "Task 4",
//         description: "This is a Step 3.",
//         duration: "4 hours",
//         skillGained: "Algorithm Design",
//         proficiencyLevel: 6,
//       },

//       {
//         title: "Task 5",
//         description: "This is a Step 3.",
//         duration: "4 hours",
//         skillGained: "Algorithm Design",
//         proficiencyLevel: 8,
//       },

//       {
//         title: "Task 6",
//         description: "This is a Step 3.",
//         duration: "4 hours",
//         skillGained: "Algorithm Design",
//         proficiencyLevel: 8,
//       },

//       {
//         title: "Task 7",
//         description: "This is a Step 3.",
//         duration: "4 hours",
//         skillGained: "Algorithm Design",
//         proficiencyLevel: 9,
//       },

//       {
//         title: "Task 8",
//         description: "This is a Step 3.",
//         duration: "4 hours",
//         skillGained: "Algorithm Design",
//         proficiencyLevel: 8,
//       },

//       {
//         title: "Task 9",
//         description: "This is a Step 3.",
//         duration: "4 hours",
//         skillGained: "Algorithm Design",
//         proficiencyLevel: 9,
//       },

//       {
//         title: "Task 10",
//         description: "This is a Step 3.",
//         duration: "4 hours",
//         skillGained: "Algorithm Design",
//         proficiencyLevel: 8,
//       },

//       {
//         title: "Task 11",
//         description: "This is a Step 3.",
//         duration: "4 hours",
//         skillGained: "Algorithm Design",
//         proficiencyLevel: 9,
//       },

//       {
//         title: "Task 12",
//         description: "This is a Step 3.",
//         duration: "4 hours",
//         skillGained: "Algorithm Design",
//         proficiencyLevel: 7,
//       },

//       {
//         title: "Task 13",
//         description: "This is a Step 3.",
//         duration: "4 hours",
//         skillGained: "Algorithm Design",
//         proficiencyLevel: 9,
//       },
//     ],
//     email: "alice.smith@example.com",
//     imgsrc: "https://i.pravatar.cc/150?img=3",
//   },
//   {
//     name: "Bob Brown",
//     current: 6,
//     tasks: [
//       {
//         title: "Task 1",
//         description: "This is a Step 4.",
//         duration: "1.5 hours",
//         skillGained: "Data Structures",
//         proficiencyLevel: 8,
//       },
//       {
//         title: "Task 2",
//         description: "Personal Portfolio",
//         duration: "1.5 hours",
//         skillGained: "Data Structures",
//         proficiencyLevel: 9,
//       },
//       {
//         title: "Task 3",
//         description: "This is a Step 4.",
//         duration: "1.5 hours",
//         skillGained: "Data Structures",
//         proficiencyLevel: 8,
//       },
//       {
//         title: "Task 4",
//         description: "This is a Step 4.",
//         duration: "1.5 hours",
//         skillGained: "Data Structures",
//         proficiencyLevel: 6,
//       },
//       {
//         title: "Task 5",
//         description: "This is a Step 4.",
//         duration: "1.5 hours",
//         skillGained: "Data Structures",
//         proficiencyLevel: 9,
//       },
//       {
//         title: "Task 6",
//         description: "This is a Step 4.",
//         duration: "1.5 hours",
//         skillGained: "Data Structures",
//         proficiencyLevel: 9,
//       },
//       {
//         title: "Task 7",
//         description: "This is a Step 4.",
//         duration: "1.5 hours",
//         skillGained: "Data Structures",
//         proficiencyLevel: 6,
//       },
//       {
//         title: "Task 8",
//         description: "This is a Step 4.",
//         duration: "1.5 hours",
//         skillGained: "Data Structures",
//         proficiencyLevel: 8,
//       },
//       {
//         title: "Task 9",
//         description: "This is a Step 4.",
//         duration: "1.5 hours",
//         skillGained: "Data Structures",
//         proficiencyLevel: 8,
//       },
//     ],
//     email: " bob.brown@example.com",
//     imgsrc: "https://i.pravatar.cc/150?img=4",
//   },
// ];

export default function ListOfStudents() {
  const [mergedData, setMergedData] = useState([]);
  const [Tasks, setTasks] = useState([]);
  const [postDetails, setPostDetails] = useState([]);
  const [postIds, setPostIds] = useState([]);
  const [current, setCurrent] = useState(0);
  const [data, setData] = useState([]);
  const [clickedItem, setClickedItem] = useState(null);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [selectedTasks, setSelectedTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const {
    user: { user_id, email, role, university_supervisor_id },
  } = useAuth();
  // console.log(user_id);

  const extractPostIds = (dataArray) => {
    const ids = dataArray.map((item) => item.post_id);
    // console.log(ids);
    setPostIds(ids);
  };

  function addTasksToData(data, mergedData) {
    // Create a map to store tasks by postid
    const tasksMap = new Map();
    mergedData.forEach((task) => {
      const postId = task.postid;
      if (!tasksMap.has(postId)) {
        tasksMap.set(postId, []);
      }
      tasksMap.get(postId).push(task);
    });

    // Add tasks property to each object in data
    data.forEach((item) => {
      const postId = item.post_id;
      item.tasks = tasksMap.get(postId) || [];
    });

    return data;
  }

  useEffect(() => {
    const fetchPostDetails = async () => {
      const details = await Promise.all(
        postIds.map(async (id) => {
          try {
            const response = await axios.get(`posts/${id}/`);

            const Taskresponse = await axios.get(`tasks`);
            const fetchedTask = Taskresponse.data || [];
            setTasks(fetchedTask);

            setMergedData(mergePostAndTasks(postDetails, Tasks));
            return { id, data: response.data };
          } catch (error) {
            console.error(`Failed to fetch details for post_id ${id}:`, error);
            return { id, error: error.message };
          }
        })
      );

      setPostDetails(details);
    };

    if (postIds.length > 0) {
      fetchPostDetails();
    }
  }, [postIds]);

  console.log(postDetails);

  function categorizeObjectsByPost(arr) {
    const categorizedObjects = {};

    arr.forEach((obj) => {
      if (!categorizedObjects[obj.post]) {
        categorizedObjects[obj.post] = [];
      }
      categorizedObjects[obj.post].push(obj);
    });

    return Object.values(categorizedObjects);
  }
  const categorizedData = categorizeObjectsByPost(Tasks);

  console.log(categorizedData);

  function assignTasksToData(data, categorizedData) {
    // Create a map for quick lookup of tasks by post number
    const tasksMap = new Map();
    categorizedData.forEach((taskGroup) => {
      // Assume the post number is the same for all tasks in the group
      if (taskGroup.length > 0) {
        tasksMap.set(taskGroup[0].post, taskGroup);
      }
    });

    // Assign tasks to each data item
    data.forEach((item) => {
      const tasks = tasksMap.get(item.post_id);
      item.tasks = tasks || [];
    });

    return data;
  }

  const updatedData = assignTasksToData(data, categorizedData);
  console.log(updatedData);
  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError(null);

      try {
        // Fetch assignments data

        const response = await axios.get(
          `UvSupervisors/${university_supervisor_id}/students`
        );
        const fetchedData = response.data || [];
        setData(fetchedData);
        extractPostIds(fetchedData);
        const result = addTasksToData(fetchedData, mergedData);
        console.log(result);
        // console.log(Data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [university_supervisor_id]);

  function mergePostAndTasks(postDetails, tasks) {
    // Create a map for quick lookup of post details by id
    const postMap = new Map();
    postDetails.forEach((post) => {
      postMap.set(post.id, post.data);
    });

    // Create the merged array
    const mergedArray = tasks.map((task) => {
      const postDetail = postMap.get(task.post);
      return {
        postid: task.post, // post ID from task
        title: task.title, // title from task
        description: postDetail ? postDetail.description : "", // description from postDetails
        duration: task.duration, // duration from task
        skillGained: postDetail ? postDetail.skills_gained : "", // skills gained from postDetails
        proficiencyLevel: "", // leave proficiency level as empty string
      };
    });

    return mergedArray;
  }

  const mergeTasksAndPosts = (Tasks, postDetails) => {
    return Tasks.map((Tasks) => {
      // Find the corresponding post detail by id
      const postDetail = postDetails.find(
        (post) => post.data.id === Tasks.post
      );

      // Return the merged object
      return postDetail
        ? {
            postId: Tasks.post,
            title: Tasks.title,
            description: postDetail.data.description,
            duration: Tasks.duration,
            skillGained: postDetail.data.skills_gained,
            proficiencyLevel: "", // Empty string for proficiencyLevel
          }
        : null; // Return null if no matching post is found
    }).filter((task) => task !== null); // Filter out null values
  };

  // console.log(mergedData);
  // console.log(postIds);
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
        state: { studentData: item, postDetails: postDetails },
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
      <div className="flex flex-col text-center w-full mb-8">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
          Well Come, Dear Supervisor.
        </h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
          Here is the list of students assigned to you. Please manage and
          support them during their internships by providing guidance,
          resources, and feedback. Ensure you oversee their projects and address
          any concerns to help them succeed.
        </p>
      </div>
      <List
        itemLayout="horizontal"
        dataSource={updatedData}
        renderItem={(item, categorizedData, index) => (
          <List.Item onClick={() => handleItemClick(item)}>
            <List.Item.Meta
              avatar={<Avatar src={item.imgsrc} />}
              title={<a href="">{item.name}</a>}
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
