/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import React, { useEffect, useState } from 'react';
import { useUser } from '@/context/UserContext';
import Image from 'next/image';

const getStatusBadge = (status: string) => {
  switch (status.toLowerCase()) {
    case 'approved':
      return <span className="px-3 py-1 rounded-full text-sm bg-green-100 text-green-700 font-medium">Approved</span>;
    case 'rejected':
      return <span className="px-3 py-1 rounded-full text-sm bg-red-100 text-red-700 font-medium">Rejected</span>;
    default:
      return <span className="px-3 py-1 rounded-full text-sm bg-yellow-100 text-yellow-700 font-medium">Pending</span>;
  }
};

const RentalRequest = () => {
  const user = useUser();
  const userId = user?.user?.userId;
  const [rentalData, setRentalData] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      if (userId) {
        try {
          const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/requestRental/${userId}`, {
            method: "GET",
            headers: {
              'Content-Type': 'application/json',
            }
          });

          const result = await res.json();
          if (result?.success && Array.isArray(result?.data)) {
            setRentalData(result.data);
          }
        } catch (error) {
          console.error('Error fetching rental requests:', error);
        }
      }
    };

    fetchData();
  }, [userId]);

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">📋 My Rental Requests</h2>

      {rentalData.length > 0 ? (
        <div className="grid gap-6">
          {rentalData.map((rental, index) => (
            <div
              key={index}
              className="bg-white border rounded-xl shadow hover:shadow-lg p-4 transition-all flex flex-col md:flex-row gap-5"
            >
              {/* Image */}
              {rental.listingsId?.images?.[0] && (
                <div className="flex-shrink-0 w-full md:w-1/3">
                  <Image
                    src={rental.listingsId.images[0]}
                    alt="Listing"
                    width={400}
                    height={250}
                    className="rounded-lg shadow-sm w-full h-auto object-cover"
                  />
                </div>
              )}

              {/* Details */}
              <div className="flex flex-col justify-between w-full">
                <div className="space-y-2">
                  <p><span className="font-semibold">🏡 Title:</span> {rental.listingsId?.title || 'N/A'}</p>
                  <p><span className="font-semibold">📍 Location:</span> {rental.listingsId?.location || 'N/A'}</p>
                  <p><span className="font-semibold">💰 Rent:</span> {rental.listingsId?.rentAmount || 'N/A'} BDT</p>
                  <p><span className="font-semibold">📞 Phone:</span> {rental.phone}</p>
                  <p><span className="font-semibold">📅 Move-in:</span> {new Date(rental.moveInDate).toLocaleDateString()}</p>
                  <p><span className="font-semibold">⏳ Duration:</span> {rental.duration} months</p>
                  <p className="flex items-center gap-2">
                    <span className="font-semibold">📌 Status:</span> {getStatusBadge(rental.status)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-8">No rental requests found.</p>
      )}
    </div>
  );
};

export default RentalRequest;
