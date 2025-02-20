const Testimonials = () => {
    return (
      <div className="py-16 px-6 bg-teal-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900">Testimonials from Our Customers</h2>
          <p className="text-gray-600 mt-2">
            At eu lobortis pretium tincidunt amet lacus ut aenean aliquet. Blandit a massa elementum id...
          </p>
  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            <div className="bg-white p-6 rounded-lg shadow-md text-left">
              <div className="flex items-center">
                <span className="text-yellow-500 text-lg">⭐⭐⭐⭐⭐</span>
              </div>
              <h3 className="text-xl font-semibold mt-2">Amazing services</h3>
              <p className="text-gray-600 mt-2">
                Metus faucibus sed turpis lectus feugiat tincidunt. Rhoncus sed tristique in dolor.
              </p>
              <div className="flex items-center mt-4">
                <img
                  src="https://via.placeholder.com/50"
                  alt="Marco Kihn"
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <p className="font-semibold">Marco Kihn</p>
                  <p className="text-gray-500 text-sm">Happy Client</p>
                </div>
              </div>
            </div>
  
            <div className="bg-white p-6 rounded-lg shadow-md text-left">
              <div className="flex items-center">
                <span className="text-yellow-500 text-lg">⭐⭐⭐⭐⭐</span>
              </div>
              <h3 className="text-xl font-semibold mt-2">Everything simple</h3>
              <p className="text-gray-600 mt-2">
                Mus etiam et vestibulum venenatis viverra ut. Elit morbi bibendum ullamcorper augue faucibus.
              </p>
              <div className="flex items-center mt-4">
                <img
                  src="https://via.placeholder.com/50"
                  alt="Kristin Hester"
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <p className="font-semibold">Kristin Hester</p>
                  <p className="text-gray-500 text-sm">Happy Client</p>
                </div>
              </div>
            </div>
  
            <div className="bg-white p-6 rounded-lg shadow-md text-left">
              <div className="flex items-center">
                <span className="text-yellow-500 text-lg">⭐⭐⭐⭐⭐</span>
              </div>
              <h3 className="text-xl font-semibold mt-2">Awesome, thank you!</h3>
              <p className="text-gray-600 mt-2">
                Rhoncus sed tristique in dolor. Mus etiam et vestibulum venenatis viverra ut.
              </p>
              <div className="flex items-center mt-4">
                <img
                  src="https://via.placeholder.com/50"
                  alt="Zion Cisneros"
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <p className="font-semibold">Zion Cisneros</p>
                  <p className="text-gray-500 text-sm">Happy Client</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Testimonials;
  