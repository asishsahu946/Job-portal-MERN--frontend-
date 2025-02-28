import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Jobs from "./pages/Jobs";
import JobDetails from "./pages/JobDetails";
import Footer from "./components/Footer";
import Form from './components/Form';
import Register from "./components/Register";
import Login from "./components/Login";
import Admin from './pages/Admin';
import ProtectedRoute from "./components/ProtectedRoutes"; // Import the ProtectedRoute component
import EditJobs from './components/EditJobs'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/jobdetails/:id" element={<JobDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protect /admin route */}
        <Route element={<ProtectedRoute />}>
          <Route path="/admin/:id" element={<Admin />} />
        <Route path="/postjob/:id" element={<Form />} />
        <Route path="/editjob/:id" element={<EditJobs />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;