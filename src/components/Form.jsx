import { useForm } from "react-hook-form";

export default function Form() {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch("https://job-portal-mern-backend-y0p7.onrender.com/postjobs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("Job posted successfully!");
        reset();
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
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("company.companyName")} placeholder="Company Name" className="w-full p-2 border mb-2" />
        <input {...register("company.companyId")} placeholder="Company ID" type="number" className="w-full p-2 border mb-2" />
        <input {...register("jobTitle")} placeholder="Job Title" className="w-full p-2 border mb-2" />
        <input {...register("category")} placeholder="Category" className="w-full p-2 border mb-2" />
        <input {...register("jobType")} placeholder="Job Type" className="w-full p-2 border mb-2" />
        <input {...register("salary")} placeholder="Salary" type="number" className="w-full p-2 border mb-2" />
        <input {...register("formattedAddress")} placeholder="Address" className="w-full p-2 border mb-2" />
        <input {...register("skills.0")} placeholder="Skill" className="w-full p-2 border mb-2" />
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Submit</button>
      </form>
    </div>
  );
}