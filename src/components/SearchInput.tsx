import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";

import { RootState, AppDispatch } from "@/store";
import { setSearch } from "@/store/searchSlice";
import PokemonTable from "./PokemonTable";

// Menggunakan useDispatch untuk mendapatkan fungsi dispatch dari Redux store
export const useAppDispatch: () => AppDispatch = useDispatch;
// Menggunakan useSelector dengan TypedUseSelectorHook untuk mendapatkan state dari Redux store
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const SearchInput = () => {
  const dispatch = useAppDispatch();
  const search = useAppSelector((state) => state.search.search);
  const startupPokemon = useAppSelector((state) => state.search.startupPokemon);

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
      <PokemonTable pokemons={startupPokemon} />
    </div>
  );
};

export default SearchInput;
