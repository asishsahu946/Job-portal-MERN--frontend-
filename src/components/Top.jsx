import React from 'react';

const TopCompanies = () => {
  const companies = [
    { name: 'Instagram', jobs: 8, description: 'Elit velit mauris aliquam est diam. Leo sagittis consectetur diam morbi erat', icon: '📷' },
    { name: 'Tesla', jobs: 18, description: 'At pellentesque amet odio cras imperdiet nisl. Ac magna aliquet massa leo', icon: '⚡' },
    { name: 'McDonald’s', jobs: 12, description: 'Odio aliquet tellus tellus maecenas. Faucibus in viverra venenatis phasellus', icon: '🍔' },
    { name: 'Apple', jobs: 9, description: 'Et odio sem tellus ultrices posuere consequat. Tristique nascetur sapien', icon: '🍏' }
  ];

  return (
    <div className="bg-[#eaf7f7] py-10 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900">Top Company</h2>
        <p className="text-gray-600 mt-2">At eu lobortis pretium tincidunt amet lacus ut aenean aliquet. Blandit a massa elementum</p>
      </div>
      <div className="max-w-7xl mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {companies.map((company, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-3xl text-black">{company.icon}</div>
            <h3 className="mt-4 text-lg font-semibold text-gray-900">{company.name}</h3>
            <p className="text-gray-600 mt-2">{company.description}</p>
            <span className="inline-block mt-4 bg-teal-100 text-teal-600 px-4 py-1 rounded-full text-sm">{company.jobs} open jobs</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopCompanies;
