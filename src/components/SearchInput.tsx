"use client";

import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";

import { RootState, AppDispatch } from "@/store";
import { setSearch } from "@/store/searchSlice";
import PokemonTable from "./PokemonTable";
import { pokemonApi } from "@/store/pokemonApi";
import { Pokemon } from "@/types";
import { useEffect } from "react";

// Menggunakan useDispatch untuk mendapatkan fungsi dispatch dari Redux store
export const useAppDispatch: () => AppDispatch = useDispatch;
// Menggunakan useSelector dengan TypedUseSelectorHook untuk mendapatkan state dari Redux store
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const SearchInput = () => {
  const dispatch = useAppDispatch();
  const search = useAppSelector((state) => state.search.search);
  const startupPokemon = useAppSelector((state) => state.search.startupPokemon);

  // Menggunakan useAppSelector untuk mendapatkan data pencarian dari Redux store
  const data = useAppSelector(
    (state) =>
      state.pokemonApi.queries[`search("${search}")`]?.data as Pokemon[]
  );

  // useEffect digunakan untuk memanggil action initiate saat nilai search berubah
  useEffect(() => {
    dispatch(pokemonApi.endpoints.search.initiate(search));
  }, [dispatch, search]);

  return (
    <div>
      {/* Input untuk melakukan pencarian */}
      <input
        className="text-base text-black"
        type="text"
        value={search}
        onChange={(e) => dispatch(setSearch(e.target.value))}
      />
      {/* Komponen PokemonTable untuk menampilkan daftar Pokemon */}
      {/* Jika terdapat nilai pada search, tampilkan data hasil pencarian.
          Jika tidak, tampilkan daftar startupPokemon */}
      <PokemonTable pokemons={search.length ? data ?? [] : startupPokemon} />
    </div>
  );
};

export default SearchInput;
