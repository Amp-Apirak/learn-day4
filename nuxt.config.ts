// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  ssr: true,

  devtools: { enabled: true },
  css: ['~/assets/css/tailwind.css'],
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      bodyAttrs: {
        class: "demo",
      },
      charset: "utf-8",
      titleTemplate: "%s | Healthcare Platform",
      meta: [
        {
          name: "Apirak",
          content: "Pointit Ltd., Thailand",
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1, maximum-scale=5",
        },
      ],
    },
  },
  runtimeConfig: {
    public: {
      wpUri: process.env.WP_URI 
    }
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    [
      // Nuxt Robots
      "@nuxtjs/robots",
      {
        UserAgent: "*",
        Disallow: "",
      },
    ],
    'nuxt-icon'
  ],
  
});
