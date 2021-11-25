export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Closing Coal Production: A just transition for all',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,500;0,700;1,300;1,500;1,700&family=Montserrat:ital,wght@0,200;0,400;0,700;1,200;1,400;1,700&display=swap' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/static/css/00-resets/normalize.css',
    '@/static/css/00-resets/reset.css',
    '@/static/css/00-resets/body-structure.css',
    '@/static/css/00-resets/utils.css',
    '@/static/css/01-tokens/scale.css',
    '@/static/css/01-tokens/colors-base.css',
    '@/static/css/01-tokens/wrappers.css',
    '@/static/css/02-elements/typography.css',
    '@/static/css/03-objects/center.css',
    '@/static/css/03-objects/cover.css',
    '@/static/css/03-objects/cluster.css',
    '@/static/css/03-objects/frame.css',
    '@/static/css/03-objects/polarized.css',
    '@/static/css/03-objects/stack.css',
    '@/static/css/04-components/button-structure.css',
    '@/static/css/04-components/button-visuals.css',
    '@/static/css/04-components/button-icons.css',
    '@/static/css/04-components/blurb.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/filters.js' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/google-analytics'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxt/content',
  ],

  googleAnalytics: {
    id: ''
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
