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
                  src="https://t3.ftcdn.net/jpg/03/70/29/26/360_F_370292674_QS5nA0bJgyRD6VzYycTQdSWhhSHQJbQZ.jpg"
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
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCQuDq7TzuUGybaswyKXiF-rP4zQTAal940w&s"
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
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR28-fSgdPxfrUozj3LyC27jnRzmbhj4oIp0g&s"
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
  