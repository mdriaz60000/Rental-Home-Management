/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
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
    console.log("Delete ID:", id);
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
      console.log("Delete response:", data);

      if (data?.success) {
        alert("Deleted successfully");

        setLocalListings((prevListings) =>
          prevListings.filter((listing) => listing._id !== id)
        );
      }
    } catch (error) {
      console.log("Error deleting listing:", error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">
        Property Listings Management
      </h1>

      {loading ? (
        <div className="text-center text-gray-500">Loading...</div>
      ) : localListings.length === 0 ? (
        <div className="text-center text-gray-500">No listings found.</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {localListings.map((listing: IListing) => (
            <div
              key={listing._id}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200"
            >
              {/* Image */}
              {listing?.images?.[0] && (
                <div className="relative h-48 w-full">
                  <Image
                    src={listing.images[0]}
                    alt={listing.title || "Property Image"}
                    fill
                    className="object-cover"
                  />
                </div>
              )}

              {/* Content */}
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-900 mb-1">
                  {listing.title}
                </h2>
                <p className="text-sm text-gray-600 mb-2">{listing.location}</p>
                <p className="text-lg font-medium text-green-700 mb-4">
                  Rent: ${Number(listing.rentAmount)}
                </p>

                <div className="flex gap-3">
                  <Link href={`/listings/${listing._id}`}>
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                      Details
                    </Button>
                  </Link>

                  <Button
                    onClick={() => handleDelete(listing._id)}
                    className="bg-red-600 hover:bg-red-700 text-white"
                  >
                    Delete
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ListingManagement;
