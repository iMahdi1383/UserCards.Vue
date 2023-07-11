// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/apollo', '@nuxtjs/tailwindcss'],
  apollo: {
    clients: {
      default: {
        httpEndpoint: 'https://jsonplaceholder.ir/graphql'
      }
    },
  },
  devtools: { enabled: true },
})
