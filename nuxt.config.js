import { generateRouter } from './utils/routes/index.js';
require('dotenv').config();
const { BASE_URL, MICRO_CMS, ARTICLE_URL, TAG_URL, CATEGORY_URL } = process.env;

export default {
  telemetry: false,
  mode: 'universal',
  target: 'static',
  sitemap: {
    trailingSlash: true,
    path: '/sitemap.xml',
    hostname: 'https://blog.taka1156.site',
    async routes() {
      return await generateRouter(MICRO_CMS, ARTICLE_URL, TAG_URL, CATEGORY_URL);
    }
  },
  router: {
    trailingSlash: true,
    middleware: 'redirect',
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'page-pageid',
        path: '/page/:pageid',
        component: resolve(__dirname, 'pages/index.vue')
      });
      routes.push({
        name: 'category-id-pageid',
        path: '/category/:id/:pageid',
        component: resolve(__dirname, 'pages/category/_id/index.vue')
      });
      routes.push({
        name: 'tag-id-pageid',
        path: '/tag/:id/:pageid',
        component: resolve(__dirname, 'pages/tag/_id/index.vue')
      });
    }
  },
  generate: {
    fallback: true,
    async routes() {
      return await generateRouter(MICRO_CMS, ARTICLE_URL, TAG_URL, CATEGORY_URL);
    }
  },
  /*
   ** Headers of the page
   */
  head: {
    title: 'TakaTechBlog',
    htmlAttrs: {
      lang: 'ja',
      prefix: 'og: http://ogp.me/ns#'
    },
    titleTemplate: '%s - TakaTechBlog',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      // OGP
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'TakaTechBlog'
      },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://blog.taka1156.site'
      },
      { hid: 'og:title', property: 'og:title', content: 'TakaTechBlog' },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          'taka1156のブログ。\nVueやTS、electron、Laravelなど技術関連の記事を更新中'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: `${BASE_URL}/img/ogp/logo.png`
      },
      // web閲覧時の説明文
      {
        hid: 'description',
        name: 'description',
        content:
          'taka1156のブログ。\nVueやTS、electron、Laravelなど技術関連の記事を更新中'
      },
      // Twitter Card
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary' },
      { hid: 'twitter:site', name: 'twitter:site', content: '@taka_Program' }
    ],
    link: []
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#28a745' },
  /*
   ** Global CSS
   */
  css: [
    'normalize.css',
    'github-markdown-css',
    'highlight.js/styles/github.css',
    '@/assets/css/layout.css'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~plugins/GoogleAnalytics.js', mode: 'client' },
    { src: '~plugins/ScrollTo.js', mode: 'client' }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/axios', '@nuxtjs/dotenv', '@nuxtjs/sitemap'],

  axios: {},

  //環境変数の登録
  env: {
    BASE_URL,
    MICRO_CMS,
    ARTICLE_URL,
    TAG_URL,
    CATEGORY_URL
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    splitChunks: {
      layouts: true,
      pages: true,
      commons: true
    },
    extend: function(config) {
      config.node = {
        fs: 'empty'
      };
    },
    babel: {
      presets({ isServer }) {
        return [
          [
            require.resolve('@nuxt/babel-preset-app'),
            // require.resolve('@nuxt/babel-preset-app-edge'), // For nuxt-edge users
            {
              buildTarget: isServer ? 'server' : 'client',
              corejs: { version: 3 }
            }
          ]
        ];
      }
    }
  }
};
