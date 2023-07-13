import { store } from "@/store";
import React from "react";
import { Provider } from "react-redux";

export default function Providers({ children }: { children: React.ReactNode }) {
  // Menggunakan Provider dari react-redux untuk memberikan akses ke Redux store ke seluruh komponen di dalamnya
  return <Provider store={store}>{children}</Provider>;
}
