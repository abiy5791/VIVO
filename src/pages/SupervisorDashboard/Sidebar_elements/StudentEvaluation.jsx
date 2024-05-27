import React, { useState } from "react";

const initialStudents = [
  {
    id: 123456,
    name: "Jane Cooper",
    email: "jane.cooper@example.com",
    avatar: "https://i.pravatar.cc/150?img=1",
    document: 18,
    presentation: 30,
    firmEvaluation: 20,
    supervisorEvaluation: 16,
    total: 84,
    grade: "A",
  },
  {
    id: 789012,
    name: "John Doe",
    email: "john.doe@example.com",
    avatar: "https://i.pravatar.cc/150?img=2",
    document: 16,
    presentation: 28,
    firmEvaluation: 18,
    supervisorEvaluation: 17,
    total: 79,
    grade: "B",
  },
  {
    id: 345678,
    name: "Alice Smith",
    email: "alice.smith@example.com",
    avatar: "https://i.pravatar.cc/150?img=3",
    document: 19,
    presentation: 32,
    firmEvaluation: 21,
    supervisorEvaluation: 18,
    total: 90,
    grade: "A",
  },
  {
    id: 901234,
    name: "Bob Brown",
    email: "bob.brown@example.com",
    avatar: "https://i.pravatar.cc/150?img=4",
    document: 17,
    presentation: 29,
    firmEvaluation: 19,
    supervisorEvaluation: 16,
    total: 81,
    grade: "B",
  },
];

export default function StudentEvaluation() {
  const [students, setStudents] = useState(initialStudents);
  const [isEditable, setIsEditable] = useState(true);
  const [isSaved, setIsSaved] = useState(false);

  const handleInputChange = (id, field, value) => {
    const updatedStudents = students.map((student) => {
      if (student.id === id) {
        const validatedValue = Math.min(parseFloat(value), getMaxValue(field));
        const updatedStudent = {
          ...student,
          [field]: validatedValue,
        };
        const total = calculateTotal(updatedStudent);
        const grade = calculateGrade(total);
        return { ...updatedStudent, total, grade };
      }
      return student;
    });
    setStudents(updatedStudents);
  };

  const getMaxValue = (field) => {
    switch (field) {
      case "document":
        return 20;
      case "presentation":
        return 35;
      case "firmEvaluation":
        return 25;
      case "supervisorEvaluation":
        return 20;
      default:
        return 100;
    }
  };

  const calculateTotal = ({
    document,
    presentation,
    firmEvaluation,
    supervisorEvaluation,
  }) => {
    return (
      document * 1 +
      presentation +
      firmEvaluation +
      supervisorEvaluation
    ).toFixed(2);
  };

  const calculateGrade = (total) => {
    const totalInt = parseFloat(total);
    if (totalInt >= 90) return "A";
    if (totalInt >= 80) return "B";
    if (totalInt >= 70) return "C";
    if (totalInt >= 60) return "D";
    return "F";
  };

  const handleSaveClick = () => {
    if (isEditable) {
      setIsEditable(false);
      setIsSaved(true);
    } else {
      setIsEditable(true);
      setIsSaved(false);
    }
  };

  return (
    <div className="w-full flex mx-auto justify-center flex-col items-center">
      <div className="bg-gray-900">
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
            {students.map((student) => (
              <tr key={student.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      <img
                        className="h-10 w-10 rounded-full"
                        src={student.avatar}
                        alt={student.name}
                      />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">
                        {student.name}
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
                    inputMode="numeric"
                    pattern="[0-9]*"
                    max="20"
                    className={`w-full text-sm text-gray-900 no-spin rounded ${
                      isSaved ? "border-none" : "border-slate-300"
                    }`}
                    defaultValue={student.document}
                    onChange={(e) =>
                      handleInputChange(
                        student.id,
                        "document",
                        Math.min(parseFloat(e.target.value), 20)
                      )
                    }
                    disabled={!isEditable}
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <input
                    type="number"
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
                        Math.min(parseFloat(e.target.value), 35)
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
                        Math.min(parseFloat(e.target.value), 20)
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
      <div className="w-full ">
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
