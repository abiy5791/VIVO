import React, { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";

const StudentDetail = () => {
  const location = useLocation();
  const { items } = location.state;

  //   console.log(items);
  //   const items = {
  //     avatar:
  //       "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
  //     name: "Liam James",
  //     email: "liamjames@example.com",
  //     phone_number: "+1 (555) 000-000",
  //     departemet: "Software engineer",
  //     id: "ugr/1974/12",
  //     year: 2,
  //     internshipDescription: "Full Stack Hospital Management system",
  //     status: "accepted",
  //     hostingOrganization: {
  //       HostingOrgName: "INSA",
  //       email: "INSA@example.com",
  //       phoneNumber: "(123) 456-7890",
  //       address: "123 Main St\nAnytown, USA 12345",
  //     },
  //   };

  const handleAccept = () => {
    console.log("Accepted");
  };

  const handleReject = () => {
    console.log("Rejected");
  };

  return (
    <div className="flex mx-auto">
      <div className="flex px-3 py-3 ">
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <img className="w-full" src={items.avatar} alt="User" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{items.name}</div>
            <p className="text-gray-700 text-base">
              <span>Name: </span>
              {items.name}
            </p>
            <p className="text-gray-700 text-base">
              <span>Id: </span>
              {items.id}
            </p>
            <p className="text-gray-700 text-base">
              <span>Departemet: </span>
              {items.departemet}
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
            {["HostingOrgName", "email", "phoneNumber", "address"].map(
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
            )}
            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Internship Description
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {items.internshipDescription}
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
