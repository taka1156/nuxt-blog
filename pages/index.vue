<template>
  <div class="Top">
    <nav-bar />
    <div class="container-fluid mt-6">
      <h2>記事一覧</h2>
      <div class="border" />
      <article-list :articles="posts" />
      <client-only>
        <infinite-loading @infinite="infiniteHandler" />
      </client-only>
    </div>
  </div>
</template>

<script>
/* eslint-disable prettier/prettier */
import AricleList from '@/components/ArticleList';
import query from 'assets/js/mixin/query.mixin.js';

export default {
  name: 'Top',
  components: {
    'article-list': AricleList
  },
  mixins: [query],
  data() {
    return {
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
        this.query.fields = 'id,title,summary,tags,category,createdAt,updatedAt';
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
    }
  }
};
</script>
