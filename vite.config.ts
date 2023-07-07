/// <reference types="vitest" />

import { fileURLToPath, URL } from "url";

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./src/setup/setupTests.ts"],
  },
  server: {
    host: "0.0.0.0", // 휴대폰 테스트용
  },
});
