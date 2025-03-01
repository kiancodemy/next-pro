import { api } from "./apislice";

const extendedApi = api.injectEndpoints({
  endpoints: (build) => ({
    GetbyId: build.query({
      query: (id) => ({ url: `/products/${id}` }),
      keepUnusedDataFor: 5,
    }),
    Getquestions: build.query({
      query: () => ({ url: "/question/Qall" }),
    }),
  }),
});

export const { useGetbyIdQuery, useGetquestionsQuery } = extendedApi;
