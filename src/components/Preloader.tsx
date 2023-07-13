import { useRef } from "react";
import { store } from "@/store";
import { setStartupPokemon } from "@/store/searchSlice";
import { Pokemon } from "@/types";

function Preloader({ pokemons }: { pokemons: Pokemon[] }) {
  const loaded = useRef(false);

  // Cek apakah Preloader belum pernah dimuat sebelumnya
  if (!loaded.current) {
    // Dispatch data Pokemon yang diambil dari API ke Redux store
    store.dispatch(setStartupPokemon(pokemons));

    // Tandai bahwa Preloader telah dimuat
    loaded.current = true;
  }

  // Preloader tidak merender apa pun, hanya digunakan untuk dispatch data ke Redux store
  return null;
}

export default Preloader;
