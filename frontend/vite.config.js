import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/JOSHIANA13.0/",
  plugins: [react()],
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        main: "index.html", // Use index.html directly
      },
    },
  },
  server: {
    host: "0.0.0.0",
    port: 5173,
  },
});
