import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../store';

// 
const baseQuery = fetchBaseQuery({ baseUrl:process.env.NEXT_PUBLIC_BASE_API,
  credentials : "include",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token

    if (token) {
      headers.set('authorization', ` ${token}`)
    }

    return headers
  },
  })
 

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: baseQuery,
  endpoints: () => ({}),
});

export default baseApi;