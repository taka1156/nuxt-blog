import routesUtils from './utils/routes/index.js';
require('dotenv').config();
const { BASE_URL, MICRO_CMS, ARTICLE_URL, TAG_URL, CATEGORY_URL } = process.env;
const CONTENT_MAX = 20; // タグとカテゴリーの最大数
const POSTS_PER_PAGE = 5; // １ページあたりの記事数
const CLASSIFICATION_PARAMS = { fields: 'id,name,img', limit: CONTENT_MAX };

export default {
  telemetry: false,
  mode: 'universal',
  target: 'static',
  router: {
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
      // 一覧のページング
      const page = await routesUtils.routesFetchRange(
        ARTICLE_URL,
        MICRO_CMS,
        {
          fields:
            'id,title,summary,tags.id,tags.name,tags.img,category.id,category.name,category.img,createdAt,updatedAt'
        },
        POSTS_PER_PAGE,
        pageIndex => `/page/${pageIndex}`
      );

      // タグのルーティング
      const tag = await routesUtils.routesFetch(
        TAG_URL,
        CLASSIFICATION_PARAMS,
        MICRO_CMS
      );

      // カテゴリーのルーティング
      const category = await routesUtils.routesFetch(
        CATEGORY_URL,
        CLASSIFICATION_PARAMS,
        MICRO_CMS
      );

      // タグの個別ページのルーティング
      const tagList = await routesUtils.routesFetchArr(
        TAG_URL,
        CLASSIFICATION_PARAMS,
        MICRO_CMS
      );

      // カテゴリーの個別ページのルーティング
      const categoryList = await routesUtils.routesFetchArr(
        CATEGORY_URL,
        CLASSIFICATION_PARAMS,
        MICRO_CMS
      );

      // タグの個別ページ(ページネーションなし)
      const defaultTags = await routesUtils.routesFetchAll(
        tagList,
        ARTICLE_URL,
        {
          fields:
            'id,title,summary,tags.id,tags.name,tags.img,category.id,category.name,category.img,createdAt,updatedAt',
          limit: POSTS_PER_PAGE,
          filters: `tags[contains]${tag.id}`
        },
        MICRO_CMS,
        tagId => `/tag/${tagId}`
      );

      // カテゴリーの個別ページ(ページネーションなし)
      const defaultCategories = await routesUtils.routesFetchAll(
        categoryList,
        ARTICLE_URL,
        {
          fields:
            'id,title,summary,tags.id,tags.name,tags.img,category.id,category.name,category.img,createdAt,updatedAt',
          limit: POSTS_PER_PAGE,
          filters: `category[equals]${category.id}`
        },
        MICRO_CMS,
        categoryId => `/category/${categoryId}`
      );

      // タグの個別の記事一覧ページ(ページネーションあり)
      const tags = await routesUtils.routesFetchAllRange(
        tagList,
        ARTICLE_URL,
        {
          fields:
            'id,title,summary,tags.id,tags.name,tags.img,category.id,category.name,category.img,createdAt,updatedAt',
          filters: `tags[contains]${tag.id}`
        },
        MICRO_CMS,
        POSTS_PER_PAGE,
        (tagId, pageIndex) => `/tag/${tagId}/${pageIndex}`
      );

      // カテゴリーの個別の記事一覧ページ(ページネーションあり)
      const categories = await routesUtils.routesFetchAllRange(
        categoryList,
        ARTICLE_URL,
        {
          fields:
            'id,title,summary,tags.id,tags.name,tags.img,category.id,category.name,category.img,createdAt,updatedAt',
          filters: `category[equals]${category.id}`
        },
        MICRO_CMS,
        POSTS_PER_PAGE,
        (categoryId, id) => `/category/${categoryId}/${id}`
      );

      // 記事のルーティング
      let { contents, totalCount } = await routesUtils.contentsFetch(
        ARTICLE_URL,
        MICRO_CMS
      );
      while (contents.length < totalCount) {
        // 2回目以降の取得
        const data = await routesUtils.contentsFetch(
          ARTICLE_URL,
          MICRO_CMS,
          contents.length
        );
        contents = contents.concat(data.contents);
      }

      const articles = contents;

      // 全てをまとめる
      const flattenTagsPages = [].concat.apply([], tags);
      const flattenCategoriesPages = [].concat.apply([], categories);
      return [
        { route: '/tags', payload: tag },
        { route: '/categories', payload: category },
        ...page,
        ...defaultTags,
        ...defaultCategories,
        ...flattenTagsPages,
        ...flattenCategoriesPages,
        ...articles
      ];
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
        content: 'VueやLaravel、electron、dockerなどについて更新中'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: `${BASE_URL}/img/ogp/logo.png`
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
  modules: ['@nuxtjs/axios', '@nuxtjs/dotenv'],

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
