import { api } from "./apislice";

const extendedApi = api.injectEndpoints({
  endpoints: (build) => ({
    Getproducts: build.query({
      query: (id) => ({ url: `/${id}` }),

      keepUnusedDataFor: 500,
    }),
    GetbyId: build.query({
      query: (id) => ({ url: `/products/${id}` }),
      keepUnusedDataFor: 5,
    }),
    Getquestions: build.query({
      query: () => ({ url: '/question/Qall' }),
    }),
  }),
});

export const { useGetproductsQuery, useGetbyIdQuery,useGetquestionsQuery } = extendedApi;
