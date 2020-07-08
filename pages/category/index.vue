<template>
  <div class="Categorylist">
    <nav-bar />
    <div class="container-fluid mt-6">
      <h1>カテゴリー</h1>
      <div class="border" />
      <item-list :path="'category'" :items="posts" />
      <infinite-loading @infinite="infiniteHandler" />
    </div>
  </div>
</template>

<script>
import ItemList from '@/components/ItemList';
import cms from 'assets/js/mixin/cms.mixin.js';

export default {
  name: 'Categorylist',
  components: {
    'item-list': ItemList
  },
  mixins: [cms],
  data() {
    return {
      fields: 'id,name,img',
      url: process.env.CATEGORY_URL,
      posts: []
    };
  }
};
</script>
