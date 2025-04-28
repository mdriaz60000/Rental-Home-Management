import baseApi from "../../api/baseApi";

const listingApiLandlord = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    AddListings: builder.mutation({
      query: (listingsData) => ({
        url: "/listings",
        method: "POST",
        body: listingsData
      }),
    }),
    getListingLandlord: builder.query({
      query: () => ({
        url: "/admin/listings",
        method: "GET",
      }),
    }),
  }),
});

export const { useAddListingsMutation, useGetListingLandlordQuery } = listingApiLandlord;