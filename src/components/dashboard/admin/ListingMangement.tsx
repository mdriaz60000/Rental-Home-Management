"use client"
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useGetAdminListingQuery } from "@/redux/features/AdminApi/adminListing";
import { IListing } from "@/type";
import Image from "next/image";

const ListingManagement = () => {
  const { data, isLoading, error } = useGetAdminListingQuery(undefined);
  
  if (isLoading) return (
    <div className="flex justify-center items-center h-64">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
    </div>
  );
  
  if (error) return (
    <div className="bg-red-50 border-l-4 border-red-500 p-4">
      <div className="flex">
        <div className="flex-shrink-0">
          <svg className="h-5 w-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
        <div className="ml-3">
          <p className="text-sm text-red-700">Error loading property listings</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Property Listings Management</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data?.data.map((listing : IListing) => (
          <div key={listing._id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100">
            {/* Property Image */}
            <div className="relative h-48 w-full">
              {listing.images?.length > 0 ? (
                <Image
                  src={listing.images[0]}
                  alt={listing.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              ) : (
                <div className="bg-gray-100 h-full w-full flex items-center justify-center">
                  <svg className="h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
              )}
            </div>
            
            {/* Property Details */}
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-800">{listing.title}</h3>
                  <div className="flex items-center mt-1 text-gray-600">
                    <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-sm">{listing.location}</span>
                  </div>
                </div>
                <Badge variant="secondary" className="bg-blue-50 text-blue-600 px-3 py-1">
                  <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {listing.rentAmount.toLocaleString()}/mo
                </Badge>
              </div>
              
              <p className="text-gray-600 mb-4 line-clamp-2">{listing.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {listing.amenities?.map((amenity, index) => (
                  <Badge key={index} variant="outline" className="text-xs">
                    {amenity}
                  </Badge>
                ))}
              </div>
              
              <div className="grid grid-cols-2 gap-2 mb-4">
                <div className="flex items-center text-sm text-gray-600">
                  <span className="font-medium mr-1">Bedrooms:</span>
                  {listing.bedrooms}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="font-medium mr-1">Area:</span>
                  {listing.squareFeet} sq.ft
                </div>
              </div>
              
              <div className="flex items-center mb-4">
                <Badge 
                  variant={listing.status?.trim() === "pending" ? "secondary" : listing.status?.trim() === "approved" ? "default" : "destructive"}
                  className="capitalize"
                >
                  {listing.status?.trim()}
                </Badge>
              </div>
              
              <div className="flex justify-between gap-3">
                <Button className="flex-1 bg-green-600 hover:bg-green-700" size="sm">
                  <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Approve
                </Button>
                <Button variant="outline" className="flex-1" size="sm">
                  <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Reject
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListingManagement;