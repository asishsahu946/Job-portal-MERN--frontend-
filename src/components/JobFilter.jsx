import React, { useEffect, useState } from 'react';
import { FaBriefcase, FaClock, FaDollarSign, FaMapMarkerAlt, FaBookmark } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // For navigation

function JobFilter() {
  const [filters, setFilters] = useState({
    jobTitle: '',
    location: '',
    category: [],
    jobType: [],
    experienceLevel: [],
    datePosted: [],
    salary: 0
  });
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
        console.log(data)
        setJobs(data.slice(0, 20)); // Display only 6 jobs    
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, [filters]);


  // decoding mongodb _id to time
  const decodeMongoIdToTime = (mongoId) => {
    const timestamp = parseInt(mongoId.substring(0, 8), 16); // Convert first 4 bytes (8 hex chars) to decimal
    return new Date(timestamp * 1000).toLocaleString(); // Convert to readable date
  };

  if (loading) return <p className="text-center text-gray-600">Loading jobs...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (group, value) => {
    setFilters(prev => {
      const newGroup = prev[group].includes(value)
        ? prev[group].filter(item => item !== value)
        : [...prev[group], value];
      return { ...prev, [group]: newGroup };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://jobportalmernbackend.vercel.app/filterjobs', {
        method: 'POST',
        body: JSON.stringify(filters),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) throw new Error('Network response was not ok');

      const data = await response.json();
      setJobs(data); // Update jobs list immediately
    } catch (error) {
      console.error('Error submitting filters:', error);
    }
  };

  return (
    <div>
      <div className='flex flex-col sm:flex-row gap-6 max-w-7xl mx-auto px-4 sm:px-6 py-6'>
        {/* Filter Section */}
        <div>
          <form onSubmit={handleSubmit} className='bg-[#c1e2e6] p-6 rounded-lg shadow-md w-full sm:w-80'>
            <h1 className="text-lg font-semibold mb-2">Search By Job Title</h1>
            <input
              type="text"
              name="jobTitle"
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
              placeholder='Job Title or Company'
              value={filters.jobTitle}
              onChange={handleInputChange}
            />

            <h1 className="text-lg font-semibold mt-4">Location</h1>
            <input
              type="text"
              name="location"
              placeholder='City'
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
              value={filters.location}
              onChange={handleInputChange}
            />

            <h1 className="text-lg font-semibold mt-4">Category</h1>
            <div className="space-y-2">
              {['IT', 'Commerce', 'Telecomunication', 'Education', "Software"].map((category) => (
                <div key={category} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id={category}
                    className="text-teal-600 focus:ring-teal-500"
                    checked={filters.category.includes(category)}
                    onChange={() => handleCheckboxChange('category', category)}
                  />
                  <label htmlFor={category}>{category}</label>
                </div>
              ))}
            </div>

            <h1 className="text-lg font-semibold mt-4">Job Type</h1>
            <div className="space-y-2">
              {['Full Time', 'Part Time', 'Freelance', 'Seasonal', 'Fixed_Price'].map((type) => (
                <div key={type} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id={type}
                    checked={filters.jobType.includes(type)}
                    className="text-teal-600 focus:ring-teal-500"

                    onChange={() => handleCheckboxChange('jobType', type)}
                  />
                  <label htmlFor={type}>{type}</label>
                </div>
              ))}
            </div>
            <h1 className="text-lg font-semibold mt-4">Experience Level</h1>
            <div className="space-y-2">
              {['Fresher', '1-3 Years', '3-5 Years', '5+ Years'].map((level) => (
                <div key={level} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id={level}
                    className="text-teal-600 focus:ring-teal-500"
                    checked={filters.experienceLevel.includes(level)}
                    onChange={() => handleCheckboxChange('experienceLevel', level)}
                  />
                  <label htmlFor={level}>{level}</label>
                </div>
              ))}
            </div>

            <h1 className="text-lg font-semibold mt-4">Date Posted</h1>
            <div className="space-y-2">
              {['All', 'Today', 'Last 24 hours', 'Last 7 days', 'Last 30 days'].map((date) => (
                <div key={date}>
                  <input
                    type="checkbox"
                    id={date}
                    className="text-teal-600 focus:ring-teal-500"
                    checked={filters.datePosted.includes(date)}
                    onChange={() => handleCheckboxChange('datePosted', date)}
                  />
                  <label htmlFor={date}>{date}</label>
                </div>
              ))}
            </div>

            <h1 className="text-lg font-semibold mt-4">Salary</h1>
            <input
              type="range"
              name="salary"
              min="0"
              max="1000000"
              value={filters.salary}
              onChange={handleInputChange}
              className="w-full accent-teal-600"

            />
            <label className="text-gray-600 text-sm">Salary: ${filters.salary}</label>

            <button type="submit" className="w-full bg-teal-600 text-white py-2 rounded-md mt-4">Apply</button>
          </form>
          
          <br></br>
          <div>
            <div className='relative w-full sm:w-80 rounded-lg overflow-hidden shadow-md'>
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR39-uqBf9DFeayUgZLRQzcvvU0iIfos1J69tOq1QaETXSPdcPSbi9JmQKjuWcsiHE6O4k&usqp=CAU' alt='We Are Hiring' className='w-full h-full object-cover' />
              <div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-30 flex flex-col justify-center items-center text-white p-4'>
                <h2 className='text-xl font-bold'>WE ARE HIRING</h2>
                <p className='text-sm'>Apply Today!</p>
              </div>
            </div>
          </div>
        </div>

        {/* job list section */}
        <div>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 ">
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
              <div className="grid gap-4">
                {jobs.map((job) => (
                  <div
                    key={job._id}
                    className="p-4 sm:p-6 border rounded-lg shadow-lg bg-white flex flex-col sm:flex-row justify-between items-start sm:items-center"
                  >
                    {/* Left Section */}
                    <div className="w-full sm:w-auto">
                      <span className="bg-green-100 text-green-600 text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full">
                        {decodeMongoIdToTime(job._id)}
                      </span>
                      <h3 className="text-lg sm:text-xl font-semibold mt-2">{job.jobTitle}</h3>
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
                          <FaMapMarkerAlt /> {job.formattedAddress || "Location not available"}
                        </span>
                      </div>
                    </div>

                    {/* Right Section */}
                    <div className="flex items-center gap-3 sm:gap-4 mt-3 sm:mt-0">
                      <button className="px-3 sm:px-4 py-1 sm:py-2 bg-teal-600 text-white rounded-md text-sm sm:text-base" onClick={() => navigate(`/jobdetails/${job._id}`)}>
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
        </div>
      </div>
    </div>
  );
}

export default JobFilter;