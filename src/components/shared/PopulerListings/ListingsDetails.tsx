"use client";

import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import RentRequestForm from "./RentRequest";
import { IListing } from "@/type";


const ListingsDetails = ({listings}: {listings: IListing}) => {
  

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
      {/* Image Gallery with Carousel */}
      <div className="relative h-96 w-full">
        {listings.images?.length > 0 ? (
          <Carousel className="w-full h-full">
            <CarouselContent>
              {listings.images.map((img, index) => (
                <CarouselItem key={index}>
                  <div className="relative h-96 w-full">
                    <Image
                      src={img}
                      alt={`${listings.title} - ${index + 1}`}
                      fill
                      className="object-cover"
                      priority={index === 0}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10" />
            <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10" />
          </Carousel>
        ) : (
          <div className="h-full w-full bg-gray-100 flex items-center justify-center">
            <span className="text-gray-400">No images available</span>
          </div>
        )}
      </div>

      {/* Property Details */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">{listings.title}</h1>
            <div className="flex items-center mt-1">
              <svg className="w-4 h-4 text-gray-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-gray-600">{listings.location}</span>
            </div>
          </div>
          <Badge className="bg-primary text-white text-lg px-3 py-1">
            ${listings.rentAmount}/mo
          </Badge>
        </div>

        {/* Key Features */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-6">
          <div className="bg-gray-50 p-3 rounded-lg text-center">
            <div className="text-gray-500 text-sm">Bedrooms</div>
            <div className="text-xl font-semibold">{listings.bedrooms}</div>
          </div>
          <div className="bg-gray-50 p-3 rounded-lg text-center">
            <div className="text-gray-500 text-sm">Area</div>
            <div className="text-xl font-semibold">{listings.squareFeet} sqft</div>
          </div>
          <div className="bg-gray-50 p-3 rounded-lg text-center">
            <div className="text-gray-500 text-sm">Type</div>
            <div className="text-xl font-semibold">Apartment</div>
          </div>
          <div className="bg-gray-50 p-3 rounded-lg text-center">
            <div className="text-gray-500 text-sm">Status</div>
            <div className="text-xl font-semibold capitalize">{listings.status}</div>
          </div>
        </div>

        {/* //flex */}
        <div className="md:flex gap-6">
          <section>
                    {/* Description */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2 text-gray-800">Description</h2>
          <p className="text-gray-600 leading-relaxed whitespace-pre-line">{listings.description}</p>
        </div>

        {/* Amenities */}
        {listings.amenities?.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-3 text-gray-800">Amenities</h2>
            <div className="flex flex-wrap gap-3">
              {listings.amenities.map((amenity, index) => (
                <Badge key={index} variant="outline" className="px-4 py-2 bg-blue-50 text-primary">
                  {amenity}
                </Badge>
              ))}
            </div>
          </div>
        )}
          </section>
          <section>
            <RentRequestForm listings={listings}/>
          </section>
        </div>


      </div>
    </div>
  );
};

export default ListingsDetails;