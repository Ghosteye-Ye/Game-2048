// Import the defineConfig function from the Vite library
import { defineConfig } from "vite";
import UnoCSS from "unocss/vite";

// Import the Vue plugin from the Vite library
import vue from "@vitejs/plugin-vue";

// Export the configuration object for Vite
export default defineConfig({
  base: "/Game-2048",
  // Use the Vue plugin
  plugins: [vue(), UnoCSS()],
});
