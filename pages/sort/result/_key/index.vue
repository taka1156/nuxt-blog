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
import {createClient} from '~/plugins/contentful.js';

const client = createClient();

const HASHKEYLIST = {
  vue:'60AkZh5rePQ409WQJKouqX',
  javascript:'YkKnihPrqDaw7If7PuChy',
  php:'5zFQK3gLVjgTB3t3Otm9S2',
  python:'54oLiOl8GNiTmDAecAHFxt',
  markdown:'sKmnt6L7LXT8cCEUXpQbq',
}

export default {
  name: 'result',
  async asyncData ({ env, params }) {
    return await client.getEntries({
      'content_type': env.CF_BLOG_POST_TYPE_ID,
      'fields.category.sys.id': HASHKEYLIST[params.key],
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