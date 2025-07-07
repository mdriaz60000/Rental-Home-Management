// types/listing.ts
export interface IListing {
    _id: string;
    title: string;
    landlordId: string;
    description: string;
    images: string[];
    rentAmount: number;
    squareFeet: number;
    bedrooms: number;
    amenities: string[];
    location: string;
    status: "pending" | "approved" | "rejected"; // or string if you have more statuses
    isAvailable: boolean;
    createdAt: string;
    updatedAt: string;
    __v: number;
  }
  
  // Response type for your API query
  export interface IListingApiResponse {
    success: boolean;
    message: string;
    data: IListing[];
  }