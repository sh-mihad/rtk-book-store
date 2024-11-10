import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const booksApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:9000" }),
    endpoints: (builder) => ({
      getBooks: builder.query({
        query:()=>'/books',
      }),
    }),
})

export const {useGetBooksQuery} = booksApi

