import { useNavigate } from "react-router-dom";
export default function ViewStudents() {
  const Students = [
    {
      avatar:
        "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
      name: "Liam James",
      email: "liamjames@example.com",
      phone_number: "+1 (555) 000-000",
      departemet: "Software engineer",
      id: "ugr/1974/12",
      year: 2,

      internshipDescription: "Full Stack Hospital Management system",
      status: "accepted",
      hostingOrganization: {
        HostingOrgName: "INSA",
        email: "INSA@example.com",
        phoneNumber: "(123) 456-7890",
        address: "123 Main St\nAnytown, USA 12345",
      },
    },
    {
      avatar: "https://randomuser.me/api/portraits/men/86.jpg",
      name: "Olivia Emma",
      email: "oliviaemma@example.com",
      phone_number: "+1 (555) 000-000",
      departemet: "Product designer",
      id: "ugr/1974/12",
      year: 4,

      internshipDescription: "Full Stack Hospital Management system",
      status: "accepted",
      hostingOrganization: {
        HostingOrgName: "INSA",
        email: "INSA@example.com",
        phoneNumber: "(123) 456-7890",
        address: "123 Main St\nAnytown, USA 12345",
      },
    },
    {
      avatar: "https://randomuser.me/api/portraits/women/79.jpg",
      name: "William Benjamin",
      email: "william.benjamin@example.com",
      phone_number: "+1 (555) 000-000",
      departemet: "Front-end developer",
      id: "ugr/1974/12",
      year: 5,
      internshipDescription: "Full Stack Hospital Management system",
      status: "accepted",
      hostingOrganization: {
        HostingOrgName: "Addis Way",
        email: "Addisway@example.com",
        phoneNumber: "(123) 456-7890",
        address: "123 Main St\nAnytown, USA 12345",
      },
      intern_place: "Addis Way",
    },
    {
      avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
      name: "Henry Theodore",

      email: "henrytheodore@example.com",
      phone_number: "+1 (555) 000-000",
      departemet: "Laravel engineer",
      id: "ugr/1974/12",
      year: 4,
      intern_place: "OBN",
      internshipDescription: "Full Stack Hospital Management system",
      status: "accepted",
      hostingOrganization: {
        HostingOrgName: "OBN",
        email: "OBN@example.com",
        phoneNumber: "(123) 456-7890",
        address: "123 Main St\nAnytown, USA 12345",
      },
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1439911767590-c724b615299d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
      name: "Amelia Elijah",
      email: "amelia.elijah@example.com",
      phone_number: "+1 (555) 000-000",
      departemet: "Open source manager",
      id: "ugr/1974/12",
      year: 4,

      internshipDescription: "Full Stack Hospital Management system",
      status: "accepted",
      hostingOrganization: {
        HostingOrgName: "Commercial Bank",
        email: "Commercial Bank@example.com",
        phoneNumber: "(123) 456-7890",
        address: "123 Main St\nAnytown, USA 12345",
      },
    },
  ];

  const navigate = useNavigate();
  function handleClick(item) {
    console.log(item);
    navigate("/UvCoordinator/ViewStudents/StudentDetail", {
      state: { items: item },
    });
  }

  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-8">
      <div className="items-start justify-between md:flex">
        <div className="max-w-lg">
          <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
            Team members
          </h3>
          <p className="text-gray-600 mt-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div className="mt-3 md:mt-0">
          <a
            href="javascript:void(0)"
            className="inline-block px-4 py-2 text-white duration-150 font-medium bg-indigo-600 rounded-lg hover:bg-indigo-500 active:bg-indigo-700 md:text-sm"
          >
            Add member
          </a>
        </div>
      </div>
      <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
        <table className="w-full table-auto text-sm text-left">
          <thead className="bg-gray-50 text-gray-600 font-medium border-b">
            <tr>
              <th className="py-3 px-6">Studnet Name</th>
              <th className="py-3 px-6">Id</th>
              <th className="py-3 px-6">Year</th>
              <th className="py-3 px-6">departemet</th>
              <th className="py-3 px-6">Organization</th>

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
                      {item.name}
                    </span>
                    <span className="block text-gray-700 text-xs">
                      {item.email}
                    </span>
                    <span className="block text-gray-700 text-xs">
                      {item.phone_number}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{item.id}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.year}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {item.departemet}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {item.hostingOrganization.HostingOrgName}
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
