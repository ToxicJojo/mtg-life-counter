import { VitePWA } from "vite-plugin-pwa";

/** @type {import('vite').UserConfig} */
export default {
  base: "/mtg-life-counter/",
  plugins: [
    VitePWA({
      registerType: "autoUpdate",
      injectRegister: "auto",
    }),
  ],
};
