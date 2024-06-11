import { useState, useEffect } from "react";
import { Table, Collapse, Button, Divider } from "antd";
import { useNavigate } from "react-router-dom";
import { DeleteOutlined } from "@ant-design/icons";
import axios from "../../../api/axios";
import useAuth from "../../../hooks/useAuth";

export default function AssignSupervisor() {
  const [data, setData] = useState([]);
  const [Supervisor, setSupervisor] = useState([]);
  const [Filtered, setFiltered] = useState([]);
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
        console.log(fetchedData);
        // console.log(fetchedData);
        const My = filterLatestEntries(fetchedData);
        console.log(My);
        setFiltered(My); /// filtered

        // Fetch students data   getStudentsBySupervisor
        const studResponse = await axios.get(
          `UvCoordniators/${university_coordinator_id}/accepted`
        );
        const fetchedStud = studResponse.data || [];
        console.log(fetchedStud);
        setStud(fetchedStud);

        const students = updateStudentsData(fetchedStud);
        // console.log(students);
        setStudentsList(students);
        // console.log(students);
        const initialdata = getStudentsBySupervisor(students, My);
        // console.log(getStudentsBySupervisor(students, My));
        setSelectedStudentsByBoss(getStudentsBySupervisor(students, My));

        const superviorsResponse = await axios.get(`UvSupervisors/`);
        const fetchedSupervisors = superviorsResponse.data || [];

        const Supervsr = filterSupervisorsByCoordinator(
          fetchedSupervisors,
          university_coordinator_id
        );

        setSupervisor(Supervsr);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [university_coordinator_id]);
  function filterLatestEntries(data) {
    // Convert string dates to Date objects for comparison
    const parseDate = (entry) => new Date(entry.created);

    // Sort by created date descending
    data.sort((a, b) => parseDate(b) - parseDate(a));

    // Create a map to store the latest entry for each student
    const latestEntries = new Map();

    for (const entry of data) {
      if (!latestEntries.has(entry.student)) {
        latestEntries.set(entry.student, entry);
      }
    }

    // Convert the map values back to an array
    return Array.from(latestEntries.values());
  }

  function transformAssignmentList(assignmentList) {
    return assignmentList.map(({ student, supervisor }) => ({
      student: student.toString(),
      supervisor: supervisor.toString(),
    }));
  }
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

  const [studentsList, setStudentsList] = useState(updateStudentsData(stud));

  function getStudentsBySupervisor(students, assignments) {
    // Step 1: Create a mapping of the latest assignment for each student
    const latestAssignments = new Map();

    for (const assignment of assignments) {
      const { student, created } = assignment;
      if (student !== null) {
        if (
          !latestAssignments.has(student) ||
          new Date(latestAssignments.get(student).created) < new Date(created)
        ) {
          latestAssignments.set(student, assignment);
        }
      }
    }

    // Step 2: Create a map to group students by their supervisor
    const supervisorMap = new Map();

    for (const student of students) {
      const assignment = latestAssignments.get(student.id);
      if (assignment) {
        const supervisorId = assignment.supervisor;
        if (!supervisorMap.has(supervisorId)) {
          supervisorMap.set(supervisorId, []);
        }

        supervisorMap.get(supervisorId).push({
          id: student.id,
          first_name: student.first_name,
          last_name: student.last_name,
          email: student.email,
          age: student.age,
          gender: student.gender,
          phone_number: student.phone_number,
          avatar: student.avatar,
          resume: student.resume,
          portfolio_link: student.portfolio_link,
          university: student.university,
          university_id_number: student.university_id_number,
          department: student.department,
          date_joined: student.date_joined,
          posts: student.posts,
          year: student.batch, // Assuming 'batch' corresponds to 'year'
          BossId: null,
          Bossid: supervisorId,
        });
      }
    }

    // Step 3: Convert the map to the required format
    const result = {};
    for (const [supervisorId, students] of supervisorMap.entries()) {
      result[supervisorId] = students;
    }

    return result;
  }

  console.log(studentsList);
  //const initialdata = getStudentsBySupervisor(studentsList, Filtered);

  const [selectedRows, setSelectedRows] = useState([]);

  const [selectedStudentsByBoss, setSelectedStudentsByBoss] = useState({});

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
  // console.log(selectedStudentsByBoss);
  const handleEditClick = async () => {
    const AssignmentList = transformData(selectedStudentsByBoss);
    console.log(AssignmentList);

    try {
      const response = await axios.post(
        `UvCoordniators/${university_coordinator_id}/assignments/`,
        AssignmentList,
        {
          headers: {
            "Content-Type": "application/json", // Adjust the content type if needed
          },
        }
      );
      // console.log(transformAssignmentList(AssignmentList));
      console.log("Form submitted successfully:", response.data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  function transformData(selectedStudentsByBoss) {
    let result = [];

    for (const [supervisorId, students] of Object.entries(
      selectedStudentsByBoss
    )) {
      students.forEach((student) => {
        result.push({
          student: student.id,
          supervisor: parseInt(supervisorId),
        });
      });
    }

    return result;
  }

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
                          src={boss.avatar}
                          alt=" "
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
              Submit
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
