import React from "react";
import { FaPhoneAlt, FaEnvelope, FaClock, FaMapMarkerAlt } from "react-icons/fa";

const ContactPage = () => {
  return (
    <> <br></br> <br></br>
    <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between p-6 sm:p-10 bg-white space-y-10 md:space-y-0 md:space-x-10">
      {/* Left Section */}
      <div className="md:w-1/2 px-4">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-center md:text-left">
          You Will Grow, You Will Succeed. We Promise That
        </h1>
        <br></br>
        <p className="text-gray-600 mb-6 text-center md:text-left leading-relaxed">
          Pellentesque arcu facilisis nunc mi proin. Dignissim mattis in lectus tincidunt tincidunt ultricies.
          Diam convallis morbi pellentesque adipiscing.
        </p>
        <br></br>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            { icon: FaPhoneAlt, title: "Call for inquiry", text: "+257 388-6895" },
            { icon: FaEnvelope, title: "Send us email", text: "kramulous@sbcglobal.net" },
            { icon: FaClock, title: "Opening hours", text: "Mon - Fri: 10AM - 10PM" },
            { icon: FaMapMarkerAlt, title: "Office", text: "19 North Road Piscataway, NY 08854" }
          ].map(({ icon: Icon, title, text }, index) => (
            <div key={index} className="flex items-center space-x-4">
              <Icon className="text-teal-500 text-3xl sm:text-4xl" /> {/* Larger icons */}
              <div>
                <h3 className="font-semibold text-lg">{title}</h3>
                <p className="text-gray-600 text-sm sm:text-base">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Section - Contact Form */}
      <div className="md:w-1/2 w-full bg-gray-100 p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-2 text-center">Contact Info</h2>
        <p className="text-gray-500 mb-6 text-center">Nibh dis faucibus proin lacus tristique</p>

        <form className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input type="text" placeholder="Your name" className="w-full p-3 border rounded focus:ring-2 focus:ring-teal-500 outline-none" />
            <input type="text" placeholder="Your last name" className="w-full p-3 border rounded focus:ring-2 focus:ring-teal-500 outline-none" />
          </div>
          <input type="email" placeholder="Your E-mail address" className="w-full p-3 border rounded focus:ring-2 focus:ring-teal-500 outline-none" />
          <textarea placeholder="Your message..." className="w-full p-3 border rounded h-24 focus:ring-2 focus:ring-teal-500 outline-none"></textarea>
          <button type="submit" className="w-full bg-teal-500 text-white py-3 rounded-lg hover:bg-teal-600 transition">
            Send Message
          </button>
        </form>
      </div>
    </div>
    <br></br>
    </>
  );
};

export default ContactPage;
