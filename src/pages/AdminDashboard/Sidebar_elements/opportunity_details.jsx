import Opportunity_details_component from "../../../components/AdminComponents/opportunity_details_component";
import Header from "../../../partials/Admin/Header";
import Sidebar from "../../../partials/Admin/Sidebar";
import React, { useState } from "react";

export default () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main className="px-1 py-1">
          <Opportunity_details_component />
        </main>
      </div>
    </div>
  );
};
