import React, { useState, useEffect, useMemo } from "react";
import axios from "../../api/axios";
import { useLocation } from "react-router-dom";

function UvCoordinatorDetail() {
  const location = useLocation();
  const uvCoordinator = useMemo(() => location.state || {}, [location.state]);
  console.log(uvCoordinator);

  return (
    <>
      <div>
        <div class="p-8 dark:bg-slate-800 bg-white shadow mt-24 rounded-2xl lg:w-1/2 mx-auto sm:w-full border-2 border-solid border-gray-300">
          <div class="relative">
            <div class="border-4 border-indigo-300 w-40 h-40 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
              <img
                className="rounded-full"
                src="https://cdn.theforage.com/pajrEXDRjHWNANStX/profile/picture-679a2"
                alt=""
              />
            </div>
          </div>

          <div class="mt-20 text-center border-b pb-5">
            <h1 class="text-4xl font-medium text-gray-700 dark:text-slate-300">
              {uvCoordinator.first_name} {uvCoordinator.last_name}
            </h1>
            <span class="font-light text-gray-500 dark:text-slate-300"></span>
            <span class="font-light text-gray-500 dark:text-slate-300">
              {uvCoordinator.email}
            </span>
            <div class="grid grid-cols-3 text-center order-last md:order-first md:mt-4">
              <div>
                <p class="font-bold text-gray-700 text-xl dark:text-slate-300">
                  {" "}
                  {uvCoordinator.date_joined}
                </p>
              </div>
              <div>
                <p class="font-bold text-gray-700 text-xl dark:text-slate-300">
                  {uvCoordinator.phone_number}
                </p>
              </div>
              <div>
                <p class="font-bold text-gray-700 text-xl dark:text-slate-300">
                  <a target="_blank" href={uvCoordinator.legal_document}>
                    view Link
                  </a>{" "}
                  {}
                </p>
              </div>
            </div>
            <p class="font-light text-gray-600 mt-3 dark:text-slate-300">
              Adama, Ethiopia
            </p>
            <p class="mt-4 text-gray-500 dark:text-slate-300">
              {uvCoordinator.university}
            </p>
          </div>
          <div class="mt-5 flex flex-col justify-center">
            <p class="text-gray-600 text-center font-light lg:px-16 dark:text-slate-300">
              An artist of considerable range, Ryan — the name taken by
              Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs
              and records all of his own music, giving it a warm, intimate feel
              with a solid groove structure. An artist of considerable range.
            </p>
            <button class="text-indigo-500 py-2 px-4  font-medium mt-4">
              Show more
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default UvCoordinatorDetail;
