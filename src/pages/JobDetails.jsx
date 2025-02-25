import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faPhone, faComment, faMapMarkerAlt, faClock, faDollarSign, faBriefcase, faBuilding, faGraduationCap, faUserTie } from "@fortawesome/free-solid-svg-icons";

function JobDetails() {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    fetch(`https://jobportalmernbackend.vercel.app/getjobs/${id}`)
      .then((res) => res.json())
      .then((data) => setJob(data))
      .catch((error) => console.error("Error fetching job details:", error));
  }, [id]);

  if (!job) {
    return <div>Loading...</div>;
  }
  

  return (
    <div className="max-w-8xl mx-auto p-6">
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 bg-white p-6 rounded-lg ">
         
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold">{job.jobTitle}</h2>
              <p className="text-gray-600">
                <FontAwesomeIcon icon={faBuilding} className="mr-2 text-gray-500" />
                {job.company.companyName}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 text-gray-500 mt-4">
            <p>
              <FontAwesomeIcon icon={faBriefcase} className="mr-2 text-gray-500" />
              {job.category}
            </p>
            <p>
              <FontAwesomeIcon icon={faClock} className="mr-2 text-gray-500" />
              {job.jobType}
            </p>
            <p>
              <FontAwesomeIcon icon={faDollarSign} className="mr-2 text-gray-500" />
              ${job.salary}
            </p>
            <p>
              <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2 text-gray-500" />
              {job.formattedAddress}
            </p>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold">Job Description</h3>
            <p className="text-gray-700">{job.description}</p>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold">Key Skills</h3>
            <ul className="list-disc pl-5 text-gray-700">
              {job.skills.map((skill, index) => (
                <li key={index}>✅ {skill}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="max-w-sm w-full p-6 rounded-lg ">
          <button className="w-full bg-teal-500 py-2  text-white rounded-lg text-center mb-4">
            Apply Job
          </button>

          <div className="bg-teal-50 p-6 rounded-lg ">
            <h3 className="text-lg font-semibold mb-4">Job Overview</h3>

            <div className="space-y-3 text-gray-700">
              <p className="flex items-center">
                <FontAwesomeIcon icon={faUserTie} className="mr-2 text-teal-500" />
                <strong>Job Title:</strong> {job.jobTitle}
              </p>
              <p className="flex items-center">
                <FontAwesomeIcon icon={faClock} className="mr-2 text-teal-500" />
                <strong>Job Type:</strong> {job.jobType}
              </p>
              <p className="flex items-center">
                <FontAwesomeIcon icon={faBriefcase} className="mr-2 text-teal-500" />
                <strong>Category:</strong> {job.category}
              </p>
              <p className="flex items-center">
                <FontAwesomeIcon icon={faUserTie} className="mr-2 text-teal-500" />
                <strong>Experience:</strong> {job.experience} Years
              </p>
              <p className="flex items-center">
                <FontAwesomeIcon icon={faGraduationCap} className="mr-2 text-teal-500" />
                <strong>Degree:</strong> {job.degree}
              </p>
              <p className="flex items-center">
                <FontAwesomeIcon icon={faDollarSign} className="mr-2 text-teal-500" />
                <strong>Offered Salary:</strong> ${job.salary}
              </p>
              <p className="flex items-center">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2 text-teal-500" />
                <strong>Location:</strong> {job.formattedAddress}
              </p>
            </div>

            <div className="mt-4">
              <img
                src="data:image/webp;base64,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"
                alt="Job Location Map"
                className="rounded-lg w-full"
              />
            </div>
          </div>
          <br></br>
          <br></br>
          <div>
            <div className="max-w-sm w-full bg-teal-50 p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-4">Send Us Message</h3>

              <div className="space-y-3">
                <div className="flex items-center bg-white p-2 rounded-lg border">
                  <FontAwesomeIcon icon={faUser} className="text-gray-500 mr-2" />
                  <input
                    type="text"
                    placeholder="Full name"
                    className="w-full outline-none bg-transparent"
                  />
                </div>

                <div className="flex items-center bg-white p-2 rounded-lg border">
                  <FontAwesomeIcon icon={faEnvelope} className="text-gray-500 mr-2" />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full outline-none bg-transparent"
                  />
                </div>

                <div className="flex items-center bg-white p-2 rounded-lg border">
                  <FontAwesomeIcon icon={faPhone} className="text-gray-500 mr-2" />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full outline-none bg-transparent"
                  />
                </div>

                <div className="flex items-start bg-white p-2 rounded-lg border">
                  <FontAwesomeIcon icon={faComment} className="text-gray-500 mr-2 mt-1" />
                  <textarea
                    placeholder="Your Message"
                    className="w-full outline-none bg-transparent h-20 resize-none"
                  ></textarea>
                </div>

                <button className="w-full bg-teal-500 text-white py-2 rounded-lg mt-2">
                  Send Message
                </button>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobDetails;
