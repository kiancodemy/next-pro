import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import base from "../constant";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: base }),
  tagTypes: ["Getbyid"],

  endpoints: () => ({}),
});
