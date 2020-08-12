<template>
  <div class="Categorylist">
    <nav-bar />
    <div class="container-fluid mt-6">
      <h1>カテゴリー</h1>
      <div class="border" />
      <item-list :path="'category'" :items="categories" />
    </div>
  </div>
</template>

<script>
import ItemList from '@/components/ItemList';

export default {
  name: 'Categorylist',
  components: {
    'item-list': ItemList
  },
  async asyncData({ $axios }) {
    const { contents } = await $axios.$get(process.env.CATEGORY_URL, {
      params: { fields: 'id,name,img' },
      headers: { 'X-API-KEY': process.env.MICRO_CMS }
    });
    return { categories: contents };
  },
  data() {
    return { categories: [] };
  }
};
</script>
