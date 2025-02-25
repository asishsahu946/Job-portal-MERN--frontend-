import React, { useEffect, useState } from "react";
import { FaBriefcase, FaClock, FaDollarSign, FaMapMarkerAlt, FaBookmark } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // For navigation

function Job() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Navigation hook

  useEffect(() => {

    const fetchJobs = async () => {
      try {
        const response = await fetch("https://jobportalmernbackend.vercel.app/getjobs");
        if (!response.ok) {
          throw new Error("Failed to fetch jobs");
        }
        const data = await response.json();
        setJobs(data); // Display all jobs   
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  // Decoding MongoDB _id to timestamp
  const decodeMongoIdToTime = (mongoId) => {
    const timestamp = parseInt(mongoId.substring(0, 8), 16); // Convert first 4 bytes (8 hex chars) to decimal
    return new Date(timestamp * 1000).toLocaleString(); // Convert to readable date
  };

  if (loading) return <p className="text-center text-gray-600">Loading jobs...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6">
      {/* Header with "View All" */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
        <h2 className="text-2xl sm:text-3xl font-bold">Recent Jobs Available</h2>
        <p
          className="text-teal-600 underline cursor-pointer text-sm sm:text-base mt-2 sm:mt-0"
          onClick={() => navigate("/all-jobs")} // Navigate on click
        >
          View All
        </p>
      </div>
      <p className="text-gray-500 text-sm sm:text-base mb-4">Find your dream job now!</p>

      {/* Job Listings */}
      {jobs.length === 0 ? (
        <p className="text-center text-gray-500">No jobs available</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <div
              key={job._id}
              className="p-4 sm:p-6 border rounded-lg shadow-lg bg-white flex flex-col"
            >
              {/* Job Details */}
              <div className="flex flex-col">
                <span className="bg-green-100 text-green-600 text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full">
                  {decodeMongoIdToTime(job._id)}
                </span>
                <h3 className="text-lg sm:text-xl font-semibold mt-2">{job.jobTitle}</h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  {job.company?.companyName || "Unknown Company"}
                </p>

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
                    <FaMapMarkerAlt /> {job.formattedAddress || "Location not available"}
                  </span>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex justify-between items-center mt-3">
                <button className="px-3 sm:px-4 py-1 sm:py-2 bg-teal-600 text-white rounded-md text-sm sm:text-base">
                  Job Details
                </button>
                <button className="text-gray-500 hover:text-gray-700 text-sm sm:text-base">
                  <FaBookmark />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Job;
