"use client"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import {  useGetAllUserQuery } from "@/redux/features/AdminApi/userApi";
import { IUser } from "@/type";

const UserManagement = () => {
  const { data, isLoading, error } = useGetAllUserQuery(undefined);
  console.log(data)


  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading users</div>;

  const filteredUsers = data?.data?.filter((user: IUser) => user.role !== "admin") || [];

  const handleDelete = (userId: string) => {
    console.log(userId)
   
  }

  return (
    <div className="overflow-x-auto">
      <Table>
        <TableCaption>A list of all users</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Name</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Update</TableHead>
            <TableHead>Delete</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredUsers.map((user : IUser) => (
            <TableRow key={user._id}>
              <TableCell className="font-medium">{user.name}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>
                <button className="text-blue-500 hover:text-blue-700">
                  update
                </button>
              </TableCell>
              <TableCell>
                <button 
                  onClick={() => handleDelete(user._id)}
                  className="text-red-500 hover:text-red-700"
                  aria-label="Delete user"
                >
                  delete
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default UserManagement;