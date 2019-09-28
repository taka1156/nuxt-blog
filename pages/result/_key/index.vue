<template>
 <div class="result">
   <NaviBar />
    <div class="container-fluid bg-color mt-6">
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
import id from '~/plugins/key.js';

const client = createClient();

export default {
  name: 'result',
  async asyncData ({ env }) {
    return await client.getEntries({
      'content_type': env.CF_BLOG_POST_TYPE_ID,
      'fields.tags.sys.id': id.TagID,
       order: '-fields.createdAt',
    }).then(entries => {
      return {
        posts: entries.items
      }
    }).catch(console.error);
  }
}
</script>