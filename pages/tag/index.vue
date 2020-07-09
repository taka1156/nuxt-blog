<template>
  <div class="Taglist">
    <nav-bar />
    <div class="container-fluid mt-6">
      <h1>タグ</h1>
      <div class="border" />
      <item-list :path="'tag'" :items="tags" />
    </div>
  </div>
</template>

<script>
import ItemList from '@/components/ItemList';

export default {
  name: 'Taglist',
  components: {
    'item-list': ItemList
  },
  async asyncData({ $axios }) {
    const { contents } = await $axios.$get(process.env.TAG_URL, {
      params: { fields: 'id,name,img', limit: 20 },
      headers: { 'X-API-KEY': process.env.MICRO_CMS_KEY }
    });
    return { tags: contents };
  },
  data() {
    return { tags: [] };
  }
};
</script>
