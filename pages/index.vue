<template>
  <div class="top">
    <Header />
    <NaviBar />
    <div class="container-fluid mt-4">
      <h2>記事一覧</h2>
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
  name: "top",
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
          skip: (this.page - 1) * POSTS_PER_PAGE,
          limit: POSTS_PER_PAGE,
          order: "-fields.createdAt"
        })
        .then(entries => {
          if (entries.items.length) {
            this.page++;
            this.posts.push(...entries.items);
            console.log(
              "this.posts=" + this.posts + "(" + this.posts.length + ")"
            );
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

