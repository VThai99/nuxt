// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-16",
      viewport: "width=device-width,initial-scale=1",
      title: "Elon's Blog",
      titleTemplate: "%s - Elon's Blog",
      meta: [{ name: "description", content: "Elon's awesome blog" }],
    },
  },
  extends: [
    'nuxt-seo-kit'
  ],
  modules: ["@nuxtjs/tailwindcss"],
  runtimeConfig: {
    public: {
      wpUri: process.env.WP_URI,
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://example.com',
      siteName: 'Wow Site',
      siteDescription: 'This is the first time I work with SEO',
      language: 'en'
    },
  },
});
