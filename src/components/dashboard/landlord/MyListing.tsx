"use client";

import { useCurrentUser } from "@/redux/features/auth/authSlice";
import { useGetListingLandlordQuery } from "@/redux/features/landlordApi/listingsApiLandlord";
import { useAppSelector } from "@/redux/hooks";
import { Skeleton } from "@/components/ui/skeleton";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

type Listing = {
  id: string;
  title: string;
  description: string;
  landlordId: string;
  bedrooms: number;
  rentAmount: number;
  squareFeet: number;
  location: string;
  status: "pending" | "approved" | "rejected";
  images: string[];
  isAvailable: boolean;

};

interface CurrentUser {
  userId: string;

}
const MyListing = () => {
  const currentUser = useAppSelector(useCurrentUser) as CurrentUser | null;
  const { data, isLoading, isError } = useGetListingLandlordQuery(undefined);

  const userListings: Listing[] | undefined = data?.data?.filter(
    (listing: Listing) => listing.landlordId === currentUser?.userId
  );

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="border rounded-lg p-4 space-y-4">
            <Skeleton className="h-48 w-full rounded-t-lg" />
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-2/3" />
            <div className="flex gap-2">
              <Skeleton className="h-4 w-16" />
              <Skeleton className="h-4 w-16" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (isError) {
    return (
      <Alert variant="destructive">
        <AlertDescription>
          Failed to load listings. Please try again later.
        </AlertDescription>
      </Alert>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">My Listings</h1>
      
      {userListings?.length ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {userListings.map((listing) => (
            <div 
              key={listing.id} 
              className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              {/* Property Image */}
              {listing.images?.length > 0 ? (
                <div className="relative h-48 w-full">
                  <Image
                    src={listing.images[0]}
                    alt={listing.title}
                    fill
                    className="object-cover"
                  />
                </div>
              ) : (
                <div className="h-48 bg-gray-100 flex items-center justify-center">
                  <span className="text-gray-400">No Image</span>
                </div>
              )}
              
              {/* Property Details */}
              <div className="p-4 space-y-3">
                <div className="flex justify-between items-start">
                  <h2 className="text-xl font-semibold">{listing.title}</h2>
                  <Badge 
                    variant={
                      listing.status === "approved" ? "default" : 
                      listing.status === "pending" ? "secondary" : "destructive"
                    }
                  >
                    {listing.status}
                  </Badge>
                </div>
                
                <p className="text-gray-600 line-clamp-2">{listing.description}</p>
                
                <div className="flex items-center gap-2 text-sm">
                  <span className="font-medium">{listing.bedrooms} beds</span>
                  <span>•</span>
                  <span>{listing.squareFeet} sq.ft</span>
                  <span>•</span>
                  <span>{listing.location}</span>
                </div>
                
                <div className="flex justify-between items-center pt-2">
                  <span className="text-lg font-bold">
                    ${listing.rentAmount.toLocaleString()}/mo
                  </span>
                  <Badge variant={listing.isAvailable ? "default" : "destructive"}>
                    {listing.isAvailable ? "Available" : "Rented"}
                  </Badge>
                </div>
                
 
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <h3 className="text-xl font-medium text-gray-500 mb-2">
            You do not have any listings yet
          </h3>
          <p className="text-gray-400">
            Create your first listing to get started
          </p>
        </div>
      )}
    </div>
  );
};

export default MyListing;