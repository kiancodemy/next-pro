import { api } from "./apislice";

const extendedApi = api.injectEndpoints({
  endpoints: (build) => ({
    Signup: build.mutation({
      query: (info) => ({
        url: `/users/signup`,
        method: "POST",
        body: info,
      }),
    }),
    Login: build.mutation({
      query: (info) => ({
        url: `/users/login`,
        credentials: "include",
        method: "POST",
        body: info,
      }),
    }),
    Logout: build.mutation({
      query: (id) => ({
        url: `/users/logout`,
        credentials: "include",
        method: "POST",
        body: id,
      }),
    }),
  }),
});

export const { useSignupMutation, useLoginMutation, useLogoutMutation } =
  extendedApi;
