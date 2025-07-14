"use client";

import { useUser } from "@/context/UserContext";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Users, Building, UserCheck, MessageSquare } from "lucide-react";

const OverviewPage = () => {
  const user = useUser();

  // Fake counts
  const totalUser = 50;
  const totalLandlords = 15;
  const totalTenants = 25;
  const totalUsers = totalUser + totalLandlords + totalTenants;

  const roleData = [
    { name: "Admin", value: totalUser },
    { name: "Landlord", value: totalLandlords },
    { name: "Tenant", value: totalTenants },
  ];

  const COLORS = ["#8884d8", "#82ca9d", "#ffc658"];

  const recentUsers = [
    { name: "John Doe", email: "john@example.com", role: "Tenant" },
    { name: "Jane Smith", email: "jane@example.com", role: "Landlord" },
    { name: "Admin X", email: "admin@example.com", role: "Admin" },
  ];

  return (
    <div className="p-6 space-y-8">
      <h2 className="text-2xl font-bold">📊 Dashboard Overview</h2>

      {/* Stats Cards */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="flex items-center gap-4 p-4">
          <Users className="text-blue-500" />
          <div>
            <p className="text-sm text-muted-foreground">Total Users</p>
            <p className="text-lg font-bold">{totalUsers}</p>
          </div>
        </Card>
        <Card className="flex items-center gap-4 p-4">
          <UserCheck className="text-green-500" />
          <div>
            <p className="text-sm text-muted-foreground">Tenants</p>
            <p className="text-lg font-bold">{totalTenants}</p>
          </div>
        </Card>
        <Card className="flex items-center gap-4 p-4">
          <Building className="text-purple-500" />
          <div>
            <p className="text-sm text-muted-foreground">Landlords</p>
            <p className="text-lg font-bold">{totalLandlords}</p>
          </div>
        </Card>
        <Card className="flex items-center gap-4 p-4">
          <MessageSquare className="text-orange-500" />
          <div>
            <p className="text-sm text-muted-foreground">User</p>
            <p className="text-lg font-bold">{totalUser}</p>
          </div>
        </Card>
      </section>

      {/* Profile & Chart */}
      <section className="flex flex-col md:flex-row justify-between gap-6">
        {/* User Info */}
        <Card className="w-full md:w-1/2">
          <CardHeader>
            <h3 className="font-semibold text-lg">Logged in User</h3>
          </CardHeader>
          <CardContent className="flex gap-4 items-center">
            <Avatar className="w-16 h-16">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium">{user?.user?.email}</p>
              <p className="text-sm text-muted-foreground capitalize">
                {user?.user?.role}
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Pie Chart */}
        <Card className="w-full md:w-1/2 h-[300px]">
          <CardHeader>
            <h3 className="font-semibold text-lg">User Roles</h3>
          </CardHeader>
          <CardContent className="h-[220px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={roleData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {roleData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </section>

      {/* Recent Users Table */}
      <section className="space-y-4">
        <h3 className="text-lg font-semibold">Recent Users</h3>
        <Card>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Role</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentUsers.map((user, index) => (
                <TableRow key={index}>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell className="capitalize">{user.role}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </section>
    </div>
  );
};

export default OverviewPage;
