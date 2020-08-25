/* eslint-disable prettier/prettier */
import axios from 'axios';
require('dotenv').config();
const { BASE_URL, MICRO_CMS, ARTICLE_URL, TAG_URL, CATEGORY_URL } = process.env;
const CONTENT_MAX = 20; // タグとカテゴリーの最大数

export default {
  telemetry: false,
  mode: 'universal',
  target: 'static',
  generate: {
    fallback: true,
    routes() {
      // タグのルーティング
      const tag = axios
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
      const category = axios
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
      const tags = axios
        .get(TAG_URL, {
          params: { fields: 'id,name,img', limit: CONTENT_MAX },
          headers: { 'X-API-KEY': MICRO_CMS }
        })
        .then(({ data }) => {
          return data.contents.map(tag => {
            return { route: `/tag/${tag.id}`, payload: tag };
          });
        });
      // カテゴリーの個別ページのルーティング
      const categories = axios
        .get(CATEGORY_URL, {
          params: { fields: 'id,name,img', limit: CONTENT_MAX },
          headers: { 'X-API-KEY': MICRO_CMS }
        })
        .then(({ data }) => {
          return data.contents.map(category => {
            return { route: `/category/${category.id}`, payload: category };
          });
        });
      // 記事のルーティング
      const articles = axios
        .get(ARTICLE_URL, {
          headers: { 'X-API-KEY': MICRO_CMS }
        })
        .then(({ data }) => {
          return data.contents.map(article => {
            return { route: `/article/${article.id}`, payload: article };
          });
        });
      // 全てをまとめる
      return Promise.all([tag, category, tags, categories, articles]).then(
        values => {
          return [
            { route: '/tag', payload: values[0] },
            { route: '/category', payload: values[1] },
            ...values[2],
            ...values[3],
            ...values[4]
          ];
        }
      );
    }
  },
  /*
   ** Headers of the page
   */
  head: {
    title: 'TakaTechBlog',
    htmlAttrs: {
      prefix: 'og: http://ogp.me/ns#'
    },
    titleTemplate: '%s - Taka',
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
        content: 'https://https://takablog-renewal.netlify.app'
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
        content: 'http://urx.space/wXyt'
      },
      // Twitter Card
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:site', content: '@taka_Program' }
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
  css: ['normalize.css', '@/assets/css/layout.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{ src: '~plugins/InfiniteLoading.js', mode: 'client' }],
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
