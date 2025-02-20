import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Jobs from "./pages/Jobs";
import JobDetails from "./pages/JobDetails";
import Category from "./pages/Category";
import Footer from "./components/Footer";
import Page from "./pages/Page";
import Review from "./pages/Review";
import News from "./pages/News";



function App() {
   return (
    <div>
      <Navbar />
    <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/jobs" element={<Jobs/>} />
        <Route path="/jobdetails/:id" element={<JobDetails/>} />
    </Routes>
    <Jobs/>
    <Category/>
    <Page/>
    <Review/>
    <News/>
    <Footer/>
    </div>
  );
}

export default App;