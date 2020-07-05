<template>
  <div class="Category">
    <NaviBar />
    <div class="container-fluid mt-6">
      <h2>{{ $route.params.category }}</h2>
      <div class="border" />
      <ArticleList :articles="posts" />
      <infinite-loading @infinite="infiniteHandler" />
    </div>
  </div>
</template>

<script>
import cms from 'assets/js/mixin/cms.mixin.js';

export default {
  name: 'Category',
  mixins: [cms],
  data() {
    return {
      fields: 'id,title,summary,tags,category,createdAt,updatedAt',
      filter: `category[equals]${this.$route.params.id}`,
      url: process.env.ARTICLE_URL,
      posts: []
    };
  }
};
</script>
