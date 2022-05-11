import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  typescript: {
    shim: false
  },

  modules: [
    '@unocss/nuxt',
  ],

  css: [
    'augmented-ui',
    '@fontsource/quicksand/500.css',
    '@fontsource/quicksand/700.css',
    '~/assets/css/main.styl'
  ]
})
