import Header from "../../../partials/Admin/Header";
import Sidebar from "../../../partials/Admin/Sidebar";
import DashboardCard07 from "../../../partials/Admin/dashboard/DashboardCard07";
import React, { useState } from "react";

export default () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main className="px-10 py-10">
          <div className="grid grid-cols-12 gap-6">
            <DashboardCard07 />
          </div>
        </main>
      </div>
    </div>
  );
};
