export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'cms-test',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Rubik:wght@400;500&display=swap'
        
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com'
      }
    ]
  },

  target: 'static',

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/utility.scss',
    // 'swiper/swiper-bundle.min.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    `@/plugins/parseMd`,
    { src: `@/plugins/animate`, mode: `client` },
    { src: '@/plugins/vueAwesomeSwiper.js', mode: `client` },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/svg'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxt/content',
    '@nuxtjs/cloudinary',
    ['nuxt-stripe-module', {
      publishableKey: 'pk_test_51H7j1aASANJqFs3Wcfr4qbv93AuoVzqLonZLLYqcbSgOXlWbyVrd3qJUn6zMe57ywNeY5rBVBvAwpSXQP86LlrdS00YIMrZFh2',
    }]
  ],

  cloudinary: {
    cloudName: 'crux-wheels',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
