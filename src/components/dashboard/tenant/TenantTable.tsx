// 'use client';

// // import { RentalRequest } from '@/lib/types';
// // import { deleteRequest } from '@/lib/api/tenant';
// import { useState } from 'react';
// import Link from 'next/link';

// export default function RequestTable({ requests: initialRequests }: { requests: RentalRequest[] }) {
//   const [requests, setRequests] = useState(initialRequests);
//   const [loadingId, setLoadingId] = useState<string | null>(null);

//   const handleDelete = async (requestId: string) => {
//     if (confirm('Are you sure you want to delete this request?')) {
//       setLoadingId(requestId);
//       try {
//         await deleteRequest(requestId);
//         setRequests(requests.filter(request => request.id !== requestId));
//       } catch (error) {
//         console.error('Error deleting request:', error);
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
//             <th className="py-2 px-4">Property</th>
//             <th className="py-2 px-4">Move-in Date</th>
//             <th className="py-2 px-4">Status</th>
//             <th className="py-2 px-4">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {requests.map(request => (
//             <tr key={request.id} className="border-t">
//               <td className="py-2 px-4">
//                 <Link 
//                   href={`/listings/${request.listingId}`}
//                   className="text-blue-600 hover:underline"
//                 >
//                   {request.listingTitle}
//                 </Link>
//               </td>
//               <td className="py-2 px-4">
//                 {new Date(request.moveInDate).toLocaleDateString()}
//               </td>
//               <td className="py-2 px-4">
//                 <span className={`px-2 py-1 rounded-full text-xs ${
//                   request.status === 'approved' ? 'bg-green-100 text-green-800' :
//                   request.status === 'rejected' ? 'bg-red-100 text-red-800' :
//                   'bg-yellow-100 text-yellow-800'
//                 }`}>
//                   {request.status}
//                 </span>
//               </td>
//               <td className="py-2 px-4 space-x-2">
//                 <button
//                   onClick={() => handleDelete(request.id)}
//                   disabled={loadingId === request.id}
//                   className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 disabled:opacity-50"
//                 >
//                   {loadingId === request.id ? 'Deleting...' : 'Delete'}
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

const TenantTable = () => {
  return (
    <div>
      tenanTable is now
    </div>
  );
};

export default TenantTable;