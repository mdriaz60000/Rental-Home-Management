// 'use client';

// import { Listing } from '@/lib/types';
// import { updateListing, deleteListing } from '@/lib/api/admin';
// import { useState } from 'react';

// export default function ListingTable({ listings: initialListings }: { listings: Listing[] }) {
//   const [listings, setListings] = useState(initialListings);
//   const [loadingId, setLoadingId] = useState<string | null>(null);

//   const handleStatusUpdate = async (listingId: string, newStatus: string) => {
//     setLoadingId(listingId);
//     try {
//       await updateListing(listingId, { status: newStatus });
//       setListings(listings.map(listing => 
//         listing.id === listingId ? { ...listing, status: newStatus } : listing
//       ));
//     } catch (error) {
//       console.error('Error updating listing:', error);
//     } finally {
//       setLoadingId(null);
//     }
//   };

//   const handleDelete = async (listingId: string) => {
//     if (confirm('Are you sure you want to delete this listing?')) {
//       setLoadingId(listingId);
//       try {
//         await deleteListing(listingId);
//         setListings(listings.filter(listing => listing.id !== listingId));
//       } catch (error) {
//         console.error('Error deleting listing:', error);
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
//             <th className="py-2 px-4">Title</th>
//             <th className="py-2 px-4">Price</th>
//             <th className="py-2 px-4">Status</th>
//             <th className="py-2 px-4">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {listings.map(listing => (
//             <tr key={listing.id} className="border-t">
//               <td className="py-2 px-4">{listing.title}</td>
//               <td className="py-2 px-4">${listing.price}</td>
//               <td className="py-2 px-4">
//                 <select
//                   value={listing.status}
//                   onChange={(e) => handleStatusUpdate(listing.id, e.target.value)}
//                   className="border rounded p-1"
//                   disabled={loadingId === listing.id}
//                 >
//                   <option value="pending">Pending</option>
//                   <option value="approved">Approved</option>
//                   <option value="rejected">Rejected</option>
//                 </select>
//               </td>
//               <td className="py-2 px-4">
//                 <button
//                   onClick={() => handleDelete(listing.id)}
//                   disabled={loadingId === listing.id}
//                   className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 disabled:opacity-50"
//                 >
//                   {loadingId === listing.id ? 'Deleting...' : 'Delete'}
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

const ListingTable = () => {
  return (
    <div>
      <p>listing table </p>
    </div>
  );
};

export default ListingTable;