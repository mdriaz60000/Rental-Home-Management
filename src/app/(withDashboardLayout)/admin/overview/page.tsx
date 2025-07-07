"use client";
import { useUser } from '@/context/UserContext';
import React from 'react';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const OverviewPage = () => {
  const user = useUser();


  const roleData = [
    { name: 'Admin', value: 2 },
    { name: 'Landlord', value: 4 },
    { name: 'Tenant', value: 6 },
    { name: 'User', value: 3 },
  ];

  const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff7f50'];

  return (
    <div>
      <section className="flex flex-col md:flex-row justify-between gap-6">
        {/* User Info */}
        <div className="flex items-center p-4 border rounded-md w-full md:w-1/2">
          {user?.user && (
            <div className=" space-y-2">
             
             <Avatar>
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>
              <p className="text-gray-700">
                <span className="font-semibold">Email:</span> {user.user.email}
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Role:</span> {user.user.role}
              </p>
            </div>
          )}
        </div>

        {/* Pie Chart */}
        <div className="p-4 border rounded-md w-full md:w-1/2 h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={roleData}
                cx="50%"
                cy="50%"
                labelLine={false}
               
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {roleData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </section>


    </div>
  );
};

export default OverviewPage;
