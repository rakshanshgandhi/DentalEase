"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { signIn } from "next-auth/react";

export default function SignupPage() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: "",
  });
  const onSignIn = () => {
    router.push("/login");
  };
  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.password.length > 0 &&
      user.username.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);
  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const onSignup = async () => {
    try {
      const response = await axios.post("/api/signup", user);
      console.log("Signup Success", response.data);
      router.push("/home");
    } catch (error: any) {
      console.log("SignUp failed");
    }
  };
  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="p-6 shadow-md border-2 rounded-lg bg-white w-full max-w-sm">
          <h1 className="text-center font-bold text-2xl mb-5">Sign Up</h1>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="username"
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              className="w-full px-4 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              className="w-full px-4 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              className="w-full px-4 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              required
            />
          </div>
          <button
            onClick={onSignup}
            disabled={buttonDisabled}
            className="w-full  py-2 rounded-lg mb-4 bg-blue-600 text-white hover:bg-blue-700  transition duration-200"
          >
            Sign up
          </button>
          <hr />
          <div className="mt-4">
            <button
              onClick={() =>
                signIn("google", {
                  callbackUrl: "/home",
                })
              }
              className="w-full bg-gray-100 text-black py-2 rounded-lg mb-2 flex items-center justify-center"
            >
              <img
                className="w-6 h-6 mr-2"
                src="/google.svg"
                alt="google logo"
              />
              Sign up with Google
            </button>
            <p className="text-center mt-4">
              Have account already?{" "}
              <button
                type="button"
                onClick={onSignIn}
                className="text-blue-600 hover:underline"
              >
                Sign In
              </button>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
