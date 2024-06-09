import { useState, useEffect } from "react";
import { Table, Collapse, Button, Divider } from "antd";
import { useNavigate } from "react-router-dom";
import { DeleteOutlined } from "@ant-design/icons";
import axios from "../../../api/axios";
import useAuth from "../../../hooks/useAuth";
// const students = [
//   {
//     id: 8,
//     name: "Mark Johnson",
//     department: "Marketing",
//     year: 5,
//     Bossid: null,
//   },
//   {
//     id: 9,
//     name: "Sarah Adams",
//     department: "Marketing",
//     year: 4,
//     Bossid: null,
//   },
//   {
//     id: 6,
//     name: "Emma Davis",
//     department: "Finance",
//     year: 3,
//     Bossid: null,
//   },
//   {
//     id: 3,
//     name: "David Brown",
//     department: "Finance",
//     year: 2,
//     Bossid: null,
//   },
//   {
//     id: 58,
//     name: "Chris White",
//     department: "Operations",
//     year: 7,
//     Bossid: null,
//   },
//   {
//     id: 60,
//     name: "Jennifer Garcia",
//     department: "Operations",
//     year: 6,
//     Bossid: null,
//   },
//   {
//     id: 72,
//     name: "Sophia Taylor",
//     department: "Human Resources",
//     year: 4,
//     Bossid: null,
//   },
//   {
//     id: 87,
//     name: "James Rodriguez",
//     department: "Human Resources",
//     year: 3,
//     Bossid: null,
//   },
//   {
//     id: 96,
//     name: "Ryan Martinez",
//     department: "Sales",
//     year: 8,
//     Bossid: null,
//   },
//   {
//     id: 19,
//     name: "Lily Wilson",
//     department: "Sales",
//     year: 5,
//     Bossid: null,
//   },
//   {
//     id: 16,
//     name: "Ethan Anderson",
//     department: "IT",
//     year: 6,
//     Bossid: null,
//   },
//   {
//     id: 13,
//     name: "Grace Thompson",
//     department: "IT",
//     year: 4,
//     Bossid: null,
//   },
//   {
//     id: 14,
//     name: "Olivia Hernandez",
//     department: "Engineering",
//     year: 9,
//     Bossid: null,
//   },
//   {
//     id: 109,
//     name: "William Moore",
//     department: "Engineering",
//     year: 5,
//     Bossid: null,
//   },
//   {
//     id: 157,
//     name: "Noah Thompson",
//     department: "Customer Service",
//     year: 2,
//     Bossid: null,
//   },
//   {
//     id: 168,
//     name: "Ava Walker",
//     department: "Customer Service",
//     year: 1,
//     Bossid: null,
//   },
//   {
//     id: 177,
//     name: "Liam Garcia",
//     department: "Product Management",
//     year: 4,
//     Bossid: null,
//   },
//   {
//     id: 108,
//     name: "Mia Rodriguez",
//     department: "Product Management",
//     year: 3,
//     Bossid: null,
//   },
//   {
//     id: 189,
//     name: "Lucas Martinez",
//     department: "Research and Development",
//     year: 5,
//     Bossid: null,
//   },
//   {
//     id: 200,
//     name: "Ella Davis",
//     department: "Research and Development",
//     year: 3,
//     Bossid: null,
//   },
// ];

// const Supervisor = [
//   {
//     id: 19,
//     name: "John Smith",
//     age: 45,
//     department: "Marketing",
//     teamSize: 20,
//     Students: [],
//     imgsrc: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
//   },
//   {
//     id: 72,
//     name: "Alice Johnson",
//     age: 38,
//     department: "Finance",
//     teamSize: 15,
//     Students: [],
//     imgsrc:
//       "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
//   },
//   {
//     id: 973,
//     name: "David Lee",
//     age: 50,
//     department: "Operations",
//     teamSize: 30,
//     Students: [],
//     imgsrc: "https://randomuser.me/api/portraits/men/86.jpg",
//   },
//   {
//     id: 64,
//     name: "Emily Chen",
//     age: 42,
//     department: "Human Resources",
//     teamSize: 25,
//     Students: [],
//     imgsrc: "https://randomuser.me/api/portraits/women/79.jpg",
//   },
//   {
//     id: 235,
//     name: "Michael Brown",
//     age: 55,
//     department: "Sales",
//     teamSize: 35,
//     Students: [],
//     imgsrc:
//       "https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
//   },
//   {
//     id: 706,
//     name: "Jennifer Wang",
//     age: 40,
//     department: "IT",
//     teamSize: 10,
//     Students: [],
//     imgsrc: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
//   },
//   {
//     id: 79,
//     name: "Robert Garcia",
//     age: 48,
//     department: "Engineering",
//     teamSize: 40,
//     Students: [],
//     imgsrc:
//       "https://images.unsplash.com/photo-1439911767590-c724b615299d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
//   },
//   {
//     id: 86,
//     name: "Samantha White",
//     age: 36,
//     department: "Customer Service",
//     teamSize: 25,
//     Students: [],
//     imgsrc:
//       "https://images.unsplash.com/photo-1439911767590-c724b615299d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
//   },
//   {
//     id: 79,
//     name: "Daniel Kim",
//     age: 43,
//     department: "Product Management",
//     teamSize: 20,
//     Students: [],
//     imgsrc:
//       "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
//   },
//   {
//     id: 610,
//     name: "Jessica Martinez",
//     age: 47,
//     department: "Research and Development",
//     teamSize: 30,
//     Students: [],
//     imgsrc:
//       "https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
//   },
// ];

export default function AssignSupervisor() {
  const [data, setData] = useState([]);
  const [Supervisor, setSupervisor] = useState([]);
  const [allStudentdata, setallStudentdata] = useState([]);
  const [stud, setStud] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const {
    user: { user_id, email, role, university_coordinator_id },
  } = useAuth();

  // console.log(university_coordinator_id);
  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError(null);

      try {
        // Fetch assignments data
        const response = await axios.get(
          `UvCoordniators/${university_coordinator_id}/assignments`
        );
        const fetchedData = response.data || [];
        setData(fetchedData);
        // console.log(fetchedData);

        // Fetch students data
        const studResponse = await axios.get(
          `UvCoordniators/${university_coordinator_id}/students`
        );
        const fetchedStud = studResponse.data || [];
        setStud(fetchedStud);

        const students = updateStudentsData(fetchedStud);
        setStudentsList(students);

        const superviorsResponse = await axios.get(`UvSupervisors/`);
        const fetchedSupervisors = superviorsResponse.data || [];

        const Supervsr = filterSupervisorsByCoordinator(
          fetchedSupervisors,
          university_coordinator_id
        );

        setSupervisor(Supervsr);

        //////
        // const allstudResponse = await axios.get(`/students`);
        // const fetchedAllStud = studResponse.data || [];
        // setallStudentdata(fetchedAllStud);

        // Format data after both API calls complete
        // const formatted = formatData(fetchedData, fetchedStud);
        // setFormattedData(formatted);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [university_coordinator_id]);

  function filterSupervisorsByCoordinator(supervisors, coordinatorId) {
    return supervisors.filter(
      (supervisor) => supervisor.coordinator === coordinatorId
    );
  }

  function updateStudentsData(students) {
    return students.map((student) => {
      // Copy the student object
      const newStudent = { ...student };

      // Rename the batch property to year
      newStudent.year = newStudent.batch;
      delete newStudent.batch;

      // Add the BossId property with null value
      newStudent.BossId = null;

      return newStudent;
    });
  }

  const [selectedRows, setSelectedRows] = useState([]);

  const [selectedStudentsByBoss, setSelectedStudentsByBoss] = useState({});
  const [studentsList, setStudentsList] = useState(updateStudentsData(stud));
  const [Addbutton, setAddbutton] = useState(false);
  const navigate = useNavigate();

  const handleRowClick = (record) => {
    const index = selectedRows.findIndex((row) => row.id === record.id);
    if (index === -1) {
      setSelectedRows([...selectedRows, record]);
    } else {
      setSelectedRows(selectedRows.filter((row) => row.id !== record.id));
    }
  };

  const handleButtonClick = (boss) => {
    const selectedStudentIDs = selectedRows.map((student) => student.id);
    const remainingStudents = studentsList.filter(
      (student) => !selectedStudentIDs.includes(student.id)
    );

    setSelectedStudentsByBoss({
      ...selectedStudentsByBoss,
      [boss.id]: [
        ...(selectedStudentsByBoss[boss.id] || []),
        ...selectedRows.map((student) => ({ ...student, Bossid: boss.id })),
      ],
    });

    setStudentsList(remainingStudents);
    setSelectedRows([]);

    /// a funtion to send to api

    ///
  };
  const handleButtonClickAdd = (boss) => {
    const selectedStudentIDs = selectedRows.map((student) => student.id);
    const remainingStudents = studentsList.filter(
      (student) => !selectedStudentIDs.includes(student.id)
    );

    setSelectedStudentsByBoss({
      ...selectedStudentsByBoss,
      [boss.id]: [
        ...(selectedStudentsByBoss[boss.id] || []),
        ...selectedRows.map((student) => ({ ...student, Bossid: boss.id })),
      ],
    });

    setStudentsList(remainingStudents);
    setSelectedRows([]);
    setAddbutton(false);
  };
  const handleAddStudent = (boss) => {
    console.log(boss);
    setAddbutton(true);
  };
  const handleDeleteStudent = (bossId, student) => {
    const updatedSelectedStudents = selectedStudentsByBoss[bossId].filter(
      (s) => s.id !== student.id
    );

    setSelectedStudentsByBoss({
      ...selectedStudentsByBoss,
      [bossId]: updatedSelectedStudents,
    });

    setStudentsList([...studentsList, { ...student, Bossid: null }]);

    /// here a function to send to api
  };

  const handleEditClick = () => {
    navigate("/UvCoordinator/AssignSupervisor/Editassignament", {
      state: {
        Supervisor,
        students: studentsList,
        selectedStudentsByBoss: selectedStudentsByBoss,
      },
    });
  };
  console.log(selectedStudentsByBoss);
  const columns = [
    {
      title: "Name",
      dataIndex: "first_name",
      width: 180,
      sorter: (a, b) => a.first_name.localeCompare(b.first_name),
      sortDirections: ["ascend", "descend"],
    },
    {
      title: "Department",
      dataIndex: "department",
      width: 180,
      sorter: (a, b) => a.department.localeCompare(b.department),
      sortDirections: ["ascend", "descend"],
    },
    {
      title: "Years",
      dataIndex: "year",
      width: 180,
      sorter: (a, b) => a.year - b.year,
      sortDirections: ["ascend", "descend"],
    },
    {
      title: "Select",
      dataIndex: "selected",
      width: 100,
      render: (_, record) => (
        <input
          type="checkbox"
          checked={selectedRows.some((row) => row.id === record.id)}
          onChange={() => handleRowClick(record)}
        />
      ),
    },
  ];

  const selectedColumns = [
    ...columns.slice(0, -1), // Exclude the "Select" column
    {
      title: "Action",
      dataIndex: "action",
      width: 100,
      render: (_, record) => (
        <Button
          icon={<DeleteOutlined />}
          onClick={() => handleDeleteStudent(record.Bossid, record)}
        />
      ),
    },
  ];

  return (
    <>
      <div className="container px-5 py-16 w-3/4 mx-auto">
        <div className="flex flex-col text-center w-full mb-8">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Assign Supervisor with respective Students
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table. Franzen you probably
            haven't heard of them man bun deep.
          </p>
        </div>
        <div className="container px-1 py-12 mx-auto">
          {Supervisor.map((boss) => {
            const updatedStudents = studentsList.map((worker) => ({
              ...worker,
              Bossid: boss.id,
            }));

            return (
              <Collapse
                key={boss.id}
                defaultActiveKey={["selected", "unselected"]}
                ghost
                className=" py-0 my-0 "
              >
                <Collapse.Panel
                  header={
                    <div className="m-0  flex  items-center  gap-x-3  px-6 whitespace-nowrap ">
                      <div className="ml-1 ">
                        <img
                          src={boss.imgsrc}
                          alt="Boss"
                          className="flex-none w-12 h-12 rounded-full"
                        />
                      </div>
                      <div className="w-full flex justify-evenly ">
                        <span className="block text-gray-700 text-sm font-medium">
                          {boss.first_name} {boss.last_name}
                        </span>
                        <span className="block text-gray-700 text-xs">
                          {boss.specialization}
                        </span>
                      </div>
                    </div>
                  }
                  key={boss.name}
                >
                  <div style={{ height: "100%", width: "100%" }}>
                    <div
                      style={{
                        display: selectedStudentsByBoss[boss.id]
                          ? "none"
                          : "block",
                      }}
                    >
                      <div>
                        <Divider />
                        <Table
                          className="mx-3"
                          columns={columns}
                          dataSource={updatedStudents}
                          pagination={false}
                          onRow={(record) => ({
                            onClick: () => handleRowClick(record, boss),
                            style: {
                              backgroundColor: selectedRows.find(
                                (row) => row.id === record.id
                              )
                                ? "#f0f0f0"
                                : "inherit",
                            },
                          })}
                        />
                      </div>
                      <div style={{ textAlign: "right", marginTop: "10px" }}>
                        <Button
                          type="primary"
                          className="float-right mr-20"
                          onClick={() => handleButtonClick(boss)}
                        >
                          Done
                        </Button>
                      </div>
                    </div>
                    <div style={{ marginTop: "10px" }}>
                      <div className="w-full flex justify-center mx-auto">
                        <h3 className=" mx-auto text-gray-800 text-xl font-semibold">
                          Selected Students:
                        </h3>
                      </div>
                      <Table
                        columns={selectedColumns}
                        dataSource={selectedStudentsByBoss[boss.id]}
                        pagination={false}
                        onRow={(record) => ({
                          onClick: () => handleRowClick(record, boss),
                        })}
                      />
                    </div>
                    <div
                      style={{
                        display: Addbutton ? "block" : "none",
                      }}
                    >
                      <div>
                        <Divider />
                        <Table
                          className="mx-3"
                          columns={columns}
                          dataSource={updatedStudents}
                          pagination={false}
                          onRow={(record) => ({
                            onClick: () => handleRowClick(record, boss),
                            style: {
                              backgroundColor: selectedRows.find(
                                (row) => row.id === record.id
                              )
                                ? "#f0f0f0"
                                : "inherit",
                            },
                          })}
                        />
                      </div>
                      <div style={{ textAlign: "right", marginTop: "10px" }}>
                        <Button
                          type="primary"
                          className="float-right mr-20"
                          onClick={() => handleButtonClickAdd(boss)}
                        >
                          Done
                        </Button>
                      </div>
                    </div>
                    <Divider />
                    <div
                      className="mb-4"
                      style={{ textAlign: "right", marginTop: "10px" }}
                    >
                      <Button
                        type="primary"
                        className="float-right mr-20"
                        onClick={() => handleAddStudent(boss)}
                      >
                        Add Student
                      </Button>
                    </div>
                  </div>
                </Collapse.Panel>
                <Divider />
              </Collapse>
            );
          })}
          <div className="mt-9">
            <Button
              type="primary"
              className="float-right mr-20"
              onClick={handleEditClick}
            >
              Edit
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
