import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import "./css/style.css";

import "./charts/ChartjsConfig";

// Import pages
import Dashboard from "./pages/AdminDashboard/Dashboard";
import LandingPage from "./pages/landingpage";
import ApplicantDashboard from "./pages/ApplicantDashboard/applicant_dashboard";
import SignIn from "./pages/AuthPages/SignIn";
import SignUp from "./pages/AuthPages/SignUp";
import Applicant_profile_component from "./components/ApplicantComponents/applicant_profile_component";
import Applicants_list from "./pages/AdminDashboard/Sidebar_elements/applicants_list";
import Organizations_list from "./pages/AdminDashboard/Sidebar_elements/organizations_list";
import Internship_opportunity_card from "./pages/AdminDashboard/Sidebar_elements/internship_opportunity_card";
import Opportunity_details from "./pages/AdminDashboard/Sidebar_elements/opportunity_details";
import Posted_opportunity_details from "./pages/Posts/posted_opportunity_details";
import Home from "./pages/Home";
import Settings_component from "./components/ApplicantComponents/settings_component";
import Task from "./components/ApplicantComponents/task";

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
        </Route>
        <Route path="task" element={<Task />} />
        <Route path="/applicants_list" element={<Applicants_list />} />
        <Route path="/organizations_list" element={<Organizations_list />} />
        <Route
          path="/internship_opportunities"
          element={<Internship_opportunity_card />}
        />
        <Route
          path="/internship_opportunity_details"
          element={<Opportunity_details />}
        />

        <Route exact path="/admin_dashboard" element={<Dashboard />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
