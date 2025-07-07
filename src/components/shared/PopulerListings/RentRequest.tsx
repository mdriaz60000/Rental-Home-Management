"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { format } from "date-fns";
import { useRouter, usePathname } from "next/navigation";
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
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { toast } from "sonner";
import { useUser } from "@/context/UserContext";
import { rentalRequest } from "@/service/rentalRequest";
import { IListing } from "@/type";

const FormSchema = z.object({
  phone: z.string({
    required_error: "Phone number is required",
  }).min(10, "Phone number must be at least 10 characters"),
  moveInDate: z.date({
    required_error: "A move-in date is required.",
  }),
  duration: z.string( {
    required_error: "Please select a rental duration.",
  }),
});

export default function RentRequestForm({ listings }: { listings: IListing }) {
   const listingsId = listings._id;
  
  const router = useRouter();
  const pathname = usePathname();
  const user = useUser();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      phone: "",
      moveInDate: undefined,
      duration:"",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    const rentId = user.user?.userId;

    if (!user || !rentId) {
      toast.error("You must be logged in to submit a rent request");
      router.push(`/login?redirectUrl=${encodeURIComponent(pathname)}`);
      return;
    }

    const formData = {
      ...data,
      rentId,
      listingsId,
      listings
    };
console.log(formData)
    const result = await rentalRequest(formData);

    if (result.success) {
      toast.success("Rent request submitted successfully!");
    } else {
      toast.error(result.error || "Failed to submit rent request.");
    }
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Month-to-Month Rent Request</h1>

      {!user && (
        <div className="mb-6 p-4 bg-yellow-50 border-l-4 border-yellow-400">
          <p className="text-yellow-700">
            You need to be logged in to submit a rent request. Please login or register to continue.
          </p>
          <Button
            onClick={() => router.push(`/login?redirectUrl=${encodeURIComponent(pathname)}`)}
            className="mt-2"
            variant="outline"
          >
            Login / Register
          </Button>
        </div>
      )}

      <p className="text-muted-foreground mb-8">
        Please fill out this form to request a month-to-month rental agreement.
        We will get back to you within 24 hours.
      </p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="(123) 456-7890"
                      {...field}
                      disabled={!user}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="moveInDate"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Move-in Date</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant="outline"
                          className="pl-3 text-left font-normal"
                          disabled={!user}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) =>
                          date < new Date() || date < new Date("1900-01-01")
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

             <FormField
              control={form.control}
              name="duration"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Rental Duration</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="month"
                      {...field}
                      disabled={!user}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

          <Button
            type="submit"
            className="w-full"
            disabled={form.formState.isSubmitting || !user}
          >
            {form.formState.isSubmitting
              ? "Submitting..."
              : user
                ? "Submit Rent Request"
                : "Please Login to Submit"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
