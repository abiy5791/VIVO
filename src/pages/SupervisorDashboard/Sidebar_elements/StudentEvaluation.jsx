import React, { useEffect, useState } from "react";
import axios from "../../../api/axios";
import useAuth from "../../../hooks/useAuth";

export default function StudentEvaluation() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isEditable, setIsEditable] = useState(true);
  const [isSaved, setIsSaved] = useState(false);

  const {
    user: { user_id, email, role, university_supervisor_id },
  } = useAuth();

  // Utility function to generate a random number between min and max, inclusive
  const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  // Utility function to calculate the total score and grade
  const calculateTotalAndGrade = (student) => {
    const total =
      parseFloat(student.document) +
      parseFloat(student.presentation) +
      parseFloat(student.firmEvaluation) +
      parseFloat(student.supervisorEvaluation);

    // Define grading logic based on total score (adjust as needed)
    let grade;
    if (total >= 85) {
      grade = "A";
    } else if (total >= 75) {
      grade = "B";
    } else if (total >= 65) {
      grade = "C";
    } else if (total >= 50) {
      grade = "D";
    } else {
      grade = "F";
    }

    return { total, grade };
  };

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get(
          `UvSupervisors/${university_supervisor_id}/students`
        );
        const fetchedData = response.data || [];

        // Update firmEvaluation with random numbers between 10 and 25 and calculate total and grade
        const updatedData = fetchedData.map((student) => {
          const firmEvaluation = getRandomNumber(10, 25);
          const { total, grade } = calculateTotalAndGrade({
            ...student,
            firmEvaluation,
          });

          return {
            ...student,
            firmEvaluation,
            total,
            grade,
          };
        });

        setData(updatedData);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [university_supervisor_id]);

  const handleInputChange = (id, field, value) => {
    const updatedData = data.map((student) => {
      if (student.id === id) {
        const updatedStudent = { ...student, [field]: value };
        const { total, grade } = calculateTotalAndGrade(updatedStudent);
        return { ...updatedStudent, total, grade };
      }
      return student;
    });
    setData(updatedData);
  };

  const handleSaveClick = async () => {
    if (isEditable) {
      setIsEditable(false);
      setIsSaved(true);

      // Send each student's data individually
      data.forEach(async (student) => {
        const evaluationData = {
          document_evaluation: parseFloat(student.document),
          presentation_evaluation: parseFloat(student.presentation),
          firm_evaluation: parseFloat(student.firmEvaluation),
          supervisor_evaluation: parseFloat(student.supervisorEvaluation),
          supervisor: user_id, // Change to appropriate value
          applicant: student.id, // Change to appropriate value
        };

        console.log(evaluationData);

        try {
          const response = await axios.post(
            `UvSupervisors/${user_id}/evaluations/`,
            evaluationData
          );
          console.log(
            "POST request successful for student:",
            student.id,
            response
          );
        } catch (error) {
          console.error(
            "Error submitting data for student:",
            student.id,
            error
          );
        }
      });
    } else {
      setIsEditable(true);
      setIsSaved(false);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="w-full flex mx-auto justify-center flex-col items-center">
      <div className="bg-gray-900 w-full">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Name
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Id
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Document (Max 20)
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Presentation (Max 35)
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Firm Evaluation (Max 25)
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                ASTU Supervisor Evaluation (Max 20)
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Total
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Grade
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((student) => (
              <tr key={student.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      <img
                        className="h-10 w-10 rounded-full"
                        src={student.avatar}
                        alt={student.first_name}
                      />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">
                        {student.first_name}
                      </div>
                      <div className="text-sm text-gray-500">
                        {student.email}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {student.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <input
                    type="number"
                    id={`document_${student.id}`}
                    inputMode="numeric"
                    pattern="[0-9]*"
                    max="20"
                    className={`w-full text-sm text-gray-900 no-spin rounded ${
                      isSaved ? "border-none" : "border-slate-300"
                    }`}
                    defaultValue={student.document}
                    onChange={(e) =>
                      handleInputChange(student.id, "document", e.target.value)
                    }
                    disabled={!isEditable}
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <input
                    type="number"
                    id={`presentation_${student.id}`}
                    inputMode="numeric"
                    pattern="[0-9]*"
                    max="35"
                    className={`w-full text-sm text-gray-900 no-spin rounded ${
                      isSaved ? "border-none" : "border-slate-300"
                    }`}
                    defaultValue={student.presentation}
                    onChange={(e) =>
                      handleInputChange(
                        student.id,
                        "presentation",
                        e.target.value
                      )
                    }
                    disabled={!isEditable}
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {student.firmEvaluation}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <input
                    type="number"
                    id={`supervisor_${student.id}`}
                    inputMode="numeric"
                    pattern="[0-9]*"
                    max="20"
                    className={`w-full text-sm text-gray-900 no-spin rounded ${
                      isSaved ? "border-none" : "border-slate-300"
                    }`}
                    defaultValue={student.supervisorEvaluation}
                    onChange={(e) =>
                      handleInputChange(
                        student.id,
                        "supervisorEvaluation",
                        e.target.value
                      )
                    }
                    disabled={!isEditable}
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {student.total}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {student.grade}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="w-full">
        <button
          className="mt-7 mr-12 px-4 py-2 bg-blue-500 text-white font-semibold rounded float-right"
          onClick={handleSaveClick}
        >
          {isEditable ? "Save" : "Edit"}
        </button>
      </div>
    </div>
  );
}
