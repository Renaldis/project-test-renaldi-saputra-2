import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import RootLayout from "./layouts/RootLayout";

import About from "./pages/about/About";
import JobVacanciesPage from "./pages/job-vacancies/JobVacanciesPage";
import { JobsProvider } from "./contexts/JobsProvider";
import AuthProvider from "./contexts/AuthProvider";
import Login from "./components/auth/Login";
import DashboardOverview from "./pages/admin/pages/dashboard/DashboardOverview";
import AdminLayout from "./layouts/AdminLayout";
import ListJobPage from "./pages/admin/pages/listJobs/ListJobPage";
import CreateJobPage from "./pages/admin/pages/createJob/CreateJobPage";
import ProfilePage from "./pages/admin/pages/profile/ProfilePage";
import EditJobPage from "./pages/admin/pages/editJob/EditJobPage";
import { ThemeProvider } from "./contexts/ThemeProvider";

function App() {
  return (
    <ThemeProvider>
      <JobsProvider>
        <AuthProvider>
          <Router>
            <Routes>
              <Route path="/" element={<RootLayout />}>
                <Route index element={<Home />} />
                <Route path="find-a-job" element={<JobVacanciesPage />} />
                <Route path="about-us" element={<About />} />
              </Route>

              <Route path="/auth/login" element={<Login />} />

              <Route path="/dashboard" element={<AdminLayout />}>
                <Route index element={<DashboardOverview />} />
                <Route path="list-job-vacancies" element={<ListJobPage />} />
                <Route path="add-job-vacancies" element={<CreateJobPage />} />
                <Route
                  path="edit-job-vacancies/:id"
                  element={<EditJobPage />}
                />
                <Route path="profile" element={<ProfilePage />} />
              </Route>
            </Routes>
          </Router>
        </AuthProvider>
      </JobsProvider>
    </ThemeProvider>
  );
}

export default App;
