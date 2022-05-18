import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: false,

  typescript: {
    shim: false
  },

  modules: [
    '@unocss/nuxt',
  ],

  css: [
    'reseter.css',
    'augmented-ui',
    'aos/dist/aos.css',
    '@fontsource/quicksand/500.css',
    '@fontsource/quicksand/700.css',
    '@fontsource/modak',
    '~/assets/css/main.styl'
  ]
})
