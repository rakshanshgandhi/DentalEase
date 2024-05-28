"use client";
import React from "react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

const Header = () => {
  
  const handleSignOut = () => {
    signOut({ callbackUrl: "/login" });
    console.log("Sign out");
  };

  const handleSignIn = () => {
    window.location.href = "/login";
  };

  const session = useSession();

  return (
    <header className="bg-blue-600 text-white shadow-md">
      <nav className="container mx-auto p-4 flex justify-between items-center">
        <div className="text-lg font-bold">
          <Link
            href="/"
            className="hover:text-gray-200 transition duration-200"
          >
            DentalEase
          </Link>
        </div>
        {session.status === "authenticated" ? (
          <ul className="flex space-x-4 items-center">
            <li>
              <Link
                href="/home"
                className="hover:text-gray-200 transition duration-200"
              >
                Home
              </Link>
            </li>
            <li>
              <button
                onClick={handleSignOut}
                className="hover:text-blue-700 transition duration-200 bg-white px-4 py-2 rounded text-blue-600"
              >
                Sign Out
              </button>
            </li>
          </ul>
        ) : (
          <ul>
            <li>
              <button
                onClick={handleSignIn}
                className="hover:text-blue-700 transition duration-200 bg-white px-4 py-2 rounded text-blue-600"
              >
                Sign In
              </button>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
