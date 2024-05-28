"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });
  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const onLogin = async () => {
    try {
      const response = await axios.post("/api/login", user);
      console.log("SignIn Success", response.data);
      router.push("/home");
    } catch (error: any) {
      console.log("SignIn failed");
    }
  };
  const onSignup = () => {
    router.push("/signup");
  }
  return (
    <>
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="p-6 rounded-lg shadow-lg border-2 w-full max-w-sm bg-white">
          <h1 className="text-center font-bold text-2xl mb-5">
            Sign In
          </h1>
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
        <button onClick={onLogin} disabled={buttonDisabled}
        className="w-full  py-2 rounded-lg mb-4 bg-blue-600 text-white hover:bg-blue-700  transition duration-200">
          Sign In
        </button>
        <hr/>
        <div className="mt-4">
            <button
              onClick={() => signIn('google',{
                callbackUrl : '/home'
              })}
              className="w-full bg-gray-100 text-black py-2 rounded-lg mb-2 flex items-center justify-center"
            >
              <img className="w-6 h-6 mr-2" src='/google.svg' alt='google logo' />
              Sign in with Google
            </button>
            <p className="text-center mt-4">Don't have an account?{' '}
            <button
              type="button"
              onClick={onSignup}
              className="text-blue-600 hover:underline"
            >
              Register here
            </button>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
