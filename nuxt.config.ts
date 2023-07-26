// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-16',
      viewport: 'width=device-width,initial-scale=1',
      title: 'Handri Hermawan',
      titleTemplate: '%s - Handri Hermawan',
      meta: [{ name: 'description', content: 'Handri\'s awesome' }],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' },
  },

  typescript: {
    strict: true,
  },

  css: [
    '@/assets/css/main.css',
  ],

  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    '@nuxt/image-edge',
    '@nuxtjs/robots',
    '@nuxtjs/fontaine',
    '@nuxtjs/color-mode',
  ],

  colorMode: {
    classSuffix: ''
  },

  content: {
    highlight: {
      theme: 'dracula',
    },
  },

  extends: [
    'nuxt-seo-kit'
  ],

  runtimeConfig: {
    indexable: true,
    public: {
      siteUrl: 'https://handrihermawan.com',
      siteName: 'Handri Hermawan',
      siteDescription: 'Welcome to my Personal Website!',
      language: 'en',
    }
  },
})
