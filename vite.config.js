import { defineConfig } from "vite";

export default defineConfig({
  base: "/JOSHIANA13.0/",
  build: {
    outDir: "dist",
    rollupOptions: {
      output: {
        manualChunks: {
          // Define manual chunks for libraries or large modules to split code better
          vendor: ["react", "react-dom"], // Example for React libraries
          // Add other chunks here if necessary
        },
      },
    },
    chunkSizeWarningLimit: 1000, // Increase the chunk size warning limit if needed
  },
});
