"use client";

import React, { useState } from "react";
import axios from "axios";
import Lottie from "lottie-react";
import Link from "next/link";
import signup from "../../../public/signup/signup.json";
import { FcGoogle } from "react-icons/fc";
import { toast } from "sonner";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    image: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // prevent page reload

    console.log(formData);

    axios
      .post("http://localhost:5000/signup", formData)
      .then((response) => {
        console.log("Response:", response.data);
        toast.success("Rigister Successfully");
        // Optional: Clear form
        setFormData({
          name: "",
          email: "",
          password: "",
          image: "",
        });
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Signup failed!");
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <Lottie animationData={signup} loop={true} />
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="text-2xl text-center">SignUp</h1>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <label className="label">Full Name</label>
              <input
                name="name"
                type="text"
                className="input input-bordered w-full"
                placeholder="Enter your fullname"
                value={formData.name}
                onChange={handleChange}
              />

              <label className="label">Email</label>
              <input
                name="email"
                type="email"
                className="input input-bordered w-full"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />

              <label className="label">Password</label>
              <input
                name="password"
                type="password"
                className="input input-bordered w-full"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />

              <label className="label">Image</label>
              <input
                name="image"
                type="text"
                className="input input-bordered w-full"
                placeholder="Input your Image"
                value={formData.image}
                onChange={handleChange}
              />

              <button type="submit" className="btn btn-primary w-full mt-4">
                Submit
              </button>
            </form>

            <div className="flex items-center justify-center mt-4">
              <FcGoogle className="text-2xl" />
              <input
                className="input ml-2"
                type="text"
                placeholder="Signup with Google"
                disabled
              />
            </div>

            <p className="text-lg m-2 text-center">
              Already have an account?
              <Link href="/login">
                <span className="font-bold underline text-primary ml-1">
                  Sign In
                </span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
