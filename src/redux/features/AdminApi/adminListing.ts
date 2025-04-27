import baseApi from "../../api/baseApi";

const AdminListingApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAdminListing: builder.query({  
      query: () => ({  
        url: "/admin/listings",
        method: "GET",
      }),
    }),
  }),
});


export const { useGetAdminListingQuery } = AdminListingApi;