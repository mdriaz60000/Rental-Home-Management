"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

const PopularProperties = () => {
  const properties = [
    {
      category: "FOR SALE",
      title: "Home in Metric Way",
      address: "1421 San Pedro St, Los Angeles",
      img: "https://code-theme.com/html/findhouses/images/blog/b-11.jpg",
      features: [
        { label: "Br", value: "3" },
        { label: "Bo", value: "3" },
        { label: "Sq.Ft", value: "3300" },
        { label: "Gr", value: "1" },
      ],
      featured: false,
      rent: true,
    },
    {
      category: "FEATURED",
      title: "Garden House",
      address: "1421 San Pedro St, Los Angeles",
      img: "https://code-theme.com/html/findhouses/images/blog/b-1.jpg",
      features: [
        { label: "Br", value: "3" },
        { label: "Bo", value: "3" },
        { label: "Sq.Ft", value: "2300" },
        { label: "Gr", value: "1" },
      ],
      featured: true,
      rent: true,
    },
    {
      category: "FOR SALE",
      title: "Affordable Urban House",
      address: "1421 San Pedro St, Los Angeles",
      img: "https://code-theme.com/html/findhouses/images/feature-properties/fp-10.jpg",
      features: [
        { label: "Br", value: "3" },
        { label: "Bo", value: "3" },
        { label: "Sq.Ft", value: "2300" },
        { label: "Gr", value: "1" },
      ],
      featured: false,
    },
  ];

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-2">POPULAR PROPERTIES</h2>
        <p className="text-lg text-gray-600">Check Out Our Popular Properties</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {properties.map((property, index) => (
          <div 
            key={index} 
            className="rounded-lg overflow-hidden shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300"
          >
            
            <div className="h-48 relative">
              <Image
                src={property.img}
                alt={property.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              {property.featured && (
                <Badge variant="default" className="absolute top-4 left-4 bg-primary">
                  FEATURED
                </Badge>
              )}
              {property.rent && (
                <Badge variant="default" className="absolute top-4 right-4 bg-green-500">
                  FOR RENT
                </Badge>
              )}
            </div>

            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold">{property.title}</h3>
                <Badge variant="outline" className="text-sm">
                  {property.category}
                </Badge>
              </div>

              <p className="text-gray-600 mb-4">{property.address}</p>

              <div className="grid grid-cols-4 gap-2 mb-6">
                {property.features.map((feature, i) => (
                  <div key={i} className="text-center">
                    <p className="font-bold">{feature.value}</p>
                    <p className="text-xs text-gray-500">{feature.label}</p>
                  </div>
                ))}
              </div>

              <Button className="w-full">View Details</Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularProperties;