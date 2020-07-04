<template>
  <div class="Category">
    <!--廃止予定-->
    <!--<NaviBar />
    <div class="container-fluid mt-6">
      <h2>
        カテゴリー
      </h2>
      <div class="border" />
      <ul class="list-group">
        <div v-for="(category, index) in categories" :key="index">
          <div
            class="article-color m-2 mx-auto list-group-item flex-column align-items-start"
            @click="jump(category)"
          >
            <div class="d-flex w-100 justify-content-between">
              <h2 class="h3">{{ category.fields.tag }}</h2>
              <img
                :src="require(`@/assets/${category.fields.tag}.svg`)"
                height="50px"
                width="50px"
              />
            </div>
          </div>
        </div>
      </ul>
    </div>-->
  </div>
</template>

<script>
/*
import { createClient } from '~/plugins/contentful.js';

const client = createClient();

export default {
  name: 'Category',
  async asyncData({ env }) {
    return await client
      .getEntries({
        content_type: env.CF_BLOG_TAG_TYPE_ID,
        'fields.categoryflag': true,
        order: 'fields.id'
      })
      .then(entries => {
        return {
          categories: entries.items
        };
      })
      .catch(console.error);
  },
  methods: {
    jump(category) {
      this.$router.push(`../result/${category.fields.tag}`);
    }
  }
};
*/
</script>
