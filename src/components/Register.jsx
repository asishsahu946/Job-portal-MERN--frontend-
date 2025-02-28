import React, { useState } from "react";
import { Typography, Input, Button } from "@material-tailwind/react";
import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [passwordShown, setPasswordShown] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const togglePasswordVisibility = () => setPasswordShown((cur) => !cur);

  const handleRegister = async (e) => {
    e.preventDefault();

    // Validate inputs
    if (!name || !email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    try {
      const response = await fetch("http://localhost:4000/users/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        navigate("/login"); // Redirect to login page after successful registration
      } else {
        setError(data.message || "Registration failed. Please try again.");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <section className="grid text-center h-screen items-center p-8">
      <div>
        <Typography variant="h3" color="blue-gray" className="mb-2">
          Register
        </Typography>
        <Typography className="mb-1 text-gray-600 font-normal text-[18px]">
          Enter your Name, email, and password to Register
        </Typography>
        <form onSubmit={handleRegister} className="mx-auto max-w-[24rem] text-left">
          <div className="mb-6">
            <label htmlFor="name">
              <Typography variant="small" className="mb-2 block font-medium text-gray-900">
                Your Name
              </Typography>
            </label>
            <Input
              id="name"
              color="gray"
              size="lg"
              type="text"
              name="name"
              placeholder="Enter your name"
              className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
              labelProps={{ className: "hidden" }}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email">
              <Typography variant="small" className="mb-2 block font-medium text-gray-900">
                Your Email
              </Typography>
            </label>
            <Input
              id="email"
              color="gray"
              size="lg"
              type="email"
              name="email"
              placeholder="name@mail.com"
              className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
              labelProps={{ className: "hidden" }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password">
              <Typography variant="small" className="mb-2 block font-medium text-gray-900">
                Create Password
              </Typography>
            </label>
            <Input
              size="lg"
              placeholder="********"
              labelProps={{ className: "hidden" }}
              className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
              type={passwordShown ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              icon={
                <i onClick={togglePasswordVisibility}>
                  {passwordShown ? <EyeIcon className="h-5 w-5" /> : <EyeSlashIcon className="h-5 w-5" />}
                </i>
              }
            />
          </div>
          {error && <Typography color="red" className="mb-4">{error}</Typography>}
          <Button type="submit" color="gray" size="lg" className="mt-6" fullWidth>
            Register
          </Button>
          <Typography variant="small" color="gray" className="!mt-4 text-center font-normal">
            Already Registered?{" "}
            <span onClick={() => navigate("/login")} className="font-medium text-gray-900 cursor-pointer">
              Sign In
            </span>
          </Typography>
        </form>
      </div>
    </section>
  );
}

export default Register;