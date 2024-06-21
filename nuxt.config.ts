// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      script: [
        {
          src: "https://unpkg.com/@phosphor-icons/web",
          type: "text/javascript",
          async: true,
          defer: true,
        },
      ],
    },
  },
});
