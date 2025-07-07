"use client";

import React, { useState } from 'react';
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
import SearchCard from './SearchCard';
import { IListing } from '@/type';



interface SearchParams {
  bedrooms?: string;
  priceRange?: string;
  location?: string;
}

const Banner = () => {
  const [searchParams, setSearchParams] = useState<SearchParams>({
    bedrooms: '',
    priceRange: '',
    location: ''
  });
  const [searchResults, setSearchResults] = useState<IListing[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSearchParams(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setSearchParams(prev => ({ ...prev, location: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch(
        `http://localhost:5000/api/v1/search?bedrooms=${searchParams.bedrooms}&price=${searchParams.priceRange}&location=${searchParams.location}`
      );
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      const data = await response.json();
      if (data.success && data.data) {
        setSearchResults(data.data);
      } else {
        setError('No results found');
        setSearchResults([]);
      }
    } catch (error) {
      console.error('Error during search:', error);
      setError('Failed to fetch results. Please try again.');
      setSearchResults([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`relative ${styles.banner} bg-cover bg-center bg-no-repeat py-32`}>
      {/* Overlay */}
      
      <div className="absolute inset-0 bg-black/40" />
      
      <div className="container relative z-10 mx-auto px-4 text-center">
        {/* Headings */}
        <p className="text-lg font-medium text-white">Find Your Perfect Rental House Today!</p>
        <h1 className="my-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
          Find Your <br />
          <span className="text-primary">Dream Home</span>
        </h1>

        {/* Search Form */}
        <form onSubmit={handleSubmit} className="mx-auto max-w-4xl rounded-lg bg-white p-4 shadow-lg">
          <div className="flex flex-col gap-4 md:flex-row">
            <Input
              name="bedrooms"
              placeholder="Number of bedrooms"
              className="h-14 text-lg"
              value={searchParams.bedrooms}
              onChange={handleInputChange}
              type="number"
              min="1"
            />
            
            <Input
              name="priceRange"
              placeholder="Price Range"
              className="h-14 text-lg"
              value={searchParams.priceRange}
              onChange={handleInputChange}
              type="number"
              min="0"
            />
            
            <Select onValueChange={handleSelectChange} value={searchParams.location}>
              <SelectTrigger className="h-14 text-lg">
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="gulsan">Gulshan</SelectItem>
                <SelectItem value="mohakhali">Mohakhali</SelectItem>
                <SelectItem value="dhaka">Dhaka</SelectItem>
                <SelectItem value="malibagh">Malibagh</SelectItem>
              </SelectContent>
            </Select>
            
            <Button type="submit" className="h-14 gap-2 text-lg font-semibold">
              {loading ? 'Searching...' : (
                <>
                  <Search className="h-5 w-5" />
                  Search Now
                </>
              )}
            </Button>
          </div>
        </form>

        {/* Search Results */}
        {loading && <div className="mt-8 text-white">Loading...</div>}
        {error && <div className="mt-8 text-red-500">{error}</div>}
        
        {searchResults.length > 0 && (
          <div className="mt-8 text-left">
            <h2 className="mb-4 text-2xl font-bold text-white">Search Results</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {searchResults.map((listing : IListing) => (
                <SearchCard key={listing._id} listing={listing} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Banner;