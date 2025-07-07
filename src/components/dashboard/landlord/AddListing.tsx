
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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
// import { toast } from "@/hooks/use-toast";
import { useUser } from "@/context/UserContext";
import { addListings } from "@/service/landlord";
import { formSchema } from "./AddValidationListings";



type AddListingFormValues = z.infer<typeof formSchema>;

export function AddListing() {
  const user = useUser();
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
        landlordId: user?.user?.userId,
        status: "pending", // Add default status
        isAvailable: true // Add default availability
      };
    console.log(listingData)
      const result = await addListings(listingData);
      console.log(result)
      

      // if (result.success) {
      //   toast({
      //     title: "Success",
      //     description: "Listing created successfully",
      //     variant: "default",
      //   });
      //   form.reset();
      // } else {
      //   toast({
      //     title: "Error",
      //     description: result.message || "Failed to create listing",
      //     variant: "destructive",
      //   }); 
      // }
    // } catch (error: any) {
    //   toast({
    //     title: "Error",
    //     description: "An unexpected error occurred",
    //     variant: "destructive",
    //   });
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
                <Textarea 
                  placeholder="Describe your property in detail" 
                  {...field} 
                  rows={5}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Grid for numeric inputs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="squareFeet"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Square Feet</FormLabel>
                <FormControl>
                  <Input 
                    type="number" 
                    min="1"
                    placeholder="0" 
                    {...field} 
                  />
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
                  <Input 
                    type="number" 
                    min="1"
                    placeholder="0" 
                    {...field} 
                  />
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
                  <Input 
                    type="number" 
                    min="0"
                    placeholder="0" 
                    {...field} 
                  />
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
                  <Input placeholder="Enter property address" {...field} />
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
          render={({ field }) => (
            <FormItem>
              <FormLabel>Image URLs</FormLabel>
              <div className="space-y-2">
                {field.value.map((url, index) => (
                  <div key={index} className="flex items-center gap-2">
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
                      disabled={field.value.length <= 1}
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

        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Add Listing"}
        </Button>
      </form>
    </Form>
  );
}