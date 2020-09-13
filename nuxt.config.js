import axios from 'axios';
require('dotenv').config();
const { BASE_URL, MICRO_CMS, ARTICLE_URL, TAG_URL, CATEGORY_URL } = process.env;
const CONTENT_MAX = 20; // タグとカテゴリーの最大数
const POSTS_PER_PAGE = 5; // １ページあたりの記事数

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
      const range = (start, end) =>
        [...Array(end - start + 1)].map((_, i) => start + i);

      // 一覧のページング
      const page = await axios
        .get(ARTICLE_URL, {
          params: {
            fields:
              'id,title,summary,tags.id,tags.name,tags.img,category.id,category.name,category.img,createdAt,updatedAt'
          },
          headers: { 'X-API-KEY': MICRO_CMS }
        })
        .then(({ data }) =>
          range(1, Math.ceil(data.totalCount / POSTS_PER_PAGE)).map(pageIndex => ({
            route: `/page/${pageIndex}`
          }))
        );
      // タグのルーティング
      const tag = await axios
        .get(TAG_URL, {
          params: { fields: 'id,name,img', limit: CONTENT_MAX },
          headers: { 'X-API-KEY': MICRO_CMS }
        })
        .then(({ data }) => {
          return data.contents.map(tag => {
            return tag;
          });
        });
      // カテゴリーのルーティング
      const category = await axios
        .get(CATEGORY_URL, {
          params: { fields: 'id,name,img', limit: CONTENT_MAX },
          headers: { 'X-API-KEY': MICRO_CMS }
        })
        .then(({ data }) => {
          return data.contents.map(category => {
            return category;
          });
        });
      // タグの個別ページのルーティング
      const tagList = await axios
        .get(TAG_URL, {
          params: { fields: 'id,name,img', limit: CONTENT_MAX },
          headers: { 'X-API-KEY': MICRO_CMS }
        })
        .then(({ data }) => {
          return data.contents;
        });

      const tags = await Promise.all(
        tagList.map(tag =>
          axios
            .get(ARTICLE_URL, {
              params: {
                fields:
                  'id,title,summary,tags.id,tags.name,tags.img,category.id,category.name,category.img,createdAt,updatedAt',
                filters: `tags[contains]${tag.id}`
              },
              headers: { 'X-API-KEY': MICRO_CMS }
            })
            .then(({ data }) =>
              range(1, Math.ceil(data.totalCount / POSTS_PER_PAGE)).map(id => ({
                route: `/tag/${tag.id}/${id}`
              }))
            )
        )
      );

      const defaultTags = await Promise.all(
        tagList.map(tag =>
          axios
            .get(ARTICLE_URL, {
              params: {
                fields:
                  'id,title,summary,tags.id,tags.name,tags.img,category.id,category.name,category.img,createdAt,updatedAt',
                limit: POSTS_PER_PAGE,
                filters: `tags[contains]${tag.id}`
              },
              headers: { 'X-API-KEY': MICRO_CMS }
            })
            .then(() => {
              return {
                route: `/tag/${tag.id}`
              };
            })
        )
      );

      // カテゴリーの個別ページのルーティング
      const categoryList = await axios
        .get(CATEGORY_URL, {
          params: { fields: 'id,name,img', limit: CONTENT_MAX },
          headers: { 'X-API-KEY': MICRO_CMS }
        })
        .then(({ data }) => {
          return data.contents;
        });

      const categories = await Promise.all(
        categoryList.map(category =>
          axios
            .get(ARTICLE_URL, {
              params: {
                fields:
                  'id,title,summary,tags.id,tags.name,tags.img,category.id,category.name,category.img,createdAt,updatedAt',
                filters: `category[equals]${category.id}`
              },
              headers: { 'X-API-KEY': MICRO_CMS }
            })
            .then(({ data }) =>
              range(1, Math.ceil(data.totalCount / POSTS_PER_PAGE)).map(id => ({
                route: `/category/${category.id}/${id}`
              }))
            )
        )
      );

      const defaultCategories = await Promise.all(
        categoryList.map(category =>
          axios
            .get(ARTICLE_URL, {
              params: {
                fields:
                  'id,title,summary,tags.id,tags.name,tags.img,category.id,category.name,category.img,createdAt,updatedAt',
                limit: POSTS_PER_PAGE,
                filters: `category[equals]${category.id}`
              },
              headers: { 'X-API-KEY': MICRO_CMS }
            })
            .then(() => {
              return { route: `/category/${category.id}` };
            })
        )
      );

      // 記事のルーティング
      const articles = await axios
        .get(ARTICLE_URL, {
          headers: { 'X-API-KEY': MICRO_CMS }
        })
        .then(({ data }) => {
          return data.contents.map(article => {
            return { route: `/article/${article.id}`, payload: article };
          });
        });

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
  plugins: [],
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
    }
    //extend(config, ctx) {}
  }
};
