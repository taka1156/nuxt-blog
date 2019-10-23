<template>
  <div class="result">
    <NaviBar />
    <div class="container-fluid mt-6">
      <h2>{{ $route.params.key }}</h2>
      <div class="border" />
      <ArticleList v-bind:Articledata="posts" />
      <infinite-loading @infinite="infiniteHandler" />
    </div>
  </div>
</template>

<script>
import { createClient } from "~/plugins/contentful.js";

const client = createClient();
const POSTS_PER_PAGE = 5;

export default {
  name: "result",
  data() {
    return {
      page: 1,
      posts: []
    };
  },
  methods: {
    infiniteHandler($state) {
      return client
        .getEntries({
          content_type: process.env.CF_BLOG_POST_TYPE_ID,
          "fields.tags[match]": this.$route.params.key,
          skip: (this.page - 1) * POSTS_PER_PAGE,
          limit: POSTS_PER_PAGE,
          order: "-fields.createdAt"
        })
        .then(entries => {
          if (entries.items.length) {
            this.page++;
            this.posts.push(...entries.items);
            $state.loaded();
          } else {
            $state.complete();
          }
        })
        .catch(console.error);
    }
  }
};
</script>
