import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react()
  ],
  server: {
    open: true,
    cors: true,
    compression: true,
    host: true,
    port: 3001,
     watch: {
       usePolling: true
     }
  },
});
