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
    'nuxt-i18n',
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
        ],

        languages: ['en', 'sv', 'de']
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
  },

  /**
   * nuxt-i18n
   */
  i18n: {
    defaultLocale: 'en',
    locales: [
      { code: 'en', iso: 'en-GB', file: 'en-GB.js', name: 'English' },
      { code: 'sv', iso: 'sv-SE', file: 'sv-SE.js', name: 'Svenska' },
      { code: 'de', iso: 'de-DE', file: 'de-DE.js', name: 'Deutsch' }
    ],
    lazy: true,
    langDir: 'language/',
    vueI18nLoader: true,
    strategy: 'prefix_except_default',
    vueI18n: {
      fallbackLocale: 'en'
    },
    vuex: {
      syncLocale: true,
      syncRouteParams: true
    }
  }
}
