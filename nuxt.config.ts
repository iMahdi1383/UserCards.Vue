// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/apollo', '@nuxtjs/tailwindcss', '@nuxt/image'],

  // Get data from Api
  apollo: {
    clients: {
      default: {
        httpEndpoint: 'https://jsonplaceholder.ir/graphql',
      },
    },
  },

  // Nuxt Image
  image: {
    domains: ['jsonplaceholder.ir'],
  },

  // Nuxt Devtools
  devtools: { enabled: true },
});
