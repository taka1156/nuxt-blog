<template>
  <div class="top">
    <Header />
    <NaviBar />
    <div class="container-fluid mt-4">
      <h2>記事一覧</h2>
      <div class="border" />
      <ArticleList :articles="posts" />
      <infinite-loading @infinite="infiniteHandler" />
    </div>
  </div>
</template>

<script>
const POSTS_PER_PAGE = 10;

export default {
  name: 'Top',
  data() {
    return {
      page: 0,
      posts: [],
      isLoad: true
    };
  },
  computed: {
    pageIndex() {
      return this.page * POSTS_PER_PAGE;
    }
  },
  methods: {
    async infiniteHandler($state) {
      if (this.isLoad) {
        // クエリ
        const OPTIONS = {
          fields: 'id,title,summary,tags,createdAt,updatedAt',
          limit: POSTS_PER_PAGE,
          offset: this.pageIndex
        };
        // コンテンツの取得
        const contents = await this.$getContents(
          process.env.MICRO_CMS_KEY,
          process.env.ARTICLE_URL,
          OPTIONS
        );
        // ページング
        if (contents.length > 0) {
          this.page++;
          this.posts.push(...contents);
          $state.loaded();
        } else {
          $state.complete();
          this.isLoad = false;
        }
      }
    }
  }
};
</script>
