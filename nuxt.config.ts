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
    'reseter.css',
    'augmented-ui',
    '@fontsource/quicksand/500.css',
    '@fontsource/quicksand/700.css',
    '@fontsource/modak',
    '~/assets/css/main.styl'
  ]
})
