<template>
  <div class="CategoryList">
    <div class="container">
      <h1>Category</h1>
      <div class="line" />
      <classfication-list :path="'category'" :items="categories" />
    </div>
  </div>
</template>

<script>
import ClassficationList from '@/components/organisms/list/ClassficationList';

export default {
  name: 'CategoryList',
  components: {
    'classfication-list': ClassficationList
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
