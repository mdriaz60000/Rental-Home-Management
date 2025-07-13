/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useEffect, useState } from "react";
import { useUser } from "@/context/UserContext";
import Image from "next/image";
import Link from "next/link";
import { IListing } from "@/type";

const MyListing = () => {
  const user = useUser();
  const userId = user?.user?.userId;

  const [rentalData, setRentalData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (userId) 
      

      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_API}/listingsed/${userId}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const result = await res.json();

        if (result?.success && Array.isArray(result?.data)) {
          setRentalData(result.data);
        } else {
          setRentalData([]);
        }
      } catch (err) {
        console.error("Error fetching rental requests:", err);
        setError("Failed to load rental data.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [userId]);

  // Delete handler
  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this listing?")) return;

    setDeletingId(id);

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_API}/listingsDelete/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const result = await res.json();

      if (result?.success) {
        setRentalData((prev) => prev.filter((item) => item._id !== id));
      } else {
        alert("Failed to delete listing");
      }
    } catch (err) {
      console.error("Error deleting listing:", err);
      alert("Error deleting listing");
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6">My Listings</h2>

      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="text-red-600">{error}</p>
      ) : rentalData.length > 0 ? (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rentalData.map((listing : IListing) => (
            <li
              key={listing._id}
              className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
            >
              <div className="relative h-48 w-full bg-gray-100">
                {listing.images?.[0] ? (
                  <Image
                    src={listing.images[0]}
                    alt={listing.title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full text-gray-400">
                    No Image
                  </div>
                )}
              </div>

              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold mb-1">{listing.title}</h3>
                <p className="text-gray-600 mb-1">{listing.location}</p>
                <p className="mb-1">
                  <strong>Rent:</strong> ${listing.rentAmount}
                </p>
                <p className="mb-3">
                  <strong>Status:</strong> {listing.status}
                </p>

                <div className="mt-auto flex gap-2 flex-wrap">
                  <Link
                    href={`/listings/${listing._id}`}
                    className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700"
                  >
                    Details
                  </Link>

                  <Link
                    href={`/listings/update/${listing._id}`}
                    className="px-3 py-1 text-sm bg-yellow-500 text-white rounded hover:bg-yellow-600"
                  >
                    Update
                  </Link>

                  <button
                    onClick={() => handleDelete(listing._id)}
                    disabled={deletingId === listing._id}
                    className="px-3 py-1 text-sm bg-red-600 text-white rounded hover:bg-red-700 disabled:opacity-50"
                  >
                    {deletingId === listing._id ? "Deleting..." : "Delete"}
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No listings found.</p>
      )}
    </div>
  );
};

export default MyListing;
