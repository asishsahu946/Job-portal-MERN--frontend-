import React from "react";

function HomePage() {
    return (
        <div>
            <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-8 items-center">

                <div
                    className="relative bg-gray-300 h-64 rounded-lg md:h-80 bg-cover bg-center"
                    style={{ backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaZfOPpD8TES9LYS2S_KF057K5ptvLP479cQ&s')" }}
                >
                    {/* Blur overlay */}
                    <div className="absolute inset-0 bg-black/30 backdrop-blur-md rounded-lg"></div>
                </div>


                <div>
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                        Good Life Begins With <br /> A Good Company
                    </h1>
                    <p className="text-gray-600 mt-4">
                        Ullamcorper malesuada varius bibendum mi arcu arcu. Vitae at amet et
                        dolor. Ligula egestas convallis   ullam magni, aperiam incidunt quam temporibus eius recusandae quis mollitia voluptatem ducimus et expedita cupiditate praesentium?
                    </p>
                    <div className="mt-6 flex gap-4">
                        <button className="bg-teal-600 text-white px-5 py-2 rounded-md">
                            Search Job
                        </button>
                        <button className="text-teal-600 underline px-5 py-2 rounded-md">
                            Learn more
                        </button>

                    </div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
                {[
                    { number: "12k+", title: "Clients Worldwide", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque voluptates quas officia non minus dolorem vel." },
                    { number: "20k+", title: "Active Resume", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque voluptates quas officia non minus dolorem vel." },
                    { number: "18k+", title: "Companies", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque voluptates quas officia non minus dolorem vel." }
                ].map((stat, index) => (
                    <div key={index} className=" p-8 rounded-lg text-left">
                        <h2 className="text-4xl font-bold text-teal-600">{stat.number}</h2>
                        <h3 className="text-lg font-semibold text-gray-900 mt-2">{stat.title}</h3>
                        <p className="text-gray-600 mt-2">{stat.desc}</p>
                    </div>
                ))}
            </div>



            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="relative text-white p-10 bg-black/10 backdrop-blur-lg rounded-lg flex flex-col justify-center items-start h-80 md:h-96 before:absolute before:inset-0 before:bg-cover before:bg-center before:blur-lg before:rounded-lg"
                    style={{ backgroundImage: "url('https://img.freepik.com/premium-vector/news-concept-internet-tv-information-people-listen-reading-technology-media-update-modern-person-using-gadgets-multimedia-recent-vector-scene_543062-4012.jpg')" }}>
                    <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
                    <div className="relative z-10">
                        <h2 className="text-2xl md:text-3xl font-bold">
                            Create A Better Future For Yourself
                        </h2>
                        <p className="text-gray-300 mt-2">
                            At eu lobortis pretium tincidunt amet faucibus aenean aliquet.
                        </p>
                        <button className="bg-teal-600 text-white px-5 py-2 rounded-md mt-4">
                            Search Job
                        </button>
                    </div>
                </div>
            </div>



        </div>
    );
}

export default HomePage;
