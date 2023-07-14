import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./searchSlice";
import { pokemonApi } from "./pokemonApi";

// Mengkonfigurasi store Redux menggunakan configureStore dari @reduxjs/toolkit
export const store = configureStore({
  reducer: {
    search: searchReducer,
    pokemonApi: pokemonApi.reducer,
  },
  middleware(getDefaultMiddleware) {
    // Menggabungkan middleware default dengan middleware dari pokemonApi
    return getDefaultMiddleware().concat(pokemonApi.middleware);
  },
});

// Tipe state global dari store
export type RootState = ReturnType<typeof store.getState>;
// Tipe dispatch yang digunakan dalam aplikasi
export type AppDispatch = typeof store.dispatch;
