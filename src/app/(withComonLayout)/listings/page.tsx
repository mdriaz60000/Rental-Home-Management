"use client";

import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { IListing } from "@/type";
import Image from "next/image";
import Link from "next/link";

const LIMIT = 6;

const ListingsPages = () => {
  const [listings, setListings] = useState<IListing[]>([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);

  const fetchListings = async (pageNum: number) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_API}/listings?page=${pageNum}&limit=${LIMIT}`,
        { cache: "no-store" }
      );
      const result = await res.json();
      setListings(result?.data?.data || []);
      setTotal(result?.data?.meta?.total || 0);
    } catch (err) {
      console.error("Error fetching listings", err);
    }
  };

  useEffect(() => {
    fetchListings(page);
  }, [page]);

  const totalPages = Math.ceil(total / LIMIT);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-serif mb-2">POPULAR Listings</h2>
        <p className="text-lg text-gray-600">Check Out Our Popular Listings</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {listings.map((listing) => (
          <div
            key={listing._id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
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
                <div className="h-full w-full flex items-center justify-center text-gray-500">
                  No Image
                </div>
              )}
            </div>

            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-xl font-semibold">{listing.title}</h3>
                  <p className="text-sm text-gray-500">{listing.location}</p>
                </div>
                <Badge variant="secondary" className="bg-green-100 text-green-800">
                  ${listing.rentAmount}/mo
                </Badge>
              </div>

              <p className="text-gray-600 mb-4 line-clamp-2">{listing.description}</p>

              <div className="flex flex-wrap gap-2 mb-4 text-sm text-gray-600">
                {listing.bedrooms && <div>🛏 {listing.bedrooms} Beds</div>}
                {listing.squareFeet && <div>📐 {listing.squareFeet} sqft</div>}
              </div>

              <Button asChild className="w-full">
                <Link href={`/listings/${listing._id}`}>View Details</Link>
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Buttons */}
      <div className="flex justify-center gap-4 mt-10">
        <Button
          variant="outline"
          onClick={() => setPage((prev) => prev - 1)}
          disabled={page === 1}
        >
          ⬅ Previous
        </Button>
        <span className="text-sm text-gray-700 pt-2">
          Page {page} of {totalPages}
        </span>
        <Button
          variant="outline"
          onClick={() => setPage((prev) => prev + 1)}
          disabled={page === totalPages}
        >
          Next ➡
        </Button>
      </div>
    </div>
  );
};

export default ListingsPages;
