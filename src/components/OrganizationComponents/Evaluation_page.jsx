import React from "react";

const Evaluation_page = () => {
  // Placeholder data for applicant's progress
  const applicant = {
    name: "John Doe",
    email: "johndoe@example.com",
    applicationStatus: "Shortlisted",
    interviewDate: "2024-05-10",
    feedback: "The applicant performed well in the interview.",
    internshipOffered: true,
    internshipStartDate: "2024-06-01",
    internshipDuration: "3 months",
    internshipCompensation: "$1000/month",
    internshipTasks: ["Task 1", "Task 2", "Task 3"],
  };

  return (
    <div className="container">
      <div class="mb-6 h-1 w-full bg-neutral-200 dark:bg-neutral-600">
        <div class="h-1 bg-green-500" style="width: 25%"></div>
      </div>
      <div class="mb-6 h-1 w-full bg-neutral-200 dark:bg-neutral-600">
        <div class="h-1 bg-primary-400" style="width: 50%"></div>
      </div>
      <div class="mb-6 h-1 w-full bg-neutral-200 dark:bg-neutral-600">
        <div class="h-1 bg-yellow-500" style="width: 75%"></div>
      </div>
      <div class="h-1 w-full bg-neutral-200 dark:bg-neutral-600">
        <div class="h-1 bg-red-600" style="width: 100%"></div>
      </div>
      <h2 className="page-title">{applicant.name}</h2>
      <div className="applicant-details">
        <p className="detail">Email: {applicant.email}</p>
        <p className="detail">
          Application Status: {applicant.applicationStatus}
        </p>
        {applicant.applicationStatus === "Shortlisted" && (
          <p className="detail">Interview Date: {applicant.interviewDate}</p>
        )}
        {applicant.feedback && (
          <p className="detail">Feedback: {applicant.feedback}</p>
        )}
        {applicant.internshipOffered && (
          <div className="internship-offer">
            <h3 className="sub-heading">Internship Offer</h3>
            <p className="detail">
              Start Date: {applicant.internshipStartDate}
            </p>
            <p className="detail">Duration: {applicant.internshipDuration}</p>
            <p className="detail">
              Compensation: {applicant.internshipCompensation}
            </p>
            <h4 className="sub-heading">Internship Tasks:</h4>
            <ul className="task-list">
              {applicant.internshipTasks.map((task, index) => (
                <li className="task" key={index}>
                  {task}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Evaluation_page;
