import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const PropertyPages = async () => {
    const res = await fetch("http://localhost:5000/api/v1/property", {
        next: {
          revalidate: 30,
        },
      });
      const text = await res.text();
      const data = JSON.parse(text);
      console.log(data)
    return (
        <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
           <h2 className="text-3xl font-bold mb-2">POPULAR PROPERTIES</h2>
           <p className="text-lg text-gray-600">Check Out Our Popular Properties</p>
         </div>
         
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           {data?.data.map((property) => (
             <div key={property._id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
               {/* Property Image - You might want to add a default image if img[0] is not available */}
               <div className="relative h-48 w-full bg-gray-100">
                 
                   <Image
                     src={property.RepresentativeImages}
                     alt={property.title}
                     fill
                     className="object-cover"
                     sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                   />      
               </div>
               
               {/* Property Details */}
               <div className="p-4">
                 <div className="flex justify-between items-start mb-2">
                   <div>
                     <h3 className="text-xl font-semibold">{property.title}</h3>
                     <p className="text-sm text-gray-500">{property.location}</p>
                   </div>
                   <Badge variant="secondary" className="bg-green-100 text-green-800">
                     ${property.rentAmount}/mo
                   </Badge>
                 </div>
                 
                 <p className="text-gray-600 mb-4 line-clamp-2">{property.description}</p>
                 
                 <div className="flex flex-wrap gap-2 mb-4">
                   <div className="flex items-center text-sm text-gray-600">
                     <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                     </svg>
                     {property.bedrooms || 'N/A'} {property.numberOfBedrooms === 1 ? 'Bed' : 'Beds'}
                   </div>
                   
                   <div className="flex items-center text-sm text-gray-600">
                     <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                     </svg>
                     {property.squareFeet} sqft
                   </div>
                 </div>
                 
                 <Button asChild className="w-full">
                   <Link href={`/property/${property._id}`} className="bg-blue-600 hover:bg-blue-700">
                     View Details
                   </Link>
                 </Button>
               </div>
             </div>
           ))}
         </div>
         <div className="text-center mt-10">
           <button className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium">
              All Property
           </button>
         </div>
   
       </div>
    );
};

export default PropertyPages;