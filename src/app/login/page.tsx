"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "sonner";
import dynamic from "next/dynamic";

// ✅ Dynamically import Lottie to avoid SSR issues
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

// ✅ Import JSON from a valid location (not from /public)
import signin from "@/data/signin.json"; // move the file to /src/data/signin.json
import Link from "next/link";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:5000/signin", {
        email,
        password,
      });

      if (response.status === 200) {
        toast.success("Login successful!");
        // Optional: store token
        // localStorage.setItem("token", response.data.token);
        router.push("/"); // Redirect to homepage
      }
    } catch (error) {
      console.log(error);
      toast.error("Login failed.");
    }
  };

  return (
    <div className="hero m-4 bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <Lottie animationData={signin} loop={true} />
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 flex justify-between shadow-2xl">
          <h1 className="text-center text-3xl underline pt-4">Login</h1>
          <div className="card-body">
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input
                type="email"
                className="input"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label className="label">Password</label>
              <input
                type="password"
                className="input"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <div className="flex gap-4 ">
                <Link href="/forgotPassword" className="link link-hover">
                  Forgot password?
                </Link>
                <Link
                  href="/signup"
                  className="link link-hover underline font-blue"
                >
                  Create an account
                </Link>
              </div>
              <button className="btn btn-neutral mt-4" onClick={handleLogin}>
                Login
              </button>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
