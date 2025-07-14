"use client";

import { useEffect, useState } from "react";
import ListingManagement from "@/components/dashboard/admin/ListingMangement";

export default function AdminListingsPage() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/listings`);
        const result = await res.json();
        console.log("Fetched listings:", result); 
        setListings(result.data);
      } catch (error) {
        console.error("Failed to fetch listings:", error);
      }
    };

    fetchListings();
  }, []);

  return (
    <div>
      <ListingManagement listings={listings} />
    </div>
  );
}
