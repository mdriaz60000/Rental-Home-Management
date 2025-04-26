// 'use client';

// import { User } from '@/lib/types';
// import { updateUser, deleteUser } from '@/lib/api/admin';
// import { useState } from 'react';

// export default function UserTable({ users: initialUsers }: { users: User[] }) {
//   const [users, setUsers] = useState(initialUsers);
//   const [loadingId, setLoadingId] = useState<string | null>(null);

//   const handleRoleUpdate = async (userId: string, newRole: string) => {
//     setLoadingId(userId);
//     try {
//       await updateUser(userId, { role: newRole });
//       setUsers(users.map(user => 
//         user.id === userId ? { ...user, role: newRole } : user
//       ));
//     } catch (error) {
//       console.error('Error updating user:', error);
//     } finally {
//       setLoadingId(null);
//     }
//   };

//   const handleDelete = async (userId: string) => {
//     if (confirm('Are you sure you want to delete this user?')) {
//       setLoadingId(userId);
//       try {
//         await deleteUser(userId);
//         setUsers(users.filter(user => user.id !== userId));
//       } catch (error) {
//         console.error('Error deleting user:', error);
//       } finally {
//         setLoadingId(null);
//       }
//     }
//   };

//   return (
//     <div className="overflow-x-auto">
//       <table className="min-w-full bg-white rounded-lg overflow-hidden">
//         <thead className="bg-gray-200">
//           <tr>
//             <th className="py-2 px-4">Name</th>
//             <th className="py-2 px-4">Email</th>
//             <th className="py-2 px-4">Role</th>
//             <th className="py-2 px-4">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.map(user => (
//             <tr key={user.id} className="border-t">
//               <td className="py-2 px-4">{user.name}</td>
//               <td className="py-2 px-4">{user.email}</td>
//               <td className="py-2 px-4">
//                 <select
//                   value={user.role}
//                   onChange={(e) => handleRoleUpdate(user.id, e.target.value)}
//                   className="border rounded p-1"
//                   disabled={loadingId === user.id}
//                 >
//                   <option value="tenant">Tenant</option>
//                   <option value="landlord">Landlord</option>
//                   <option value="admin">Admin</option>
//                 </select>
//               </td>
//               <td className="py-2 px-4">
//                 <button
//                   onClick={() => handleDelete(user.id)}
//                   disabled={loadingId === user.id}
//                   className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 disabled:opacity-50"
//                 >
//                   {loadingId === user.id ? 'Deleting...' : 'Delete'}
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

import React from 'react';

const UserTable = () => {
  return (
    <div>
      user table
    </div>
  );
};

export default UserTable;