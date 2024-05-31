import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import "./charts/ChartjsConfig";
import "./css/style.css";

import AddSupervisor from "./pages/UvCoordinatorDashboard/Sidebar_elements/AddSupervisor";
import Admin_home from "./pages/AdminDashboard/admin_home";
import AdminDashboard from "./pages/AdminDashboard/Dashboard";
import ApplicantDashboard from "./pages/ApplicantDashboard/applicant_dashboard";
import Applicant_profile_component from "./components/ApplicantComponents/applicant_profile_component";
import ApplicantSignup from "./pages/AuthPages/ApplicantSignup";
import Applicants_list from "./pages/AdminDashboard/Sidebar_elements/applicants_list";
import ApplicationDetails from "./components/OrganizationComponents/Application_Details";
import ApplyComponent from "./components/apply_component";
import Apply_form from "./components/apply_form";
import AssignSupervisor from "./pages/UvCoordinatorDashboard/Sidebar_elements/AssignSupervisor";
import Certifiy_Applicants from "./components/SystemCoordinatorComponents/Certifiy_Applicants";
import Confetti from "./components/confetti";
import CreateTask from "./components/CreateTask";
import Dashboard from "./pages/AdminDashboard/Dashboard";
import EditAssignamet from "./pages/UvCoordinatorDashboard/Sidebar_elements/EditAssignament";
import ErrorAlert from "./components/Error_alert";
import ErrorPage from "./pages/error_page";
import Evaluated_applicants from "./pages/SystemCoordinatorDashboard/Sidebar_elements/Evaluated_applicants";
import Home from "./pages/Home";
import Internship_opportunity_card from "./pages/AdminDashboard/Sidebar_elements/internship_opportunity_card";
import Internship_post_card from "./pages/SystemCoordinatorDashboard/Sidebar_elements/Internship_post_card";
import InternshipPostCard from "./pages/OrganizationDashboard/Sidebar_elements/Internship_post_card";
import LandingPage from "./pages/landingpage";
import ListOfStudents from "./pages/SupervisorDashboard/Sidebar_elements/ListOfStudents";
import LoadingIndicator from "./components/loading_indicator";
import Modal from "./components/modal";
import Organization from "./pages/OrganizationDashboard/Organization";
import Organization_Add_post from "./components/OrganizationComponents/Organization_Add_post";
import Organization_Applicants from "./pages/OrganizationDashboard/Sidebar_elements/Organization_Applicants";
import Organization_Applications from "./pages/OrganizationDashboard/Sidebar_elements/Organization_Applications";
import OrganizationDashboard from "./pages/OrganizationDashboard/OrganizationDashboard";
import Organization_Post_details_component from "./components/OrganizationComponents/Organization_Post_details_component";
import Organization_Submitted_tasks from "./pages/OrganizationDashboard/Sidebar_elements/Organization_Submitted_tasks";
import Organizations_list from "./pages/AdminDashboard/Sidebar_elements/organizations_list";
import Opportunity_details_component from "./components/AdminComponents/opportunity_details_component";
import Posted_opportunity_details from "./pages/Posts/posted_opportunity_details";
import Progress_page from "./components/OrganizationComponents/Progress_page";
import ProLayout from "./pages/AdminDashboard/pro_layout";
import RequireAuth from "./components/RequireAuth";
import Settings_component from "./components/ApplicantComponents/settings_component";
import SignIn from "./pages/AuthPages/SignIn";
import SignUp from "./pages/AuthPages/SignUp";
import SignupCompany from "./pages/AuthPages/Signup_company";
import SignupStudent from "./pages/AuthPages/Signup_student";
import StudentDetails from "./pages/SupervisorDashboard/Sidebar_elements/StudentDetails";
import StudentEvaluation from "./pages/SupervisorDashboard/Sidebar_elements/StudentEvaluation";
import StudentList from "./pages/SupervisorDashboard/Sidebar_elements/StudentList";
import SuccessPage from "./components/success_page";
import SuccessfulAlert from "./components/successful_alert";
import Supervisor from "./pages/SupervisorDashboard/Supervisor";
import SuperVisorDetail from "./pages/UvCoordinatorDashboard/Sidebar_elements/SuperVisorDetail";
import SyscooDashboard from "./pages/SystemCoordinatorDashboard/SyscooDashboard";
import Syscoordinator_Application_detail from "./components/SystemCoordinatorComponents/Syscoordinator_Application_detail";
import Syscoordinator_Applications from "./pages/SystemCoordinatorDashboard/Sidebar_elements/Syscoordinator_Applications";
import Syscoordinator_Applicants from "./pages/SystemCoordinatorDashboard/Sidebar_elements/Syscoordinator_Applicants";
import Syscoordinator_post_detail from "./components/SystemCoordinatorComponents/Syscoordinator_post_detail";
import SystemCoordinator from "./pages/SystemCoordinatorDashboard/SystemCoordinator";
import SystemCoordinator_add_post from "./components/SystemCoordinatorComponents/SystemCoordinator_add_post";
import Task from "./components/ApplicantComponents/task";
import Unauthorized from "./components/Unauhtorized";
import UvCoordDashboard from "./pages/UvCoordinatorDashboard/UvCoordDashboard";
import ViewStudents from "./pages/UvCoordinatorDashboard/Sidebar_elements/ViewStudents";
import ViewSuperVisors from "./pages/UvCoordinatorDashboard/Sidebar_elements/ViewSuperVisors";
import WaitApproval from "./components/wait_approval";
import WelcomePage from "./pages/AuthPages/Welcome";
import StudentDetail from "./pages/UvCoordinatorDashboard/Sidebar_elements/StudentDetail";

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
          <Route path="apply" element={<Apply_form />} />
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
            {/* <Route
              path="Applicant_Progress"
              element={<System_Coordinator_Progress_page />}
            /> */}
          </Route>
          <Route path="Evaluated_applicant" element={<ProLayout />}>
            <Route index element={<Evaluated_applicants />} />
            <Route
              path="Certifiy_Applicants"
              element={<Certifiy_Applicants />}
            />
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
            {/* <Route
              path="Application_Details"
              element={<Application_detail />}
            /> */}
          </Route>
          <Route path="Applicants" element={<ProLayout />}>
            <Route index element={<Organization_Applicants />} />
            <Route path="Applicant_progress" element={<Progress_page />} />
          </Route>
          <Route path="Submitted_Tasks" element={<ProLayout />}>
            <Route index element={<Organization_Submitted_tasks />} />
            {/* <Route
              path="Submitted_Tasks_Detail"
              element={<Organization_Submitted_Tasks_Detail />}
            /> */}
          </Route>
        </Route>

        <Route exact path="/UvCoordinator" element={<UvCoordDashboard />}>
          <Route index element={<ViewStudents />} />
          <Route path="AddSupervisor" element={<ProLayout />}>
            <Route index element={<AddSupervisor />} />
          </Route>
          <Route path="ViewSupervisors" element={<ProLayout />}>
            <Route index element={<ViewSuperVisors />} />
            <Route path="Supervisordetail" element={<SuperVisorDetail />} />
          </Route>
          <Route path="AssignSupervisor" element={<ProLayout />}>
            <Route index element={<AssignSupervisor />} />
            <Route path="Editassignament" element={<EditAssignamet />} />
          </Route>

          <Route path="ViewStudents" element={<ProLayout />}>
            <Route index element={<ViewStudents />} />
            <Route path="StudentDetail" element={<StudentDetail />} />
          </Route>
        </Route>

        <Route exact path="/Supervisor" element={<Supervisor />}>
          <Route index element={<ListOfStudents />} />
          <Route path="ListOfStudents" element={<ProLayout />}>
            <Route index element={<ListOfStudents />} />
            <Route path="StudentListDetail" element={<StudentList />}>
              <Route index element={<StudentDetails />} />
            </Route>
          </Route>
          <Route path="EvaluateStudent" element={<StudentEvaluation />} />
        </Route>

        <Route path="/create_task" element={<CreateTask />} />

        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/pagenotfound" element={<ErrorPage />} />
        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="/signup_company" element={<SignupCompany />} />
        <Route path="/signup_student" element={<SignupStudent />} />
        <Route path="/modal" element={<Modal />} />
        <Route path="/wait" element={<WaitApproval />} />
        <Route path="/loading" element={<LoadingIndicator />} />
        <Route path="/successalert" element={<SuccessfulAlert />} />
        <Route path="/alert" element={<ErrorAlert />} />
        <Route path="/successpage" element={<SuccessPage />} />
        <Route path="/confetti" element={<Confetti />} />
        <Route path="/unauthorized" element={<Unauthorized />} />
      </Routes>
    </>
  );
}

export default App;
