import * as path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    include: ["@/ui"],
  },
  resolve: {
    alias: {
      "@/ui": path.resolve("src", "ui"),
    },
  },
  plugins: [react()],
});
