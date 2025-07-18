import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import RootLayout from "./layouts/RootLayout";

import About from "./pages/about/About";
import JobVacanciesPage from "./pages/job-vacancies/JobVacanciesPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <RootLayout>
              <Home />
            </RootLayout>
          }
        />
        <Route
          path="/find-a-job"
          element={
            <RootLayout>
              <JobVacanciesPage />
            </RootLayout>
          }
        />
        <Route
          path="/about-us"
          element={
            <RootLayout>
              <About />
            </RootLayout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
