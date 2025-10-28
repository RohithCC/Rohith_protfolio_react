import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // You can disable the red error overlay if you want:
  // server: { hmr: { overlay: false } },
});
