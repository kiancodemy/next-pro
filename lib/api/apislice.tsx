import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_BACKEND_URL as string}`,
  }),
  tagTypes: ["Getbyid"],

  endpoints: () => ({}),
});
