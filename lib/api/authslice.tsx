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
    Updateprofile: build.mutation({
      query: (id) => ({
        url: `/users/Updateuserprofile`,
        credentials: "include",

        method: "PUT",
        body: id,
      }),
    }),
  }),
});
export const {
  useSignupMutation,
  useLoginMutation,
  useLogoutMutation,
  useUpdateprofileMutation,
} = extendedApi;
