"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, ControllerRenderProps } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import { useAddListingsMutation } from "@/redux/features/landlordApi/listingsApiLandlord";
import { useAppSelector } from "@/redux/hooks";
import { useCurrentUser } from "@/redux/features/auth/authSlice";


// 1. Form Schema
const formSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  squareFeet: z.coerce.number().min(1, "Square footage must be at least 1"),
  location: z.string().min(1, "Location is required"),
  rentAmount: z.coerce.number().min(1, "Rent amount must be at least 1"),
  bedrooms: z.coerce.number().min(0, "Bedrooms cannot be negative"),
  amenities: z.array(z.string()).optional(),
  images: z.array(z.string().url("Must be a valid URL")).min(1, "At least one image is required"),
});

// 2. Infer the type
type AddListingFormValues = z.infer<typeof formSchema>;

interface CurrentUser {
  userId: string;

}


export function AddListing() {

  const [addListings] = useAddListingsMutation()
  const user  = useAppSelector(useCurrentUser) as CurrentUser | null;
  const userId: string | undefined = user?.userId;
 

  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<AddListingFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      squareFeet: 0,
      location: "",
      rentAmount: 0,
      bedrooms: 0,
      amenities: [],
      images: [""],
    },
  });

  async function onSubmit(values: AddListingFormValues) {
    setIsSubmitting(true);
    try {
      const listingData = {
        ...values,
         landlordId: userId
      };
      // console.log(listingData)

      await addListings(listingData).unwrap();
      toast({
        title: "Success",
        description: "Listing created successfully",
      });
      form.reset();
 
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {/* Title */}
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Enter property title" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Description */}
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea placeholder="Describe your property in detail" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Grid for squareFeet, rentAmount, bedrooms, location */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="squareFeet"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Square Feet</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="0" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="rentAmount"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Rent Amount ($)</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="0" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="bedrooms"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Bedrooms</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="0" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Location</FormLabel>
                <FormControl>
                  <Input placeholder="Enter property location" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

       

        {/* Images */}
        <FormField
          control={form.control}
          name="images"
          render={({ field }: { field: ControllerRenderProps<AddListingFormValues, "images"> }) => (
            <FormItem>
              <FormLabel>Images (Paste image URLs)</FormLabel>
              <div className="space-y-2">
                {field.value.map((url, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Input
                      placeholder="https://example.com/image.jpg"
                      value={url}
                      onChange={(e) => {
                        const newImages = [...field.value];
                        newImages[index] = e.target.value;
                        field.onChange(newImages);
                      }}
                    />
                    <Button
                      type="button"
                      variant="destructive"
                      size="icon"
                      onClick={() => {
                        const newImages = field.value.filter((_, i) => i !== index);
                        field.onChange(newImages.length > 0 ? newImages : [""]);
                      }}
                    >
                      ✕
                    </Button>
                  </div>
                ))}
                <Button
                  type="button"
                  variant="secondary"
                  onClick={() => field.onChange([...field.value, ""])}
                >
                  Add another image
                </Button>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Submit Button */}
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Add Listing"}
        </Button>
      </form>
    </Form>
  );
}
