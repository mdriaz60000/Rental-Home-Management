import React from "react";

import { IListing } from "@/type";
import { notFound } from "next/navigation";
import SearchCard from "@/components/shared/Banner/SearchCard";

interface SearchPageProps {
  searchParams: { location?: string };
}

const SearchPage = async ({ searchParams }: SearchPageProps) => {
  const location = searchParams.location?.trim();

  if (!location) {
    return (
      <div className="container py-10 text-center">
        <h1 className="text-2xl font-semibold">Please provide a location to search.</h1>
      </div>
    );
  }

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/search?location=${encodeURIComponent(location)}`,
      { cache: "no-store" } 
    );

    if (!res.ok) {
      throw new Error("Failed to fetch");
    }

    const data = await res.json();

    const listings: IListing[] = data?.data || [];

    if (listings.length === 0) {
      return (
        <div className="container py-10 text-center">
          <h1 className="text-2xl font-semibold">No listings found for {location}</h1>
        </div>
      );
    }

    return (
      <div className="container mx-auto px-4 py-10">
        <h1 className="mb-6 text-3xl font-bold">
          Results for <span className="text-primary">{location}</span>
        </h1>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {listings.map((listing) => (
            <SearchCard key={listing._id} listing={listing} />
          ))}
        </div>
      </div>
    );
  } catch (error) {
    console.error("Search error:", error);
    return notFound();
  }
};

export default SearchPage;
