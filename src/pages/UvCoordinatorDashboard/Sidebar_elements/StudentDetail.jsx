import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "../../../api/axios";
import useAuth from "../../../hooks/useAuth";
const StudentDetail = () => {
  const [Posts, setPosts] = useState();
  const [Oranization, setOrganization] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const {
    user: { user_id, email, role, university_coordinator_id },
  } = useAuth();

  const location = useLocation();
  const { items } = location.state;
  const [studentid, setstudentid] = useState(items.id);
  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError(null);
      setstudentid(items.id);

      try {
        // Fetch  data

        const PostResponse = await axios.get(`/posts/${items.post_id}`);
        const fetchedPost = PostResponse.data || [];
        console.log(fetchedPost);
        setPosts(fetchedPost);

        console.log(fetchedPost);
        setOrganization(fetchedPost.organization);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [university_coordinator_id]);

  // console.log(Oranization);
  console.log(items);
  const handleAccept = async (items) => {
    try {
      const response = await axios.post(
        `/UvCoordniators/${user_id}/accepted/`,
        {
          student: studentid,
          coordinator: user_id,
        }
      );

      alert('"Form submitted successfully:"');
      console.log("Form submitted successfully:", response.data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
    console.log("Received values of form:");
  };

  const handleReject = async () => {
    try {
      const response = await axios.patch(`/students/${studentid}/`, {
        university: "None",
      });

      alert('"Form submitted successfully:"');
      console.log("Form submitted successfully:", response.data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
    console.log("Received values of form:");
  };
  // setPostId(items.post_id);

  // console.log(items);
  return (
    <div className="flex mx-auto">
      <div className="flex px-3 py-3 ">
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <img className="w-full" src={items.avatar} alt="User" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{items.name}</div>
            <p className="text-gray-700 text-base">
              <span>Name: </span>
              {items.first_name} {items.last_name}
            </p>
            <p className="text-gray-700 text-base">
              <span>Id: </span>
              {items.university_id_number}
            </p>
            <p className="text-gray-700 text-base">
              <span>Departemet: </span>
              {items.department}
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white w-1/2 overflow-hidden shadow rounded-lg border">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Hosting Organization
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            This is some information about the Hosting Organization.
          </p>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
          <dl className="sm:divide-y sm:divide-gray-200">
            {/* {["HostingOrgName", "email", "phoneNumber", "address"].map(
              (field, index) => (
                <div
                  key={index}
                  className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
                >
                  <dt className="text-sm font-medium text-gray-500">
                    {field === "HostingOrgName" && "Hosting Organization Name"}
                    {field === "email" && "Organization Email"}
                    {field === "phoneNumber" && "Organization Phone Number"}
                    {field === "address" && "Organization Address"}
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {field === "address"
                      ? items.hostingOrganization[field]
                          .split("\n")
                          .map((line, i) => (
                            <React.Fragment key={i}>
                              {line}
                              <br />
                            </React.Fragment>
                          ))
                      : items.hostingOrganization[field]}
                  </dd>
                </div>
              )
            )} */}
            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Organization Name
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {Oranization && Oranization.name}
              </dd>
              <dt className="text-sm font-medium text-gray-500">
                Organization Email
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {Oranization && Oranization.email}
              </dd>
              <dt className="text-sm font-medium text-gray-500">
                Organization PhoneNumber
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {Oranization && Oranization.phone_number}
              </dd>
            </div>
            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Status</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {items.status}
              </dd>
            </div>
          </dl>
          <div className="px-4 py-3 sm:px-6 flex justify-end">
            <button
              onClick={handleAccept}
              className="px-4 py-2 bg-green-500 text-white text-sm font-medium rounded-md mr-2"
            >
              Accept
            </button>
            <button
              onClick={handleReject}
              className="px-4 py-2 bg-red-500 text-white text-sm font-medium rounded-md"
            >
              Reject
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDetail;
