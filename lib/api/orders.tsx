import { api } from "./apislice";

const extendedApi = api.injectEndpoints({
  endpoints: (build) => ({
    Createorder: build.mutation({
      query: (info) => ({
        url: `/orders/addorders`,
        credentials: "include",
        method: "POST",
        body: { ...info },
      }),
    }),
  }),
});

export const { useCreateorderMutation } = extendedApi;
