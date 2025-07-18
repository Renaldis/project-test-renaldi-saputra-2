import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import RootLayout from "./layouts/RootLayout";
import Jobs from "./pages/jobs/Jobs";
import About from "./pages/about/About";

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
              <Jobs />
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
