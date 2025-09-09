import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss({
      config: "./tailwind.config.js",
    }),
  ],
  server: {
    port: 3000,
    proxy: {
      "/api": "http://localhost:5000", // Assuming backend runs on 5000
    },
  },
});
