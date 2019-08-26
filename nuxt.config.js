import NuxtDynamicMarkdown from 'nuxt-dynamic-markdown'

export default {
  mode: 'universal',

  /**
   * Enable devtools.
   */
  vue: {
    config: {
      productionTip: false,
      devtools: true
    }
  },

  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://buefy.github.io/#/documentation
    'nuxt-buefy',
    [
      NuxtDynamicMarkdown,
      {
        /*
          Sources are how you tell NDM what to load,
          where from and how you define your relationships.

          IMPORTANT: This data-source is presumed to be
          present for the duration of this README.
        */
        sources: [
          {
            name: 'projects',
            relationships: ['keywords'],
            entities: ['projects']
          },
          {
            name: 'blog',
            directory: 'blog',
            entities: ['categories', 'articles'],
            relationships: ['tags']
          }
        ]
      }
    ]
  ],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
