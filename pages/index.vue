<template>
 <div class="top">
   <Header />
   <NaviBar />
    <div class="container-fluid bg-color mt-4">
      <h2>
        記事一覧
      </h2>
      <div class="border" />
      <ArticleList v-bind:Articledata="posts" />
    </div>
  </div>
</template>

<script>
import {createClient} from '~/plugins/contentful.js';

const client = createClient();

export default {
  name: 'top',
  async asyncData ({ env, params }) {
    return await client.getEntries({
      'content_type': env.CF_BLOG_POST_TYPE_ID,
      'fields.subpath': params.subpath,
       order: '-fields.createdAt',
    }).then(entries => {
      console.log(entries.items)
      return {
        posts: entries.items
      }
    }).catch(console.error);
  }
}
</script>

