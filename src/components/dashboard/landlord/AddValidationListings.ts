import { z } from "zod";

export const formSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  squareFeet: z.coerce.number().min(1, "Square footage must be at least 1"),
  location: z.string().min(1, "Location is required"),
  rentAmount: z.coerce.number().min(1, "Rent amount must be at least 1"),
  bedrooms: z.coerce.number().min(0, "Bedrooms cannot be negative"),
  amenities: z.array(z.string()).optional(),
  images: z.array(z.string().url("Must be a valid URL")).min(1, "At least one image is required"),
});