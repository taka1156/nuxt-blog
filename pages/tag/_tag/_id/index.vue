<template>
  <div class="Tag">
    <nav-bar />
    <div class="container-fluid mt-6">
      <h1 class="h4">タグ:{{ $route.params.tag }}</h1>
      <div class="border" />
      <article-list :articles="posts" />
      <infinite-loading @infinite="infiniteHandler" />
    </div>
  </div>
</template>

<script>
import cms from 'assets/js/mixin/cms.mixin.js';

export default {
  name: 'Tag',
  mixins: [cms],
  data() {
    return {
      fields: 'id,title,summary,tags,category,createdAt,updatedAt',
      filter: `tags[contains]${this.$route.params.id}`,
      url: process.env.ARTICLE_URL,
      posts: []
    };
  }
};
</script>
