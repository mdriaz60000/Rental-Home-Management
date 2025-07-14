"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { IListing } from "@/type";




const DiscoverListing = () => {
  const [listings, setListings] = useState<IListing[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/listings`);
        const data = await res.json();
        setListings(data?.data?.data || []);
      } catch (error) {
        console.error("Failed to fetch listings:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchListings();
  }, []);

  return (
    <section className="py-12 px-4 md:px-8 bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900 transition-colors">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold font-serif mb-3 text-gray-900 dark:text-white">
          Discover Listings
        </h2>
        <p className="text-lg text-muted-foreground">
          Find your perfect place to live from our top listings
        </p>
      </div>

      {loading ? (
        <p className="text-center text-muted-foreground">Loading listings...</p>
      ) : listings.length === 0 ? (
        <p className="text-center text-muted-foreground">No listings found.</p>
      ) : (
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
{listings.slice(0, 3).map((listing) => (
  <Card
    key={listing._id}
    className="rounded-3xl overflow-hidden bg-white dark:bg-gray-800 shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group"
  >
    <div className="relative h-56 w-full overflow-hidden">
      <Image
        src={listing.images[0]}
        alt={listing.title}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
      />
      {/* 👇 Hidden Button on Hover */}
      <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <Link href={`/listings/${listing._id}`}>
          <Button  className="w-36 bg-primary">
            View Details
          </Button>
        </Link>
      </div>
    </div>
    <CardContent className="p-5 space-y-3">
      <h3 className="text-xl font-semibold text-gray-800 dark:text-white truncate">
        {listing.title}
      </h3>
      <p className="text-sm text-muted-foreground">{listing.location}</p>
   
    </CardContent>
  </Card>
))}

        </div>
      )}
    </section>
  );
};

export default DiscoverListing;
