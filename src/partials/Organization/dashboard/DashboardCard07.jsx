import Image01 from "../../../images/user-36-05.jpg";
import Image02 from "../../../images/user-36-06.jpg";
import Image03 from "../../../images/user-36-07.jpg";
import Image04 from "../../../images/user-36-08.jpg";
import Image05 from "../../../images/user-36-09.jpg";
import load_bar from "../../../images/load-bar.png";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import axios from "../../../api/axios";
import { useState, useEffect } from "react";

function DashboardCard07() {
  const {
    user: { organization_id },
  } = useAuth();
  const [applications, setApplications] = useState([]);

  const fetchApplications = async (organization_id) => {
    try {
      const res = await axios.get(
        `organizations/${organization_id}/applications`
      );
      const filteredApplications = res.data
        .filter((application) => application.status === "accepted")
        .map((application) => ({
          id: application.id.toString(),
          applicant_id: application.applicant.id,
          image: Image01,
          name: `${application.applicant.first_name} ${application.applicant.last_name}`,
          email: application.applicant.email,
          phone_number: application.applicant.phone_number,
          gender: application.applicant.gender,
          post_id: application.post.id,
          post: application.post.title,
          spent: new Date(application.created).toLocaleDateString(),
          status: load_bar,
          progress: "25%",
        }));
      setApplications(filteredApplications);
    } catch (error) {
      console.error("Error fetching applications:", error);
    }
  };

  useEffect(() => {
    if (organization_id) {
      fetchApplications(organization_id);
    }
  }, [organization_id]);

  const customers = [
    {
      id: "0",
      image: Image01,
      name: "Alex Shatov",
      email: "alexshatov@gmail.com",
      Post: "data structure",
      spent: "Jun 6, 2024",
      status: load_bar,
      progress: "25%",
    },
    {
      id: "1",
      image: Image02,
      name: "Philip Harbach",
      email: "philip.h@gmail.com",
      Post: "machin learning",
      spent: "May 6, 2024",
      status: load_bar,
      progress: "25%",
    },
    {
      id: "2",
      image: Image03,
      name: "Mirko Fisuk",
      email: "mirkofisuk@gmail.com",
      Post: "web dev",
      spent: "Jun 6, 2024",
      status: load_bar,
      progress: "50%",
    },
    {
      id: "3",
      image: Image04,
      name: "Olga Semklo",
      email: "olga.s@cool.design",
      Post: "artifical intelligence",
      spent: "May 7, 2024",
      status: load_bar,
      progress: "25%",
    },
    {
      id: "4",
      image: Image05,
      name: "Burak Long",
      email: "longburak@gmail.com",
      Post: "artifical intelligence",
      spent: "May 6, 2024",
      status: load_bar,
      progress: "75%",
    },
  ];
  return (
    <div class="rounded-lg mb-4 overflow-auto border">
      <table class="items-center w-full bg-transparent border-collapse">
        <thead>
          <tr>
            <th class="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap">
              Name
            </th>
            <th class="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap">
              Post
            </th>
            <th class="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap">
              Date
            </th>
            <th class="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap">
              Email
            </th>
            <th class="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap">
              Progress
            </th>
            <th class="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap min-w-140-px"></th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-100">
          {applications.map((application) => {
            return (
              <tr
                id={application.id}
                key={application.id}
                class="text-gray-500"
              >
                <td class="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">
                  <Link to="Applicant_progress" state={application}>
                    <div className="flex items-center">
                      <div className="w-10 h-10 shrink-0 mr-2 sm:mr-3">
                        <img
                          className="rounded-full"
                          src={application.image}
                          width="40"
                          height="40"
                          alt={application.name}
                        />
                      </div>
                      <div className="font-medium text-slate-800 dark:text-slate-100">
                        {application.name}
                      </div>
                    </div>
                  </Link>
                </td>
                <td class="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">
                  {application.post}
                </td>
                <td class="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">
                  {application.spent}
                </td>
                <td class="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">
                  {application.email}
                </td>
                <td class="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                  <div class="flex items-center">
                    <span class="mr-2 text-xs font-medium">
                      {application.progress}
                    </span>
                    <div class="relative w-full">
                      <div class="w-full bg-gray-200 rounded-sm h-2">
                        <div
                          class="bg-cyan-600 h-2 rounded-sm w-32"
                          //   style="width: 30%"
                        ></div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default DashboardCard07;
