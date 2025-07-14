/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useEffect, useState } from "react";
import { useUser } from "@/context/UserContext";
import Image from "next/image";
import Link from "next/link";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";
import { IListing } from "@/type";

const MyListing = () => {
  const user = useUser();
  const userId = user?.user?.userId;

  const [rentalData, setRentalData] = useState<IListing[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!userId) return;
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_API}/listingsed/${userId}`
        );
        const result = await res.json();
        if (result?.success && Array.isArray(result?.data)) {
          setRentalData(result.data);
        } else {
          setRentalData([]);
        }
      } catch (err) {
        setError("Failed to load listings.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [userId]);

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this listing?")) return;

    setDeletingId(id);

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_API}/listingsDelete/${id}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
        }
      );
      const result = await res.json();
      if (result?.success) {
        setRentalData((prev) => prev.filter((item) => item._id !== id));
      } else {
        alert("Failed to delete listing");
      }
    } catch (err) {
      alert("Error deleting listing");
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6">My Listings</h2>

      {isLoading ? (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Image</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Rent</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Array.from({ length: 3 }).map((_, i) => (
              <TableRow key={i}>
                <TableCell>
                  <Skeleton className="w-20 h-12 rounded" />
                </TableCell>
                <TableCell>
                  <Skeleton className="w-32 h-4" />
                </TableCell>
                <TableCell>
                  <Skeleton className="w-24 h-4" />
                </TableCell>
                <TableCell>
                  <Skeleton className="w-16 h-4" />
                </TableCell>
                <TableCell>
                  <Skeleton className="w-20 h-4" />
                </TableCell>
                <TableCell className="text-right space-x-2">
                  <Skeleton className="h-8 w-16 inline-block" />
                  <Skeleton className="h-8 w-16 inline-block" />
                  <Skeleton className="h-8 w-16 inline-block" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : rentalData.length === 0 ? (
        <p>No listings found.</p>
      ) : (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Image</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Rent</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rentalData.map((listing) => (
              <TableRow key={listing._id}>
                <TableCell>
                  {listing.images?.[0] ? (
                    <div className="w-20 h-12 relative">
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
                </TableCell>
                <TableCell className="font-medium">{listing.title}</TableCell>
                <TableCell>{listing.location}</TableCell>
                <TableCell>${listing.rentAmount}</TableCell>
                <TableCell>{listing.status}</TableCell>
                <TableCell className="text-right space-x-2">
                  <Link
                    href={`/listings/${listing._id}`}
                    className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700"
                  >
                    Details
                  </Link>
                  <Link
                    href={`/listings/update/${listing._id}`}
                    className="px-3 py-1 text-sm bg-primary text-white rounded hover:bg-primary"
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
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
};

export default MyListing;
