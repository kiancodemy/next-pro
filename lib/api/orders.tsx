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
    Emailsernder: build.mutation({
      query: (info) => ({
        url: `/email/emaisender`,
        credentials: "include",

        method: "POST",
        body: { ...info },
      }),
    }),
    SetToPaid: build.mutation({
      query: (info) => ({
        url: `/orders/${info}/paid`,
        credentials: "include",

        method: "PUT",
      }),
      invalidatesTags: ["Getbyid"],
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
      providesTags: ["Getbyid"],
    }),
  }),
});

export const {
  useCreateorderMutation,
  useGetorderbyidQuery,
  useGeAllOrdersQuery,
  useSetToPaidMutation,
  useEmailsernderMutation,
} = extendedApi;
