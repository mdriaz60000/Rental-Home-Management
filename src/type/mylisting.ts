export type MyListing = {
  id: string;
  _id: string;
  title: string;
  description: string;
  squareFeet: number;
  location: string;
  rentAmount: number;
  bedrooms: number;
  amenities: string[];
  images: string[];
  createdAt: string;
  status : boolean
};