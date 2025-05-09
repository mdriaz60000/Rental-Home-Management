import baseApi from "../../api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (userInfo) => ({
        url: "/login",  
        method: "POST",
        body: userInfo,
        headers: {
          'Content-Type': 'application/json',
        },
      })
  
    }),

    register: builder.mutation({
      query: (userInfo) => ({
        url: "/register",
        method: "POST",
        body: userInfo,
        headers: {
          'Content-Type': 'application/json',
        },
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;