import { defineConfig } from "vite";
import { plugin } from "vite-plugin-elm";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [plugin()],
});
