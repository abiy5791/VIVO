import React, { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
const SuperVisorDetail = () => {
  const [user, setUser] = useState({
    fullName: "John Doe",
    email: "johndoe@example.com",
    phoneNumber: "(123) 456-7890",
    address: "123 Main St\nAnytown, USA 12345",
    password: "password123",
    image: "https://tailwindcss.com/img/card-top.jpg", // Add image property
  });

  const [isEditing, setIsEditing] = useState(false);
  const inputRefs = useRef([]);

  useEffect(() => {
    if (isEditing) {
      inputRefs.current[0].focus();
    }
  }, [isEditing]);
  const location = useLocation();
  const { item } = location.state;
  console.log(item);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    setUser((prevState) => ({ ...prevState, [name]: value }));

    const input = inputRefs.current[index];
    input.style.width = `${input.scrollWidth}px`;
  };

  const handleSave = () => {
    setIsEditing(false);
    // Here you can add any save logic, such as sending the updated data to a server
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setUser((prevState) => ({ ...prevState, image: reader.result }));
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex">
      <div className=" flex px-3 py-3">
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <img
            className="w-full"
            src={item.avatar} // Use user image here
            alt="User"
          />
          {isEditing && (
            <div>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="mt-2"
              />
            </div>
          )}
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white w-1/2 overflow-hidden shadow rounded-lg border">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            User Profile
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            This is some information about the user.
          </p>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
          <dl className="sm:divide-y sm:divide-gray-200">
            {["fullName", "email", "phoneNumber", "address", "password"].map(
              (field, index) => (
                <div
                  key={index}
                  className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
                >
                  <dt className="text-sm font-medium text-gray-500">
                    {field === "fullName" && "Full name"}
                    {field === "email" && "Email address"}
                    {field === "phoneNumber" && "Phone number"}
                    {field === "address" && "Address"}
                    {field === "password" && "Password"}
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {isEditing ? (
                      <textarea
                        ref={(el) => (inputRefs.current[index] = el)}
                        name={field}
                        value={user[field]}
                        onChange={(e) => handleChange(e, index)}
                        className="mt-1 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        rows={field === "address" ? 3 : 1}
                      />
                    ) : (
                      <span>
                        {field === "address"
                          ? user[field].split("\n").map((line, i) => (
                              <React.Fragment key={i}>
                                {line}
                                <br />
                              </React.Fragment>
                            ))
                          : user[field]}
                      </span>
                    )}
                  </dd>
                </div>
              )
            )}
          </dl>
          <div className="px-4 py-3 sm:px-6 flex justify-end">
            {isEditing ? (
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded-md"
              >
                Save
              </button>
            ) : (
              <button
                onClick={handleEdit}
                className="px-4 py-2 bg-gray-300 text-gray-700 text-sm font-medium rounded-md"
              >
                Edit
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuperVisorDetail;
