<template>
  <div class="Taglist">
    <nav-bar />
    <div class="container-fluid mt-6">
      <h1>タグ</h1>
      <div class="border" />
      <item-list :path="'tag'" :items="posts" />
      <infinite-loading @infinite="infiniteHandler" />
    </div>
  </div>
</template>

<script>
import ItemList from '@/components/ItemList';
import cms from 'assets/js/mixin/cms.mixin.js';

export default {
  name: 'Taglist',
  components: {
    'item-list': ItemList
  },
  mixins: [cms],
  data() {
    return {
      fields: 'id,name,img',
      url: process.env.TAG_URL,
      posts: []
    };
  }
};
</script>
