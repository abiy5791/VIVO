import React, { useState, useEffect, useMemo } from "react";
import axios from "../../api/axios";

import { useLocation } from "react-router-dom";

function OrganizationDetail() {
  const location = useLocation();
  const organization = useMemo(() => location.state || {}, [location.state]);
  console.log(organization);

  return (
    <>
      <div>
        <div class="p-8 dark:bg-slate-800 bg-white shadow mt-24 rounded-2xl lg:w-1/2 mx-auto sm:w-full border-2 border-solid border-gray-300">
          <div class="relative">
            <div class="border-4 border-indigo-300 w-40 h-40 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
              <img className="rounded-full" src={organization.logo} alt="" />
            </div>
          </div>

          <div class="mt-20 text-center border-b pb-5">
            <h1 class="text-4xl font-medium text-gray-700 dark:text-slate-300">
              {organization.name}
            </h1>
            <div class="grid grid-cols-3 text-center order-last md:order-first md:mt-4">
              <div>
                <p class="font-bold text-gray-700 text-xl dark:text-slate-300">
                  {organization.organization_type}
                </p>
                <p class="text-gray-400">Internships</p>
              </div>
              <div>
                <p class="font-bold text-gray-700 text-xl dark:text-slate-300">
                  {organization.organization_phone_number}
                </p>
                <p class="text-gray-400">Phone Number</p>
              </div>
              <div>
                <p class="font-bold text-gray-700 text-xl dark:text-slate-300">
                  {organization.registration_date}
                </p>
                <p class="text-gray-400">member since</p>
              </div>
            </div>
            <p class="font-light text-gray-600 mt-3 dark:text-slate-300">
              {organization.organization_email}
            </p>
            <p class="mt-4 text-gray-500 dark:text-slate-300">
              {organization.location_city}
            </p>
            <p class="mt-2 text-gray-500 dark:text-slate-300">
              {organization.location_state}
            </p>
          </div>
          <div class="mt-5 flex flex-col justify-center">
            <p class="font-light text-gray-600 mt-3 dark:text-slate-300">
              Linkdin:{organization.linkedin_url}
            </p>
            <p class="mt-4 text-gray-500 dark:text-slate-300">
              website:{organization.website}
            </p>
            <p class="mt-2 text-gray-500 dark:text-slate-300">
              location:{organization.location_state}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default OrganizationDetail;
