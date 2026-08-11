import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import path from "node:path";

export default defineConfig({
  base: "/portfolio/",
  plugins: [tailwindcss(), reactRouter()],
  resolve: {
    alias: {
      "react-router-dom": path.resolve(__dirname, "node_modules/react-router"),
    },
  },
  server: {
    fs: {
      strict: true,
      allow: [path.resolve(__dirname)],
    },
  },
});
