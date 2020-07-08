<template>
  <div class="Category">
    <nav-bar />
    <div class="container-fluid mt-6">
      <h1 class="h4">カテゴリー:{{ $route.params.category }}</h1>
      <div class="border" />
      <article-list :articles="posts" />
      <infinite-loading @infinite="infiniteHandler" />
    </div>
  </div>
</template>

<script>
import AricleList from '@/components/ArticleList';
import cms from 'assets/js/mixin/cms.mixin.js';

export default {
  name: 'Category',
  components: {
    'article-list': AricleList
  },
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
