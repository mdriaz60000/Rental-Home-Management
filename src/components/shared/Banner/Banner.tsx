"use client";

import React, { useState } from 'react';
import { useRouter } from "next/navigation";
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import styles from "./Banner.module.css";

interface SearchParams {
  location?: string;
}

const Banner = () => {
  const [searchParams, setSearchParams] = useState<SearchParams>({ location: '' });
  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchParams({ location: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const location = searchParams.location?.trim();
    if (!location) return;
    router.push(`/search?location=${encodeURIComponent(location)}`);
  };

  return (
    <div className={`relative ${styles.banner} bg-cover bg-center bg-no-repeat py-32`}>
      <div className="absolute inset-0 bg-black/40" />

      <div className="container relative z-10 mx-auto px-4 text-center">
        <p className="text-lg font-medium text-white">Find Your Perfect Rental House Today!</p>
        <h1 className="my-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
          Find Your <br />
          <span className="text-primary">Dream Home</span>
        </h1>

        <form onSubmit={handleSubmit} className="mx-auto max-w-3xl rounded-lg bg-white p-4 shadow-lg">
          <div className="flex flex-col gap-4 md:flex-row">
            <Input
              name="location"
              placeholder="Enter location (e.g., Gulshan, Dhaka)"
              className="h-14 text-lg"
              value={searchParams.location}
              onChange={handleInputChange}
            />

            <Button type="submit" className="h-14 gap-2 text-lg font-semibold">
              <Search className="h-5 w-5" />
              Search Now
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Banner;
