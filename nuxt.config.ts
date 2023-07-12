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
    domains: ['jsonplaceholder.ir', 'unsplash.com'],
  },

  // Nuxt Devtools
  devtools: { enabled: true },

  tailwindcss: {
    config: {
      theme: {
        extend: {
          backgroundImage: {
            random:
              "url('https://source.unsplash.com/random/1366x768/?gradient,light,blured,nature,fruits')",
          },
        },
      },
    },
  },
});
