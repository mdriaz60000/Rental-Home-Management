"use client";

import React from 'react';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import styles from "./Banner.module.css";

const Banner = () => {
  return (
    <div className={`relative ${styles.banner} bg-cover bg-center bg-no-repeat py-32`}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />
      
      <div className="container relative z-10 mx-auto px-4 text-center">
        {/* Headings */}
        <p className="text-lg font-medium text-white">We Live Over Million Properties For You</p>
        <h1 className="my-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
          Find Your <br />
          <span className="text-primary">Dream Home</span>
        </h1>

        {/* Tabs */}
        <div className="my-6 flex justify-center space-x-4">
          <Button variant="secondary" className="px-8 py-6 text-lg font-semibold">
            For Sale
          </Button>
          <Button variant="secondary" className="px-8 py-6 text-lg font-semibold">
            For Rent
          </Button>
        </div>

        {/* Search Form */}
        <div className="mx-auto max-w-4xl rounded-lg bg-white p-4 shadow-lg">
          <div className="flex flex-col gap-4 md:flex-row">
            <Input
              placeholder="Enter Keyword..."
              className="h-14 text-lg"
            />
            
            <Select>
              <SelectTrigger className="h-14 text-lg">
                <SelectValue placeholder="Property Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="house">House</SelectItem>
                <SelectItem value="apartment">Apartment</SelectItem>
                <SelectItem value="villa">Villa</SelectItem>
                <SelectItem value="office">Office</SelectItem>
              </SelectContent>
            </Select>
            
            <Select>
              <SelectTrigger className="h-14 text-lg">
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="new-york">New York</SelectItem>
                <SelectItem value="los-angeles">Los Angeles</SelectItem>
                <SelectItem value="chicago">Chicago</SelectItem>
                <SelectItem value="miami">Miami</SelectItem>
              </SelectContent>
            </Select>
            
            <Button className="h-14 gap-2 text-lg font-semibold">
              <Search className="h-5 w-5" />
              Search Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;