import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import "./css/style.css";

import "./charts/ChartjsConfig";

// Import pages
import Dashboard from "./pages/AdminDashboard/Dashboard";
import SyscooDashboard from "./pages/SystemCoordinatorDashboard/SyscooDashboard";
import OrganizationDashboard from "./pages/OrganizationDashboard/OrganizationDashboard";
import Organization from "./pages/OrganizationDashboard/Organization";
import LandingPage from "./pages/landingpage";
import ApplicantDashboard from "./pages/ApplicantDashboard/applicant_dashboard";
import SignIn from "./pages/AuthPages/SignIn";
import SignUp from "./pages/AuthPages/SignUp";
import Applicant_profile_component from "./components/ApplicantComponents/applicant_profile_component";
import Applicants_list from "./pages/AdminDashboard/Sidebar_elements/applicants_list";
import Organizations_list from "./pages/AdminDashboard/Sidebar_elements/organizations_list";
import Internship_opportunity_card from "./pages/AdminDashboard/Sidebar_elements/internship_opportunity_card";
import Internship_post_card from "./pages/SystemCoordinatorDashboard/Sidebar_elements/Internship_post_card";
import Syscoordinator_post_detail from "./components/SystemCoordinatorComponents/Syscoordinator_post_detail";
import Application_detail from "./components/OrganizationComponents/Application_detail";
import Syscoordinator_Application_detail from "./components/SystemCoordinatorComponents/Syscoordinator_Application_detail";
import Evaluation_page from "./components/OrganizationComponents/Evaluation_page";
import Posted_opportunity_details from "./pages/Posts/posted_opportunity_details";
import Home from "./pages/Home";
import Settings_component from "./components/ApplicantComponents/settings_component";
import Task from "./components/ApplicantComponents/task";
import Admin_home from "./pages/AdminDashboard/admin_home";
import Opportunity_details_component from "./components/AdminComponents/opportunity_details_component";
import Organization_Post_details_component from "./components/OrganizationComponents/Organization_Post_details_component";
import ProLayout from "./pages/AdminDashboard/pro_layout";
import SystemCoordinator from "./pages/SystemCoordinatorDashboard/SystemCoordinator";
import Organization_Applications from "./pages/OrganizationDashboard/Sidebar_elements/Organization_Applications";
import Organization_Applicants from "./pages/OrganizationDashboard/Sidebar_elements/Organization_Applicants";
import Syscoordinator_Applications from "./pages/SystemCoordinatorDashboard/Sidebar_elements/Syscoordinator_Applications";
import Syscoordinator_Applicants from "./pages/SystemCoordinatorDashboard/Sidebar_elements/Syscoordinator_Applicants";
import Uv_coordinator_dashboard from "./pages/UniversityCoordinator/Uv_coordinator_dashboard";
import List_of_Suprvisor from "./pages/UniversityCoordinator/Sidebar_elementsUVCoordinator/List_of_Supervisor"
function App() {
  const location = useLocation();

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />}>
          <Route index element={<LandingPage />} />
          <Route path="applicant_dashboard" element={<ApplicantDashboard />} />
          
          <Route
            path="posted_opportunity_details"
            element={<Posted_opportunity_details />}
          />
          <Route
            path="applicant_profile"
            element={<Applicant_profile_component />}
          />
          <Route path="settings" element={<Settings_component />} />
          <Route
            path="internship_opportunities"
            element={<Internship_opportunity_card />}
          />
        </Route>
        <Route path="task" element={<Task />} />

        <Route exact path="/admin_dashboard" element={<Dashboard />}>
          <Route index element={<Admin_home />} />
          <Route path="applicants_list" element={<Applicants_list />} />
          <Route path="organizations_list" element={<Organizations_list />} />

          <Route path="internship_opportunities" element={<ProLayout />}>
            <Route index element={<Internship_opportunity_card />} />
            <Route
              path="internship_opportunity_details"
              element={<Opportunity_details_component />}
            />
          </Route>
        </Route>
        <Route exact path="/System_Coordinator" element={<SyscooDashboard />}>
          <Route index element={<SystemCoordinator />} />
          <Route path="internship_posts" element={<ProLayout />}>
            <Route index element={<Internship_post_card />} />
            <Route
              path="internship_posts_details"
              element={<Syscoordinator_post_detail />}
            />
          </Route>
          <Route path="Applications" element={<ProLayout />}>
            <Route index element={<Syscoordinator_Applications />} />
            <Route
              path="Application_Details"
              element={<Syscoordinator_Application_detail />}
            />
          </Route>
          <Route path="Applicants" element={<ProLayout />}>
            <Route index element={<Syscoordinator_Applicants />} />
            <Route path="Applicant_evaluation" element={<Evaluation_page />} />
          </Route>
        </Route>
        <Route exact path="/Organization" element={<OrganizationDashboard />}>
          <Route index element={<Organization />} />
          <Route path="internship_posts" element={<ProLayout />}>
            <Route index element={<Internship_post_card />} />
            <Route
              path="internship_posts_details"
              element={<Organization_Post_details_component />}
            />
          </Route>
          <Route path="Applications" element={<ProLayout />}>
            <Route index element={<Organization_Applications />} />
            <Route
              path="Application_Details"
              element={<Application_detail />}
            />
          </Route>
          <Route path="Applicants" element={<ProLayout />}>
            <Route index element={<Organization_Applicants />} />
            <Route path="Applicant_evaluation" element={<Evaluation_page />} />
          </Route>
        </Route>
        <Route path="uv_coordinator" element={<Uv_coordinator_dashboard />} />
        <Route path="list_of_supervisor" element={<List_of_Suprvisor />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
  ``;
}

export default App;
