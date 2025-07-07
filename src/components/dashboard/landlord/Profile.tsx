"use client";

import { useUser } from "@/context/UserContext";
import React from "react";

const Profile = () => {
  const { user } = useUser();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white rounded-2xl shadow-md p-6 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
           User Profile
        </h2>
        {user ? (
          <div className="space-y-2">
            <p className="text-gray-700">
              <span className="font-semibold">Name:</span> Riaz
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Email:</span> {user.email}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Role:</span> {user.role}
            </p>
          </div>
        ) : (
          <p className="text-center text-gray-500">No user data found.</p>
        )}
      </div>
    </div>
  );
};

export default Profile;
