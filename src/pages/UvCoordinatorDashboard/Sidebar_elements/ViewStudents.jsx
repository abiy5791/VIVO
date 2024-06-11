import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../../api/axios";
import useAuth from "../../../hooks/useAuth";
export default function ViewStudents() {
  const [Students, setStud] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const {
    user: { user_id, email, role, university_coordinator_id },
  } = useAuth();

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError(null);

      try {
        // Fetch assignments data

        // Fetch students data
        const studResponse = await axios.get(
          `UvCoordniators/${university_coordinator_id}/students`
        );
        const fetchedStud = studResponse.data || [];
        console.log(fetchedStud);
        setStud(fetchedStud);

        // const students = updateStudentsData(fetchedStud);
        // setStudentsList(students);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [university_coordinator_id]);

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

  const navigate = useNavigate();
  function handleClick(item) {
    console.log(item);
    navigate("/UvCoordinator/ViewStudents/StudentDetail", {
      state: { items: item },
    });
  }

  return (
    <div className="max-w-screen-xl mb-12 mt-12 mx-auto px-4 md:px-8">
      <div className="items-start justify-between md:flex">
        <div className="flex flex-col text-center w-full mb-8">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Dear University Coordinator
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Please confirm the enrollment of the following students at your
            university and verify their respective departments:
          </p>
        </div>
        {/* <div className="mt-3 md:mt-0">
          <a
            href="javascript:void(0)"
            className="inline-block px-4 py-2 text-white duration-150 font-medium bg-indigo-600 rounded-lg hover:bg-indigo-500 active:bg-indigo-700 md:text-sm"
          >
            Add member
          </a>
        </div> */}
      </div>
      <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
        <table className="w-full table-auto text-sm text-left">
          <thead className="bg-gray-50 text-gray-600 font-medium border-b">
            <tr>
              <th className="py-3 px-6">Studnet Name</th>
              <th className="py-3 px-6">Id</th>
              <th className="py-3 px-6">Year</th>
              <th className="py-3 px-6">departemet</th>

              <th className="py-3 px-6">Action</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 divide-y">
            {Students.map((item, idx) => (
              <tr key={idx} onClick={() => handleClick(item)}>
                <td className="flex items-center gap-x-3 py-3 px-6 whitespace-nowrap">
                  <img src={item.avatar} className="w-10 h-10 rounded-full" />
                  <div>
                    <span className="block text-gray-700 text-sm font-medium">
                      {item.first_name} {item.last_name}
                    </span>
                    <span className="block text-gray-700 text-xs">
                      {item.email}
                    </span>
                    <span className="block text-gray-700 text-xs">
                      {item.phone_number}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {item.university_id_number}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{item.batch}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {item.department}
                </td>

                <td className="text-right px-6 whitespace-nowrap">
                  <a
                    href="javascript:void()"
                    className="py-2 px-3 font-medium text-indigo-600 hover:text-indigo-500 duration-150 hover:bg-gray-50 rounded-lg"
                  >
                    Edit
                  </a>
                  <button
                    href="javascript:void()"
                    className="py-2 leading-none px-3 font-medium text-red-600 hover:text-red-500 duration-150 hover:bg-gray-50 rounded-lg"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
