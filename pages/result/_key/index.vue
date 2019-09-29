<template>
 <div class="result">
   <NaviBar />
    <div class="container-fluid mt-6">
      <h2>
        {{$route.params.key}}
      </h2>
      <div class="border" />
      <ArticleList v-bind:Articledata="posts" />
    </div>
  </div>
</template>

<script>
import { createClient } from '~/plugins/contentful.js';

const client = createClient();

export default {
  name: 'result',
  async asyncData ({ env, params }) {
    return await client.getEntries({
      'content_type': env.CF_BLOG_POST_TYPE_ID,
      'fields.tags[match]': params.key,
       order: '-fields.createdAt',
    }).then(entries => {
      return {
        posts: entries.items
      }
    }).catch(console.error);
  },
}
</script>
