/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useState } from "react";
import axios from "axios";
import dynamic from "next/dynamic";
import Link from "next/link";
import signup from "@/data/signup.json"; // ✅ Fixed import path
import { FcGoogle } from "react-icons/fc";
import { toast } from "sonner";

// ✅ Fix SSR issues by dynamically loading Lottie
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/signup",
        formData
      );
      toast.success("Registered Successfully!");

      // Optional: Clear form after success
      setFormData({
        name: "",
        email: "",
        password: "",
        image: "",
      });
    } catch (error) {
      console.error("Signup error:", error);
      toast.error("Signup failed!");
    }
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <Lottie animationData={signup} loop />
        </div>

        <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
          <h1 className="text-2xl text-center mt-4">Sign Up</h1>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <label className="label">Full Name</label>
              <input
                name="name"
                type="text"
                className="input input-bordered w-full"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
              />

              <label className="label">Email</label>
              <input
                name="email"
                type="email"
                className="input input-bordered w-full"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
              />

              <label className="label">Password</label>
              <input
                name="password"
                type="password"
                className="input input-bordered w-full"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
              />

              <label className="label">Image URL</label>
              <input
                name="image"
                type="text"
                className="input input-bordered w-full"
                placeholder="Profile image URL"
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
