import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

import { Pokemon } from "@/types";

// Membuat instance pokemonApi dengan createApi
export const pokemonApi = createApi({
  // Menentukan path reducer untuk pokemonApi
  reducerPath: "pokemonApi",
  // Mengonfigurasi baseQuery dengan baseUrl
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api" }),
  // Menentukan jenis-jenis tag yang digunakan dalam caching
  tagTypes: ["pokemon"],
  // Mendefinisikan endpoint-endpoint pada API
  endpoints: (builder) => ({
    // Endpoint search untuk mencari Pokemon berdasarkan nama
    search: builder.query<Pokemon[], string>({
      // Mendefinisikan query untuk endpoint search
      query: (q) => `search?name=${q}`,
      // Memberikan informasi tag kepada API
      providesTags: (result, error, search) => [{ type: "pokemon", search }],
    }),
  }),
});
