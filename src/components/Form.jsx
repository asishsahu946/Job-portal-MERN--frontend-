import { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    companyName: "",
    companyId: "",
    jobTitle: "",
    category: "",
    jobType: "",
    salary: "",
    formattedAddress: "",
    skills: [""], // Store skills as an array
    description: "",
    experience: "",
    degree: "",
  });

  const handleChange = (e, index) => {
    const { name, value } = e.target;

    if (name === "skills") {
      // Update the specific skill in the array
      const updatedSkills = [...formData.skills];
      updatedSkills[index] = value;
      setFormData((prev) => ({
        ...prev,
        skills: updatedSkills,
      }));
    } else {
      // Update other fields
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleAddSkill = () => {
    // Add a new empty skill input
    setFormData((prev) => ({
      ...prev,
      skills: [...prev.skills, ""],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://jobportalmernbackend.vercel.app/postjobs",
        {
          method: "POST",
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
            skills: formData.skills.filter((skill) => skill.trim() !== ""), // Filter out empty skills
            description: formData.description,
            experience: formData.experience,
            degree: formData.degree,
          }),
        }
      );

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
          skills: [""], // Reset skills array
          description: "",
          experience: "",
          degree: "",
        });
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
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Post a Job</h2>
      <form onSubmit={handleSubmit}>
      <input
          name="jobTitle"
          value={formData.jobTitle}
          onChange={handleChange}
          placeholder="Job Title"
          className="w-full p-2 border mb-2"
          required
        />
        <input
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
          placeholder="Company Name"
          className="w-full p-2 border mb-2"
          required
        />
        <input
          name="companyId"
          value={formData.companyId}
          onChange={handleChange}
          placeholder="Company ID"
          type="number"
          className="w-full p-2 border mb-2"
          required
        />
        <input
          name="category"
          value={formData.category}
          onChange={handleChange}
          placeholder="Category"
          className="w-full p-2 border mb-2"
          required
        />
        <select
          name="jobType"
          value={formData.jobType}
          onChange={handleChange}
          placeholder="Job Type"
          className="w-full p-2 border mb-2"
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
          className="w-full p-2 border mb-2"
          required
        />
        <input
          name="formattedAddress"
          value={formData.formattedAddress}
          onChange={handleChange}
          placeholder="Address"
          className="w-full p-2 border mb-2"
          required
        />
        {/* Render skill inputs dynamically */}
        {formData.skills.map((skill, index) => (
          <input
            key={index}
            name="skills"
            value={skill}
            onChange={(e) => handleChange(e, index)}
            placeholder="Skill"
            className="w-full p-2 border mb-2"
            required
          />
        ))}
        {/* Button to add more skills */}
        <button
          type="button"
          onClick={handleAddSkill}
          className="w-full bg-green-500 text-white p-2 rounded mb-2"
        >
          Add Skill
        </button>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Job Description"
          className="w-full p-2 border mb-2"
          required
        />
        <input
          name="experience"
          value={formData.experience}
          onChange={handleChange}
          placeholder="Experience Required"
          className="w-full p-2 border mb-2"
          required
        />
        <input
          name="degree"
          value={formData.degree}
          onChange={handleChange}
          placeholder="Degree Required"
          className="w-full p-2 border mb-2"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
}