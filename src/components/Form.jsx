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
    skill: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://jobportalmernbackend.vercel.app/postjobs", {
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
          skills: [formData.skill],
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
          skill: "",
        });
      } else {
        alert("Failed to post job.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Post a Job</h2>
      <form onSubmit={handleSubmit}>
        <input name="companyName" value={formData.companyName} onChange={handleChange} placeholder="Company Name" className="w-full p-2 border mb-2" />
        <input name="companyId" value={formData.companyId} onChange={handleChange} placeholder="Company ID" type="number" className="w-full p-2 border mb-2" />
        <input name="jobTitle" value={formData.jobTitle} onChange={handleChange} placeholder="Job Title" className="w-full p-2 border mb-2" />
        <input name="category" value={formData.category} onChange={handleChange} placeholder="Category" className="w-full p-2 border mb-2" />
        <input name="jobType" value={formData.jobType} onChange={handleChange} placeholder="Job Type" className="w-full p-2 border mb-2" />
        <input name="salary" value={formData.salary} onChange={handleChange} placeholder="Salary" type="number" className="w-full p-2 border mb-2" />
        <input name="formattedAddress" value={formData.formattedAddress} onChange={handleChange} placeholder="Address" className="w-full p-2 border mb-2" />
        <input name="skill" value={formData.skill} onChange={handleChange} placeholder="Skill" className="w-full p-2 border mb-2" />
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Submit</button>
      </form>
    </div>
  );
}
