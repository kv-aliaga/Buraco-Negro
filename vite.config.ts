import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
// https://vite.dev/config/
export default defineConfig(() => {
  return {
    plugins: [react()],
    base: "/Buraco-Negro/",
    build: {
      outDir: "docs",
      emptyOutDir: true,
    },
  };
});
