<template>
  <div class="Article">
    <NaviBar />
    <div class="container-fluid mt-6">
      <!--記事のheader-->
      <div class="border bg-info">
        <h1>{{ post.fields.title }}</h1>
        <p>
          作成日:{{ dateFormat(post.fields.createdAt) }} ~ 更新日:{{
            dateFormat(post.fields.updatedAt)
          }}
        </p>
        <div class="mx-auto d-flex justify-content-center">
          タグ:&nbsp;
          <div v-for="(tag, index) in post.fields.tags" :key="index">
            <p class="badge badge-pill badge-secondary">{{ tag }}</p>
            &nbsp;
          </div>
        </div>
      </div>
      <!--markdown埋め込み-->
      <div class="text-left text-break" v-html="$md.render(post.fields.body)" />
    </div>
  </div>
</template>

<script>
import { createClient } from "~/plugins/contentful.js";

const client = createClient();

export default {
  name: "Artcle",
  async asyncData({ env, params }) {
    return await client
      .getEntries({
        content_type: env.CF_BLOG_POST_TYPE_ID,
        "fields.subpath": params.subpath,
        order: "-sys.createdAt"
      })
      .then(entries => {
        return {
          post: entries.items[0]
        };
      })
      .catch(console.error);
  },
  head() {
    const url = `${this.url}/post/${this.post.fields.subpath}`;
  },
  methods: {
    dateFormat(date) {
      if (date === undefined) return "--/--/--";
      return new Date(date).toLocaleDateString();
    }
  }
};
</script>
