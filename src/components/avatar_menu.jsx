import { useEffect, useRef, useState } from "react";
import useAuth from "../hooks/useAuth";
import axios from "../api/axios";

// Avtar with darpdown menu
export default () => {
  const [state, setState] = useState(false);
  const profileRef = useRef();
  const { logout, user } = useAuth();

  const getDashboardPath = (role) => {
    const paths = {
      organization: "/organization",
      admin: "/admin_dashboard",
      applicant: "/applicant_dashboard",
      student: "/applicant_dashboard",
      system_coordinator: "/System_Coordinator",
      university_coordinator: "/UvCoordinator",
      university_supervisor: "/Supervisor",
    };
    return paths[role] || "/";
  };

  const navigation = [
    { title: "Profile", path: "profile" },
    { title: "Settings", path: "settings" },
    { title: "Dashboard", path: getDashboardPath(user.role) },
  ];

  const getUserEndpoint = (user) => {
    if (user.admin_id) {
      return `/admins/${user.admin_id}`;
    } else if (user.system_coordinator_id) {
      return `/systemCoordinators/${user.system_coordinator_id}`;
    } else if (user.student_id) {
      return `/students/${user.student_id}`;
    } else if (user.organization_id) {
      return `/organizations/${user.organization_id}`;
    } else if (user.applicant_id) {
      return `/applicants/${user.applicant_id}`;
    } else if (user.university_coordinator_id) {
      return `/UvCoordinators/${user.university_coordinator_id}`;
    } else if (user.university_supervisor_id) {
      return `/UvSupervisors/${user.university_supervisor_id}`;
    } else {
      return null;
    }
  };

  const [userAvatar, setUserAvatar] = useState([]);
  useEffect(() => {
    const endpoint = getUserEndpoint(user);

    if (endpoint) {
      axios
        .get(endpoint)
        .then((response) => {
          setUserAvatar(response.data);
        })
        .catch((error) => {
          console.error("Error fetching user data: ", error);
        });
    }
  }, [user]);
  console.log(userAvatar);

  return (
    <div className="relative border-t lg:border-none">
      <div className="">
        <button
          ref={profileRef}
          className="hidden w-10 h-10 outline-none rounded-full ring-offset-2 ring-indigo-400 lg:focus:ring-2 lg:block"
          onClick={() => setState(!state)}
        >
          {userAvatar ? (
            <img
              className="w-full h-full rounded-full"
              src={
                userAvatar.avatar ||
                userAvatar.logo ||
                "https://cdn.theforage.com/pajrEXDRjHWNANStX/profile/picture-679a2"
              }
              alt="Avatar"
            />
          ) : (
            <img
              src={
                "https://cdn.theforage.com/pajrEXDRjHWNANStX/profile/picture-679a2"
              }
              className="w-full h-full rounded-full"
            />
          )}
        </button>
      </div>
      <ul
        className={`bg-white dark:bg-slate-800 top-14 right-0 mt-6 space-y-6 lg:absolute lg:border lg:rounded-md lg:w-52 lg:shadow-md lg:space-y-0 lg:mt-0 ${
          state ? "" : "lg:hidden"
        }`}
      >
        {navigation.map((item, idx) => (
          <li key={idx}>
            <a
              className="block text-gray-600 dark:text-slate-300 hover:text-gray-900 lg:hover:bg-gray-50 lg:p-3"
              href={item.path}
            >
              {item.title}
            </a>
          </li>
        ))}

        <button
          onClick={logout}
          className="block w-full text-justify text-gray-600 dark:text-slate-300 hover:text-gray-900 border-t py-3 lg:hover:bg-gray-50 lg:p-3"
        >
          Logout
        </button>
      </ul>
    </div>
  );
};
