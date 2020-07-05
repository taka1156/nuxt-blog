<template>
  <div class="Categorylist">
    <NaviBar />
    <div class="container-fluid mt-6">
      <h2>
        カテゴリー
      </h2>
      <div class="border" />
      <ul class="list-group">
        <div v-for="(category, index) in posts" :key="index">
          <div
            class="article-color m-2 mx-auto list-group-item flex-column align-items-start"
            @click="jump(category)"
          >
            <div class="clickable d-flex w-100 justify-content-between">
              <h2 class="h4">{{ category.name }}</h2>
              <img :src="category.img.url" height="50px" width="50px" />
            </div>
          </div>
        </div>
      </ul>
      <infinite-loading @infinite="infiniteHandler" />
    </div>
  </div>
</template>

<script>
import cms from 'assets/js/mixin/cms.mixin.js';

export default {
  name: 'Categorylist',
  mixins: [cms],
  data() {
    return {
      fields: 'id,name,img',
      url: process.env.CATEGORY_URL,
      posts: []
    };
  },
  methods: {
    jump(category) {
      this.$router.push(`./category/${category.name}/${category.id}`);
    }
  }
};
</script>
