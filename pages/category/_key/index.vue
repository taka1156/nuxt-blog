<template>
  <div class="Category">
    <NaviBar />
    <div class="container-fluid mt-6">
      <h2>{{ $route.params.key }}</h2>
      <div class="border" />
      <ArticleList :articles="posts" />
      <infinite-loading @infinite="infiniteHandler" />
    </div>
  </div>
</template>

<script>
// FIX:後でresult->tagに変更(pagesのresult/_keyも修正)
const POSTS_PER_PAGE = 10;

export default {
  name: 'Category',
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
        // 指定のタグIDを含む記事を探す
        const FILTER_CATEGORY = `category[equals]${this.$route.query.id}`;
        // クエリ
        const OPTIONS = {
          fields: 'id,title,summary,tags,category,createdAt,updatedAt',
          filters: FILTER_CATEGORY,
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
