<template>
  <div class="Top">
    <nav-bar />
    <div class="container-fluid mt-6">
      <h2>記事一覧</h2>
      <div class="border" />
      <article-list :articles="posts" />
      <infinite-loading @infinite="infiniteHandler" />
    </div>
  </div>
</template>

<script>
import cms from 'assets/js/mixin/cms.mixin.js';

export default {
  name: 'Top',
  mixins: [cms],
  data() {
    return {
      fields: 'id,title,summary,tags,category,createdAt,updatedAt',
      url: process.env.ARTICLE_URL,
      posts: []
    };
  }
};
</script>
