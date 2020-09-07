<template>
  <div class="CategoryList">
    <div class="container-fluid">
      <h1>Category</h1>
      <hr />
      <item-list :path="'category'" :items="categories" />
    </div>
  </div>
</template>

<script>
import ItemList from '@/components/organisms/ClassficationList';

export default {
  name: 'CategoryList',
  components: {
    'item-list': ItemList
  },
  async asyncData({ $axios, payload }) {
    if (payload != null) {
      return { categories: payload };
    }
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
