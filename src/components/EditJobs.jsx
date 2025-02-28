import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function EditJobs() {
  const navigate = useNavigate();
  const { id: jobId } = useParams();
  const [formData, setFormData] = useState({
    companyName: "",
    companyId: "",
    jobTitle: "",
    category: "",
    jobType: "",
    salary: "",
    formattedAddress: "",
    skills: [""],
    description: "",
    experience: "",
    degree: "",
  });

  useEffect(() => {
    const fetchJobData = async () => {
      try {
        const response = await fetch(`http://localhost:4000/jobs/getjobs/${jobId}`);
        if (response.ok) {
          const data = await response.json();
          setFormData({
            companyName: data.company.companyName,
            companyId: data.company.companyId,
            jobTitle: data.jobTitle,
            category: data.category,
            jobType: data.jobType,
            salary: data.salary,
            formattedAddress: data.formattedAddress,
            skills: data.skills,
            description: data.description,
            experience: data.experience,
            degree: data.degree,
          });
        } else {
          console.error("Failed to fetch job data");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchJobData();
  }, [jobId]);

  const handleChange = (e, index) => {
    const { name, value } = e.target;

    if (name === "skills") {
      const updatedSkills = [...formData.skills];
      updatedSkills[index] = value;
      setFormData((prev) => ({
        ...prev,
        skills: updatedSkills,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleAddSkill = () => {
    setFormData((prev) => ({
      ...prev,
      skills: [...prev.skills, ""],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:4000/jobs/updatejobs/${jobId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          company: {
            companyName: formData.companyName,
            companyId: formData.companyId,
          },
          jobTitle: formData.jobTitle,
          category: formData.category,
          jobType: formData.jobType,
          salary: formData.salary,
          formattedAddress: formData.formattedAddress,
          skills: formData.skills.filter((skill) => skill.trim() !== ""),
          description: formData.description,
          experience: formData.experience,
          degree: formData.degree,
        }),
      });

      if (response.ok) {
        const result = await response.json();
        alert(result.message);
        navigate(`/jobdetails/${jobId}`);
      } else {
        const errorData = await response.json();
        alert(errorData.message || "Failed to update job.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while updating the job.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-8 bg-white shadow-2xl rounded-xl">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Edit Job</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Job Title</label>
            <input
              name="jobTitle"
              value={formData.jobTitle}
              onChange={handleChange}
              placeholder="Job Title"
              className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Company Name</label>
            <input
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              placeholder="Company Name"
              className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Company ID</label>
            <input
              name="companyId"
              value={formData.companyId}
              onChange={handleChange}
              placeholder="Company ID"
              type="number"
              className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Category</label>
            <input
              name="category"
              value={formData.category}
              onChange={handleChange}
              placeholder="Category"
              className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Job Type</label>
            <select
              name="jobType"
              value={formData.jobType}
              onChange={handleChange}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            >
              <option value="Full Time">Full Time</option>
              <option value="Part Time">Part Time</option>
              <option value="Internship">Internship</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Salary</label>
            <input
              name="salary"
              value={formData.salary}
              onChange={handleChange}
              placeholder="Salary"
              type="number"
              className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div className="col-span-full">
            <label className="block text-sm font-medium text-gray-700">Address</label>
            <input
              name="formattedAddress"
              value={formData.formattedAddress}
              onChange={handleChange}
              placeholder="Address"
              className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div className="col-span-full">
            <label className="block text-sm font-medium text-gray-700">Skills</label>
            {formData.skills.map((skill, index) => (
              <input
                key={index}
                name="skills"
                value={skill}
                onChange={(e) => handleChange(e, index)}
                placeholder="Skill"
                className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 mb-2"
                required
              />
            ))}
            <button
              type="button"
              onClick={handleAddSkill}
              className="w-full bg-green-500 text-white p-3 rounded-lg hover:bg-green-600 transition duration-200"
            >
              Add Skill
            </button>
          </div>
          <div className="col-span-full">
            <label className="block text-sm font-medium text-gray-700">Job Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Job Description"
              className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              rows="4"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Experience Required</label>
            <input
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              placeholder="Experience Required"
              className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Degree Required</label>
            <input
              name="degree"
              value={formData.degree}
              onChange={handleChange}
              placeholder="Degree Required"
              className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition duration-200"
        >
          Update Job
        </button>
      </form>
    </div>
  );
}