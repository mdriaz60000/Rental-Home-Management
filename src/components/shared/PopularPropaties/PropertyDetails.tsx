"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useGetPropertyQuery } from "@/redux/features/CommonApi/ListingApi";
import RentRequestForm from "./RentRequest";

interface Property {
  _id: string;
  title: string;
  location: string;
  rentAmount: number;
  bedrooms: number;
  squareFeet: number;
  description: string;
  Amenities: string[];
  RepresentativeImages: string;
  MultipleImage: string[];
  // Add other property fields as needed
}

const PropertyDetails = ({ propertyId }: { propertyId: string }) => {
  const { data, error, isLoading } = useGetPropertyQuery(undefined);
  const [property, setProperty] = useState<Property | null>(null);
 

  useEffect(() => {
    if (data?.success && data.data?.length && propertyId) {
      const foundProperty = data.data.find((property: Property) => property._id === propertyId);
      setProperty(foundProperty || null);
    }
  }, [data, propertyId]);

  if (isLoading) return <div className="text-center py-8">Loading properties...</div>;
  if (error) return <div className="text-center py-8 text-red-500">Error loading properties</div>;
  if (!property) return <div className="text-center py-8">No property found</div>;

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
      {/* Image Gallery with Carousel */}
      <div className="relative h-96 w-full">
        <Carousel className="w-full h-full">
          <CarouselContent>
            <CarouselItem>
              <div className="relative h-96 w-full">
                <Image
                  src={property.RepresentativeImages}
                  alt={property.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </CarouselItem>
            {property.MultipleImage.map((img, index) => (
              <CarouselItem key={index}>
                <div className="relative h-96 w-full">
                  <Image
                    src={img}
                    alt={`${property.title} - ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10" />
          <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10" />
        </Carousel>
      </div>

      {/* Property Details */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">{property.title}</h1>
            <div className="flex items-center mt-1">
              <svg className="w-4 h-4 text-gray-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-gray-600">{property.location}</span>
            </div>
          </div>
          <Badge className="bg-green-100 text-green-800 text-lg px-3 py-1">
            ${property.rentAmount.toLocaleString()}/mo
          </Badge>
        </div>

        {/* Key Features */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-6">
          <div className="bg-gray-50 p-3 rounded-lg text-center">
            <div className="text-gray-500 text-sm">Bedrooms</div>
            <div className="text-xl font-semibold">{property.bedrooms}</div>
          </div>
          <div className="bg-gray-50 p-3 rounded-lg text-center">
            <div className="text-gray-500 text-sm">Area</div>
            <div className="text-xl font-semibold">{property.squareFeet} sqft</div>
          </div>
          <div className="bg-gray-50 p-3 rounded-lg text-center">
            <div className="text-gray-500 text-sm">Type</div>
            <div className="text-xl font-semibold">Apartment</div>
          </div>
          <div className="bg-gray-50 p-3 rounded-lg text-center">
            <div className="text-gray-500 text-sm">Availability</div>
            <div className="text-xl font-semibold">Immediate</div>
          </div>
        </div>

        {/* Description */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2 text-gray-800">Description</h2>
          <p className="text-gray-600 leading-relaxed">{property.description}</p>
        </div>

        {/* Amenities */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-3 text-gray-800">Amenities</h2>
          <div className="flex flex-wrap gap-3">
            {property.Amenities.map((amenity, index) => (
              <Badge key={index} variant="outline" className="px-4 py-2 bg-blue-50 text-blue-700">
                {amenity}
              </Badge>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        {/* <div className="flex flex-col sm:flex-row gap-4">
          <Button className="bg-blue-600 hover:bg-blue-700 flex-1 py-6 text-lg">
            Contact Agent
          </Button>
          <Button variant="outline" className="flex-1 py-6 text-lg border-blue-600 text-blue-600 hover:bg-blue-50">
            Schedule Visit
          </Button>
        </div> */}
        <div>
    <RentRequestForm></RentRequestForm>
        </div>
        {/* //last */}
      </div>
    </div>
  );
};

export default PropertyDetails;