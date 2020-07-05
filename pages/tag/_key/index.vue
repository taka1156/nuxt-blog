<template>
  <div class="Tag">
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
import cms from 'assets/js/mixin/cms.mixin.js';

export default {
  name: 'Tag',
  mixins: [cms],
  data() {
    return {
      fields: 'id,title,summary,tags,category,createdAt,updatedAt',
      filter: `tags[contains]${this.$route.query.id}`,
      url: process.env.ARTICLE_URL,
      posts: []
    };
  }
};
</script>
