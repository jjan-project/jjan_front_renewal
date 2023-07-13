/// <reference types="vitest" />

import { fileURLToPath, URL } from "url";

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import svgr from "vite-plugin-svgr";

import pwaConfig from "./pwaconfig.json";

const pwaPlugin = VitePWA({
  manifest: pwaConfig,
  devOptions: {
    enabled: true,
  },
});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), pwaPlugin, svgr()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "@story": fileURLToPath(new URL("./.storybook", import.meta.url)),
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
