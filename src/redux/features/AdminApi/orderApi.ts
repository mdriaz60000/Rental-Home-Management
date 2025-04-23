import baseApi from "../../api/baseApi";

const orderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    AddOder: builder.mutation({
      query: (orderData) => ({
        url: "/order",
        method: "POST",
        body: orderData
      }),
    }),
    getOrder: builder.query({
      query: () => ({
        url: "/order",
        method: "GET",
      }),
    }),
  }),
});

export const { useAddOderMutation, useGetOrderQuery } = orderApi;