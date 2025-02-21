import React from "react";
import { FaSeedling, FaCog, FaShoppingBag, FaHardHat, FaHotel, FaGraduationCap, FaCoins, FaTruck } from "react-icons/fa";

const categories = [
  { name: "Agriculture", jobs: "1254 jobs", icon: <FaSeedling /> },
  { name: "Metal Production", jobs: "816 jobs", icon: <FaCog /> },
  { name: "Commerce", jobs: "2082 jobs", icon: <FaShoppingBag /> },
  { name: "Construction", jobs: "1520 jobs", icon: <FaHardHat /> },
  { name: "Hotels & Tourism", jobs: "1022 jobs", icon: <FaHotel /> },
  { name: "Education", jobs: "1496 jobs", icon: <FaGraduationCap /> },
  { name: "Financial Services", jobs: "1529 jobs", icon: <FaCoins /> },
  { name: "Transport", jobs: "1244 jobs", icon: <FaTruck /> },
];

function Category() {
  return (
    <div className="bg-teal-50 py-12 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900">Browse by Category</h2>
        <p className="text-gray-500 mt-2">
          At eu lobortis pretium tincidunt lacus ut aenean aliquet. Blandit a massa elementum id scel...
        </p>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto mt-8 ">
        {categories.map((category, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center h-52">
            <div className="text-teal-600 text-3xl mb-3">{category.icon}</div>
            <h3 className="text-lg font-semibold text-gray-800">{category.name}</h3>
            <span className="bg-teal-100 text-teal-600 text-sm px-3 py-1 rounded-full mt-2">
              {category.jobs}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;
