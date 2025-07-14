/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { IListing } from "@/type";
import Link from "next/link";
import Image from "next/image";

const ListingManagement = ({ listings }: any) => {
  const [localListings, setLocalListings] = useState<IListing[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (listings?.data) {
      setLocalListings(listings.data);
    }
    setLoading(false);
  }, [listings]);

  const handleDelete = async (id: string) => {
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
      const data = await res.json();
      if (data?.success) {
        alert("Deleted successfully");
        setLocalListings((prev) => prev.filter((item) => item._id !== id));
      }
    } catch (error) {
      console.log("Error deleting listing:", error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Property Listings Management
      </h1>

      <div className="overflow-x-auto rounded-lg shadow border border-gray-200">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-100 text-gray-700 uppercase text-xs">
            <tr>
              <th className="px-4 py-3">Image</th>
              <th className="px-4 py-3">Title</th>
              <th className="px-4 py-3">Location</th>
              <th className="px-4 py-3">Rent</th>
              <th className="px-4 py-3 text-center">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y">
            {loading
              ? Array.from({ length: 3 }).map((_, index) => (
                  <tr key={index}>
                    <td className="px-4 py-3">
                      <Skeleton className="w-20 h-16 rounded" />
                    </td>
                    <td className="px-4 py-3">
                      <Skeleton className="h-4 w-32 rounded" />
                    </td>
                    <td className="px-4 py-3">
                      <Skeleton className="h-4 w-24 rounded" />
                    </td>
                    <td className="px-4 py-3">
                      <Skeleton className="h-4 w-16 rounded" />
                    </td>
                    <td className="px-4 py-3 text-center space-x-2">
                      <Skeleton className="h-8 w-20 inline-block rounded" />
                      <Skeleton className="h-8 w-20 inline-block rounded" />
                    </td>
                  </tr>
                ))
              : localListings.length === 0 ? (
                <tr>
                  <td colSpan={5} className="text-center py-6 text-gray-500">
                    No listings found.
                  </td>
                </tr>
              ) : (
                localListings.map((listing) => (
                  <tr key={listing._id} className="hover:bg-gray-50">
                    <td className="px-4 py-3">
                      {listing?.images?.[0] ? (
                        <div className="w-20 h-16 relative">
                          <Image
                            src={listing.images[0]}
                            alt={listing.title}
                            fill
                            className="object-cover rounded"
                          />
                        </div>
                      ) : (
                        <span className="text-gray-400">No image</span>
                      )}
                    </td>
                    <td className="px-4 py-3 font-medium">{listing.title}</td>
                    <td className="px-4 py-3">{listing.location}</td>
                    <td className="px-4 py-3 text-green-700 font-semibold">
                      ${Number(listing.rentAmount)}
                    </td>
                    <td className="px-4 py-3 text-center space-x-2">
                      <Link href={`/listings/${listing._id}`}>
                        <Button size="sm" className="bg-primary text-white hover:bg-primary">
                          Details
                        </Button>
                      </Link>
                      <Button
                        size="sm"
                        className="bg-red-600 text-white hover:bg-red-700"
                        onClick={() => handleDelete(listing._id)}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))
              )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListingManagement;
