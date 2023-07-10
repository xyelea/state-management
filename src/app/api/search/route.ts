// Mengimpor fungsi `NextResponse` dari pustaka "next/server"
import { NextResponse } from "next/server";

// Mengimpor data pokemon dari file JSON
import pokemon from "@/pokemon.json";

// Fungsi GET yang akan dipanggil ketika melakukan permintaan HTTP GET
export async function GET(req: Request) {
  // Mendapatkan searchParams dari URL permintaan
  const { searchParams } = new URL(req.url);

  // Mendapatkan nilai "name" dari searchParams
  const name = searchParams.get("name");

  // Mencari data pokemon berdasarkan nama yang cocok dengan parameter "name"
  const pokemonData = pokemon.filter((p) =>
    p.name.toLowerCase().includes(name?.toLowerCase() ?? "")
  );

  // Mengembalikan respons HTTP dalam format JSON dengan 10 data pokemon pertama
  return NextResponse.json(pokemonData.slice(0, 10));
}
