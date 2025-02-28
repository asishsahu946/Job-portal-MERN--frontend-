import React from "react";
import { FaBriefcase, FaUser, FaBuilding } from 'react-icons/fa';


const HeroSection = () => {
  return (
    <>
      <div className="bg-[#111827] text-white py-20 h-[75vh]">

        <div className="text-center mt-16 px-6">
          <h1 className="text-4xl md:text-6xl font-bold">
            Find Your Dream Job Today!
          </h1>
          <p className="text-gray-300 mt-4">
            Connecting Talent with Opportunity: Your Gateway to Career Success
          </p>
          {/* <div className="mt-10 flex flex-col md:flex-row justify-center max-w-[900px] mx-auto">
            <input
              type="text"
              placeholder="Job Title or Company"
              className="w-full md:w-1/4 px-4 py-6 text-gray-900 border border-gray-300 md:rounded-l-xl"
            />
            <select
              className="w-full md:w-1/4 px-4 py-3 text-gray-900 border border-gray-300"
            >
              <option>Select Location</option>
              <option>Phulbani</option>
              <option>Kolkata</option>
            </select>
            <select
              className="w-full md:w-1/4 px-4 py-3 text-gray-900 border border-gray-300"
            >
              <option>Select Category</option>
              <option>Web Development</option>
              <option>Software</option>
            </select>
            <button className="bg-[#31c4ae] px-6 py-3 text-white hover:bg-green-600 md:rounded-r-md">
              Search Job
            </button>
          </div> */}

          {/* Statistics */}
          <div className="mt-16 flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-12">
            <div className="flex items-center space-x-2 sm:space-x-4">
              <div className="flex items-center justify-center w-8 h-8 sm:w-12 sm:h-12 bg-[#31c4ae] text-white rounded-full">
                <FaBriefcase className="text-xs sm:text-lg" />
              </div>
              <div>
                <h2 className="text-lg font-bold sm:text-3xl">25,850</h2>
                <p className="text-gray-300 text-xs sm:text-base">Jobs</p>
              </div>
            </div>

            <div className="flex items-center space-x-2 sm:space-x-4">
              <div className="flex items-center justify-center w-8 h-8 sm:w-12 sm:h-12 bg-[#31c4ae] text-white rounded-full">
                <FaUser className="text-xs sm:text-lg" />
              </div>
              <div>
                <h2 className="text-lg font-bold sm:text-3xl">10,250</h2>
                <p className="text-gray-300 text-xs sm:text-base">Candidates</p>
              </div>
            </div>

            <div className="flex items-center space-x-2 sm:space-x-4">
              <div className="flex items-center justify-center w-8 h-8 sm:w-12 sm:h-12 bg-[#31c4ae] text-white rounded-full">
                <FaBuilding className="text-xs sm:text-lg" />
              </div>
              <div>
                <h2 className="text-lg font-bold sm:text-3xl">18,400</h2>
                <p className="text-gray-300 text-xs sm:text-base">Companies</p>
              </div>
            </div>
          </div>




        </div>
      </div>

    </>
  );
};

export default HeroSection;
