let dev = (process.env.NODE_ENV !== 'production');

let proxy = {};

dev = true
if(dev) {
  proxy = {
    '/api/v1/': 'http://192.168.31.141:8080/'
  };
}

export default {
  router: {
    middleware: 'vuex-persist-ssr'
  },
  dev,
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Vue Blog',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#409EFF' },
  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/index.css',
    '@/assets/globals.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/element-ui',
    '@/plugins/axios',
    '@/plugins/globals',
    '@/plugins/vue-observe-visibility',
    { src: '@/plugins/vuex-persist-client', ssr: false}
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // '@nuxt/typescript-build'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    '@nuxtjs/proxy',
    'cookie-universal-nuxt'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    prefix: '/api/v1/',
    debug: dev,
    proxy: dev
  },
  /*
  ** Proxy module
  */
  proxy,
  /*
  ** Build configuration
  */
  build: {
    transpile: [/^element-ui/],
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
      // config.module.rules.push({
      //   test: /node_modules\/mathjax3\/mathjax3\/.+\.js$/,
      //   loader: 'babel-loader',
      //   options: {
      //     presets: ['@babel/preset-env'],
      //     plugins: ['@babel/transform-runtime']
      //   }
      // })
    }
  }
}
