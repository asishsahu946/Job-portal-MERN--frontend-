import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Form() {
  const { id: userId } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    userId: userId,
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
      const response = await fetch("http://localhost:4000/jobs/postjobs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: formData.userId,
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
        setFormData({
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
        navigate(`/admin/${userId}`);
      } else {
        const errorData = await response.json();
        alert(errorData.message || "Failed to post job.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while posting the job.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-50 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-2xl p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Post a Job</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              name="jobTitle"
              value={formData.jobTitle}
              onChange={handleChange}
              placeholder="Job Title"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              required
            />
            <input
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              placeholder="Company Name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              required
            />
            <input
              name="companyId"
              value={formData.companyId}
              onChange={handleChange}
              placeholder="Company ID"
              type="number"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              required
            />
            <input
              name="category"
              value={formData.category}
              onChange={handleChange}
              placeholder="Category"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              required
            />
            <select
              name="jobType"
              value={formData.jobType}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              required
            >
              <option value="Full Time">Full Time</option>
              <option value="Part Time">Part Time</option>
              <option value="Internship">Internship</option>
            </select>
            <input
              name="salary"
              value={formData.salary}
              onChange={handleChange}
              placeholder="Salary"
              type="number"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              required
            />
            <input
              name="formattedAddress"
              value={formData.formattedAddress}
              onChange={handleChange}
              placeholder="Address"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              required
            />
          </div>

          <div className="space-y-4">
            {formData.skills.map((skill, index) => (
              <input
                key={index}
                name="skills"
                value={skill}
                onChange={(e) => handleChange(e, index)}
                placeholder="Skill"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                required
              />
            ))}
            <button
              type="button"
              onClick={handleAddSkill}
              className="w-full bg-green-500 text-white p-3 rounded-lg hover:bg-green-600 transition-all"
            >
              Add Skill
            </button>
          </div>

          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Job Description"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            rows="4"
            required
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              placeholder="Experience Required"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              required
            />
            <input
              name="degree"
              value={formData.degree}
              onChange={handleChange}
              placeholder="Degree Required"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-all"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}