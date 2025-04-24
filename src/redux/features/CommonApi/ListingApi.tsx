import baseApi from "../../api/baseApi";

const listingApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addListing: builder.mutation({
      query: (listingData) => ({
        url: "/products",
        method: "POST",
        body: listingData
      }),
    }),
    getProperty: builder.query({
      query: () => ({
        url: "/property",
        method: "GET",
      }),
    }),
  }),
});

export const {  useGetPropertyQuery } = listingApi;