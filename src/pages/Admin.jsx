import React, { useEffect, useState } from "react";
import {
  FaBriefcase,
  FaClock,
  FaDollarSign,
  FaMapMarkerAlt,
  FaBookmark,
} from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom"; // For navigation

function Admin() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [jobsPerPage] = useState(10); // Number of jobs per page
  const navigate = useNavigate(); // Navigation hook
  const {id: userId} = useParams();

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch(`http://localhost:4000/jobs/userjobs/${userId}`);
        if (!response.ok) {
          throw new Error("Failed to fetch jobs");
        }
        const data = await response.json();
        setJobs(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  // Logout function
  const handleLogout = async () => {
    try {
      // Send a request to the backend to logout (optional)
      await fetch("http://localhost:4000/users/logout", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`, // Send the token for validation
        },
      });

      // Remove the token from localStorage
      localStorage.removeItem("token");

      // Redirect to the login page
      navigate("/login");
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  // Delete job function
  function handleDeleteJob(jobId) {
    fetch(`http://localhost:4000/jobs/deletejobs/${jobId}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          // Job deleted successfully, update the list of jobs
          setJobs((prevJobs) => prevJobs.filter((job) => job._id !== jobId));
        } else {
          console.error("Failed to delete job");
        }
      })
      .catch((error) => {
        console.error("Error deleting job:", error);
      });
  }

  // Decoding MongoDB _id to time
  const decodeMongoIdToTime = (mongoId) => {
    const timestamp = parseInt(mongoId.substring(0, 8), 16); // Convert first 4 bytes (8 hex chars) to decimal
    return new Date(timestamp * 1000).toLocaleString(); // Convert to readable date
  };

  // Pagination logic
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Go to next page
  const nextPage = () => {
    if (currentPage < Math.ceil(jobs.length / jobsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Go to previous page
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  if (loading)
    return <p className="text-center text-gray-600">Loading jobs...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div>
      <div className="bg-black py-10 text-white text-center">
        <h1 className="text-3xl font-bold">User Page</h1>
      </div>
 <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 ">
      {/* Header with "View All" and Logout Button */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
        <h2 className="text-2xl sm:text-3xl font-bold">
          All Jobs List
        </h2>
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate(`/postjob/${userId}`)}
            className="px-4 py-2 bg-green-600 text-white rounded-md text-sm sm:text-base hover:bg-green-700"
          >
            Post Jobs
          </button>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-600 text-white rounded-md text-sm sm:text-base hover:bg-red-700"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Job Listings */}
      {jobs.length === 0 ? (
        <p className="text-center text-gray-500">No jobs available</p>
      ) : (
        <div className="grid gap-4">
          {currentJobs.map((job) => (
            <div
              key={job._id}
              className="p-4 sm:p-6 border rounded-lg shadow-lg bg-white flex flex-col sm:flex-row justify-between items-start sm:items-center"
            >
              {/* Left Section */}
              <div className="w-full sm:w-auto">
                <span className="bg-green-100 text-green-600 text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full">
                  {decodeMongoIdToTime(job._id)}
                </span>
                <h3 className="text-lg sm:text-xl font-semibold mt-2">
                  {job.jobTitle}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  {job.company?.companyName || "Unknown Company"}
                </p>

                {/* Job Details */}
                <div className="flex flex-wrap items-center gap-2 sm:gap-4 mt-2 text-gray-500 text-xs sm:text-sm">
                  <span className="flex items-center gap-1">
                    <FaBriefcase /> {job.category || "Unknown"}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaClock /> {job.jobType || "Full Time"}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaDollarSign /> {job.salary || "Not Disclosed"}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaMapMarkerAlt />{" "}
                    {job.formattedAddress || "Location not available"}
                  </span>
                </div>
              </div>

              {/* Right Section */}
              <div className="flex items-center gap-3 sm:gap-4 mt-3 sm:mt-0">
                <button
                  className="px-3 sm:px-4 py-1 sm:py-2 bg-blue-600 text-white rounded-md text-sm sm:text-base"
                  onClick={() => navigate(`/editjob/${job._id}`)}
                >
                  Edit
                </button>
                <button
                  className="px-3 sm:px-4 py-1 sm:py-2 bg-red-600 text-white rounded-md text-sm sm:text-base"
                  onClick={() => handleDeleteJob(job._id)}
                >
                  Delete
                </button>
                <button className="text-gray-500 hover:text-gray-700 text-sm sm:text-base">
                  <FaBookmark />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Pagination Controls */}
      <div className="flex justify-center mt-6">
        <nav>
          <ul className="flex list-style-none gap-2">
            <li>
              <button
                onClick={prevPage}
                disabled={currentPage === 1}
                className={`px-4 py-2 rounded-md ${
                  currentPage === 1
                    ? "bg-gray-300 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700 text-white"
                }`}
              >
                Previous
              </button>
            </li>
            <li>
              <button
                onClick={nextPage}
                disabled={currentPage === Math.ceil(jobs.length / jobsPerPage)}
                className={`px-4 py-2 rounded-md ${
                  currentPage === Math.ceil(jobs.length / jobsPerPage)
                    ? "bg-gray-300 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700 text-white"
                }`}
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    </div>
   
  );
}

export default Admin;