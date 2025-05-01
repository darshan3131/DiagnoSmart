import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// If you're not using vite-plugin-rewrite-all, remove this line
// import vitepluginrewriteall from "vite-plugin-rewrite-all";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: "@", replacement: "/src" }],
  },
});