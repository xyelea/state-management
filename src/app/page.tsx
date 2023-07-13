import Preloader from "@/components/Preloader";
import Providers from "@/components/Provider";
import SSRPokemonTable from "@/components/SSRPokemonTable";
import SearchInput from "@/components/SearchInput";

import { store } from "@/store";
import { setStartupPokemon } from "@/store/searchSlice";

export default async function Home() {
  // Fetch data from the API
  const req = await fetch("http://localhost:3000/api/search");
  const data = await req.json();

  // Dispatch the fetched data to the store using Redux
  store.dispatch(setStartupPokemon(data));

  return (
    <main>
      {/* Render the Preloader component with the fetched data */}
      <Preloader pokemons={data} />

      <Providers>
        {/* Render the SearchInput component */}
        <SearchInput />
      </Providers>
    </main>
  );
}
