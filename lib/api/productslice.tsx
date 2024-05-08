import { api } from "./apislice";

const extendedApi = api.injectEndpoints({
  endpoints: (build) => ({
    Getproducts: build.query({
      query: (id) => ({ url: `/${id}` }),
      keepUnusedDataFor: 5,
    }),
    GetbyId: build.query({
      query: (id) => ({ url: `/products/${id}` }),
      keepUnusedDataFor: 5,
    }),
  }),
});

export const { useGetproductsQuery, useGetbyIdQuery } = extendedApi;
