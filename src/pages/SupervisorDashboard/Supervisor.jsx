import  { useState } from "react";

import Sidebar from "../../partials/Supervisor/Sidebar";
import Header from "../../partials/Supervisor/Header";
import { Outlet } from "react-router-dom";

export default function Supervisor () {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
     
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <Outlet />
      </div>
    </div>
  );
}


