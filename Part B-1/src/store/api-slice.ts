import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface Data {
  type: string;
  value: [{
    id: number;
    joke: string;
  }];
}

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://api.icndb.com",
  }),
  endpoints(builder) {
    return {
      fetchData: builder.query<Data, any | void>({
        query(item) {
          return `/jokes/random/${item.number}?escape=javascript&firstName=${item.firstName}&lastName=${item.lastName}`;
        },
      }),
    };
  },
});

export const { useFetchDataQuery } = apiSlice;

// /jokes/random?firstName=${firstName}&lastName=${lastName}/${item}
