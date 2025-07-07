"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useUser } from "@/context/UserContext";
import React from "react";

const ProfilePage = () => {
  const user = useUser();

  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-gray-100 px-4">
      {user?.user && (
        <div className="bg-white shadow-xl rounded-xl p-6 max-w-sm w-full text-center hover:shadow-2xl transition-all duration-300">
          {/* Avatar with ring */}
          <div className="flex justify-center mb-4">
            <div className="relative w-24 h-24 rounded-full ring-4 ring-primary/30 overflow-hidden shadow-md">
              <Avatar className="w-full h-full">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback className="text-xl font-bold bg-muted text-muted-foreground">
                  {user.user.email?.charAt(0).toUpperCase()}
                </AvatarFallback>
              </Avatar>
            </div>
          </div>

          {/* User Info */}
          <h2 className="text-xl font-bold text-gray-800 mb-1">Welcome!</h2>
          <p className="text-gray-600 text-sm mb-4">
            Here is your profile information:
          </p>

          <div className="space-y-2 text-sm text-left">
            <p>
              <span className="font-semibold text-gray-700">📧 Email:</span>{" "}
              <span className="text-gray-800">{user.user.email}</span>
            </p>
            <p>
              <span className="font-semibold text-gray-700">👤 Role:</span>{" "}
              <span className="capitalize text-gray-800">{user.user.role}</span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
