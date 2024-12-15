
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CounselorPage from "./pages/CounselorPage";
import AppointmentPage from "./pages/AppointmentPage";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./components/Login";
import "@fortawesome/fontawesome-free/css/all.min.css";


function App() {
  return (
    <Router>
      <Navbar />
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/counselors" element={<CounselorPage />} />
          <Route path="/appointments" element={<AppointmentPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/Login" element={<Login />} />

        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
