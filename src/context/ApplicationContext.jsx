// ApplicationContext.js
import React, { createContext, useContext, useState, useEffect } from "react";
import Image01 from "../images/user-36-05.jpg";
import axios from "axios";
import useAuth from "../hooks/useAuth"; // Assuming you have an AuthContext that provides the organization ID and user details

const ApplicationContext = createContext();

export const useApplication = () => {
  return useContext(ApplicationContext);
};

export const ApplicationProvider = ({ children }) => {
  const {
    user: { organization_id },
  } = useAuth(); // Assuming organizationId is available from useAuth()
  const [applications, setApplications] = useState([]);
  const [selectedApplication, setSelectedApplication] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchApplications = async () => {
      if (organization_id) {
        try {
          const res = await axios.get(
            `organizations/${organization_id}/applications`
          );
          console.log("API Response:", res);
          const filteredApplications = res.data.map((application) => ({
            id: application.id.toString(),
            applicant_id: application.applicant.id,
            image: Image01,
            name: `${application.applicant.first_name} ${application.applicant.last_name}`,
            email: application.applicant.email,
            phone_number: application.applicant.phone_number,
            gender: application.applicant.gender,
            post_id: application.post.id,
            post: application.post.title,
            status: application.status,
            skills: application.skills,
            cover_letter: application.cover_letter,
            availability: application.availability,
            other: application.other,
            application_date: new Date(
              application.created
            ).toLocaleDateString(),
          }));
          setApplications(filteredApplications);
        } catch (error) {
          console.error("Error fetching applications:", error);
        }
      }
    };
    fetchApplications();
  }, [organization_id]);

  return (
    <ApplicationContext.Provider
      value={{
        applications,
        loading,
      }}
    >
      {children}
    </ApplicationContext.Provider>
  );
};
