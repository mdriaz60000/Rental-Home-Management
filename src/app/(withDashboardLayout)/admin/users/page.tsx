import UserManagement from "@/components/dashboard/admin/UserManagement";




export default  function AdminUsersPage() {
 

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">User Management</h1>
      <UserManagement/>
    </div>
  );
}