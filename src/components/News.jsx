const NewsBlogSection = () => {
    const articles = [
      {
        id: 1,
        category: "News",
        date: "30 March 2024",
        title: "Revitalizing Workplace Morale: Innovative Tactics For Boosting Employee Engagement In 2024",
        image: "https://", 
        link: "#",
      },
      {
        id: 2,
        category: "Blog",
        date: "30 March 2024",
        title: "How To Avoid The Top Six Most Common Job Interview Mistakes",
        image: "https://",
        link: "#",
      },
    ];
  
    return (
      <div className="py-16 px-6 ">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">News and Blog</h2>
              <p className="text-gray-600 mt-2">
                Metus faucibus sed turpis lectus feugiat tincidunt. Rhoncus sed tristique in dolor
              </p>
            </div>
            <a href="#" className="text-[#62a686] font-medium hover:underline">
              View all
            </a>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            {articles.map((article) => (
              <div key={article.id} className="bg-white rounded-lg shadow-md">
                <div className="relative">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-60 object-cover rounded-t-lg"
                  />
                  <div className="absolute inset-0 bg-black/10 backdrop-blur-md rounded-t-lg"></div>
                  <span className="absolute top-3 left-3 bg-[#62a686] text-white text-sm px-3 py-1 rounded-full">
                    {article.category}
                  </span>
                </div>
  
                <div className="p-4">
                  <p className="text-gray-500 text-sm">{article.date}</p>
                  <h3 className="text-lg font-semibold text-gray-900 mt-1">
                    {article.title}
                  </h3>
                  <a href={article.link} className="text-[#62a686] font-medium mt-3 flex items-center">
                    Read more <span className="ml-1">→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default NewsBlogSection;
  