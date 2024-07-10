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

    Getorderbyid: build.query({
      query: (id) => ({
        url: `orders/myorderbyid/${id}`,
        credentials: "include",
      }),
    }),

    GeAllOrders: build.query({
      query: () => ({
        url: `orders/myorders`,
        credentials: "include",
      }),
    }),
  }),
});

export const {
  useCreateorderMutation,
  useGetorderbyidQuery,
  useGeAllOrdersQuery,
} = extendedApi;
