<template>
  <div class="Tag">
    <nav-bar />
    <div class="container-fluid mt-6">
      <div class="m-1 d-flex justify-content-center">
        <h1 class="h5 mx-1 my-auto">タグ:{{ tag.name }}</h1>
        <img :src="format(tag.img.url)" class="m-1 icon" />
      </div>
      <div class="border" />
      <article-list :articles="posts" />
      <client-only>
        <infinite-loading @infinite="infiniteHandler" />
      </client-only>
    </div>
  </div>
</template>

<script>
import AricleList from '@/components/ArticleList';
import meta from 'assets/js/mixin/meta.mixin.js';
import query from 'assets/js/mixin/query.mixin.js';

export default {
  name: 'Tag',
  components: {
    'article-list': AricleList
  },
  mixins: [meta, query],
  async asyncData({ $axios, params }) {
    const TAG_URL = `${process.env.TAG_URL}/${params.id}`;
    const TAG = await $axios.$get(TAG_URL, {
      params: { fields: 'id,name,img' },
      headers: { 'X-API-KEY': process.env.MICRO_CMS_KEY }
    });
    return { tag: TAG };
  },
  data() {
    return {
      tag: {},
      posts: [],
      page: 0,
      isLoaded: false
    };
  },
  computed: {
    pageIndex() {
      return this.page * this.POSTS_PER_PAGE;
    }
  },
  methods: {
    async infiniteHandler($state) {
      if (!this.isLoaded) {
        // クエリ設定
        this.query.fields =
          'id,title,summary,tags,category,createdAt,updatedAt';
        this.query.filters = `tags[contains]${this.$route.params.id}`;
        this.query.limit = this.POSTS_PER_PAGE;
        this.query.offset = this.pageIndex;

        // コンテンツの取得
        const { contents } = await this.$axios.$get(process.env.ARTICLE_URL, {
          params: { ...this.query },
          headers: { 'X-API-KEY': process.env.MICRO_CMS_KEY }
        });

        // ページング
        if (contents.length > 0) {
          this.page++;
          this.posts.push(...contents);
          $state.loaded();
        } else {
          $state.complete();
          this.isLoaded = true;
        }
      }
    },
    format(imgUrl) {
      if (imgUrl == null) {
        return '';
      }
      return `${imgUrl}?fit=fillmax&fill-color=white&w=200&h=200`;
    }
  },
  head() {
    const URL = `${this.baseURL}/tag/${this.tag.id}`;
    const IMAGE = this.format(this.tag.img.url);
    // メタタグ
    this.meta.title = `${this.tag.name}タグの記事一覧`;
    this.meta.description = `${this.tag.name}関連の記事`;
    this.meta.type = 'article';
    this.meta.url = URL;
    this.meta.image = IMAGE;

    return {
      title: this.meta.title,
      meta: [
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.meta.description
        },
        { hid: 'og:title', property: 'og:title', content: this.meta.title },
        { hid: 'og:type', property: 'og:type', content: this.meta.type },
        { hid: 'og:url', property: 'og:url', content: this.meta.url },
        { hid: 'og:image', property: 'og:image', content: this.meta.image }
      ]
    };
  }
};
</script>

<style scoped>
.icon {
  height: 50px;
  width: 50px;
}
</style>
