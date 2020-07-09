/* eslint-disable prettier/prettier */
import axios from 'axios';
require('dotenv').config();
const { BASE_URL, MICRO_CMS_KEY, ARTICLE_URL, TAG_URL, CATEGORY_URL } = process.env;
const CONTENT_MAX = 20; // タグとカテゴリーの最大数

export default {
  telemetry: false,
  mode: 'universal',
  target: 'static',
  generate: {
    fallback: true,
    routes() {
      // タグのルーティング
      const tags = axios
        .get(TAG_URL, {
          params: { fields: 'id', limit: CONTENT_MAX },
          headers: { 'X-API-KEY': MICRO_CMS_KEY }
        })
        .then(res => {
          return res.data.contents.map(tag => {
            return { route: `/tag/${tag.id}`, payload: tag };
          });
        });
      // カテゴリーのルーティング
      const categories = axios
        .get(CATEGORY_URL, {
          params: { fields: 'id', limit: CONTENT_MAX },
          headers: { 'X-API-KEY': MICRO_CMS_KEY }
        })
        .then(res => {
          return res.data.contents.map(category => {
            return { route: `/category/${category.id}`, payload: category };
          });
        });
      // 記事のルーティング
      const articles = axios
        .get(ARTICLE_URL, {
          headers: { 'X-API-KEY': MICRO_CMS_KEY }
        })
        .then(res => {
          return res.data.contents.map(article => {
            return { route: `/article/${article.id}`, payload: article };
          });
        });
      // 全てをまとめる
      return Promise.all([tags, categories, articles]).then(values => {
        return [...values[0], ...values[1], ...values[2]];
      });
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
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Caveat|M+PLUS+Rounded+1c'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/icon?family=Material+Icons'
      },
      {
        rel: 'stylesheet',
        href:
          'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css',
        integrity:
          'sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T',
        crossorigin: 'anonymous'
      }
    ],
    script: [
      {
        src: 'https://code.jquery.com/jquery-3.3.1.slim.min.js',
        integrity:
          'sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo',
        crossorigin: 'anonymous'
      },
      {
        src:
          'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js',
        integrity:
          'sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1',
        crossorigin: 'anonymous'
      },
      {
        src:
          'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js',
        integrity:
          'sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM',
        crossorigin: 'anonymous'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#28a745' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~plugins/components.js',
    '~plugins/InfiniteLoading.js'
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
    MICRO_CMS_KEY,
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
