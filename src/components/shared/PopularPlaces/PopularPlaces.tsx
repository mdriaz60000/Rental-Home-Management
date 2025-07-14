"use client";

import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const PopularPlaces = () => {
  const router = useRouter();

  const popularCities = [
    { name: "Dhaka", properties: 73, img: "https://code-theme.com/html/findhouses/images/feature-properties/fp-1.jpg" },
    { name: "Mohammadpur", properties: 19, img: "https://code-theme.com/html/findhouses/images/feature-properties/fp-2.jpg" },
    { name: "Mohakhali", properties: 22, img: "https://code-theme.com/html/findhouses/images/feature-properties/fp-3.jpg" },
    { name: "Badda", properties: 14, img: "https://code-theme.com/html/findhouses/images/feature-properties/fp-4.jpg" },
    { name: "New Dhaka", properties: 48, img: "https://code-theme.com/html/findhouses/images/feature-properties/fp-5.jpg" },
    { name: "Gulsan", properties: 30, img: "https://code-theme.com/html/findhouses/images/feature-properties/fp-6.jpg" }
  ];

  // Optional: sort A-Z before displaying
  const sortedCities = [...popularCities].sort((a, b) => a.name.localeCompare(b.name));

  const handleCityClick = (cityName: string) => {
    router.push(`/search?location=${encodeURIComponent(cityName)}`);
  };

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">POPULAR PLACES</h2>
        <p className="text-lg text-gray-600">Explore Our Most Popular Locations</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedCities.map((city, index) => (
          <Card
            key={index}
            onClick={() => handleCityClick(city.name)}
            className="group relative cursor-pointer overflow-hidden rounded-lg hover:shadow-lg transition-shadow duration-300"
          >
            <div className="h-64 relative">
              <Image
                src={city.img}
                alt={city.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/30 transition-opacity duration-300 group-hover:bg-black/40" />
            </div>

            <CardContent className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-xl font-bold">{city.name}</h3>
              <p className="text-sm">{city.properties} Properties</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default PopularPlaces;
