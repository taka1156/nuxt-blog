<template>
  <div class="Taglist">
    <nav-bar />
    <div class="container-fluid mt-6">
      <h2>
        タグ
      </h2>
      <div class="border" />
      <ul class="list-group">
        <div v-for="(tag, index) in posts" :key="index">
          <div
            class="m-2 mx-auto list-group-item flex-column align-items-start"
            @click="jump(tag)"
          >
            <div class="clickable d-flex w-100 justify-content-between">
              <h2 class="h4">{{ tag.name }}</h2>
              <img :src="tag.img.url" height="70px" width="70px" />
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
  name: 'Taglist',
  mixins: [cms],
  data() {
    return {
      fields: 'id,name,img',
      url: process.env.TAG_URL,
      posts: []
    };
  },
  methods: {
    jump(tag) {
      this.$router.push(`/tag/${tag.name}/${tag.id}`);
    }
  }
};
</script>
