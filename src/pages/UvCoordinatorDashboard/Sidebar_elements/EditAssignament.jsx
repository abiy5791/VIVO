import { useState, useEffect } from "react";
import { Table, Collapse, Button } from "antd";
// Step 2
import { useLocation } from "react-router-dom";

export default function EditAssignament() {
  const location = useLocation();
  const { students, Supervisor } = location.state;

  const [selectedRows, setSelectedRows] = useState([]);
  const [selectedStudentsByBoss, setSelectedStudentsByBoss] = useState({});

  const [Students, setStudents] = useState(students);
  useEffect(() => {}, [selectedStudentsByBoss]);
  const handleChange = (pagination, filters, sorter) => {
    setSortedInfo(sorter);
  };

  const handleRowClick = (record) => {
    const index = selectedRows.findIndex((row) => row.id === record.id);

    if (index === -1) {
      setSelectedRows([...selectedRows, record]);
    } else {
      setSelectedRows(selectedRows.filter((row) => row.id !== record.id));
    }
  };

  const handleButtonClick = (boss) => {
    // Get the IDs of selected students
    const selectedStudentIDs = selectedRows.map((student) => student.id);

    // Filter out the selected students from the Students array
    const remainingStudents = Students.filter(
      (student) => !selectedStudentIDs.includes(student.id)
    );

    // Update the selected students for the boss
    setSelectedStudentsByBoss({
      ...selectedStudentsByBoss,
      [boss.id]: selectedRows,
    });

    // Update the Students state with the remaining students
    setStudents(remainingStudents);

    // Clear the selected rows
    setSelectedRows([]);
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      width: 180,
      sorter: (a, b) => a.name.localeCompare(b.name),
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

  return (
    <>
      <div className="container px-5 py-24 w-3/4 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Assign Supervisor with respective Students
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table. Franzen you probably
            haven't heard of them man bun deep.
          </p>
        </div>
        <div className="container px-1 py-24 mx-auto">
          {Supervisor.map((boss) => {
            const updatedStudents = Students.map((worker) => {
              return {
                ...worker,
                Bossid: boss.id,
              };
            });

            return (
              <Collapse
                key={boss.id}
                defaultActiveKey={["selected", "unselected"]}
                ghost
                items={boss}
                className=" border-b-2"
              >
                <Collapse.Panel
                  header={
                    <div className="m-0 flex bg-slate-100 items-center justify-evenly gap-x-3 py-3 px-6 whitespace-nowrap ">
                      <img
                        src={boss.imgsrc}
                        alt="Boss"
                        className="w-10 h-10 rounded-full"
                      />
                      <span className="block text-gray-700 text-sm font-medium">
                        {boss.name}
                      </span>
                      <span className="block text-gray-700 text-xs">
                        {boss.department}
                      </span>
                    </div>
                  }
                  key={boss.name}
                >
                  <div style={{ height: "100%", width: "100%" }}>
                    {console.log(typeof selectedStudentsByBoss[boss.id])}

                    <div
                      style={{
                        display: selectedStudentsByBoss[boss.id]
                          ? "none"
                          : "block",
                      }}
                    >
                      <div>
                        <Table
                          className="mx-3"
                          columns={columns}
                          dataSource={updatedStudents}
                          pagination={false}
                          onChange={handleChange}
                          sortDirections={["ascend", "descend"]}
                          onRow={(record) => ({
                            onClick: () => {
                              handleRowClick(record, boss);
                            },
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
                        <Button onClick={() => handleButtonClick(boss)}>
                          Done
                        </Button>
                      </div>
                    </div>
                    <div style={{ marginTop: "10px" }}>
                      <h3>Selected Students:</h3>

                      <Table
                        columns={columns.slice(0, -1)} // Exclude the first column (checkbox column)
                        dataSource={selectedStudentsByBoss[boss.id]}
                        pagination={false}
                        onChange={handleChange}
                        sortDirections={["ascend", "descend"]}
                        onRow={(record) => ({
                          onClick: () => {
                            handleRowClick(record, boss);
                          },
                        })}
                      />
                    </div>
                  </div>
                </Collapse.Panel>
              </Collapse>
            );
          })}
        </div>
      </div>
    </>
  );
}
