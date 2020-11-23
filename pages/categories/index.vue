<template>
  <div>
    <div class="container">
      <h1>Category</h1>
      <div class="line" />
      <classification-list :route-path="'category'" :items="categories" />
    </div>
  </div>
</template>

<script>
import ClassificationList from '@/components/organisms/ClassificationList/ClassificationList';

export default {
  name: 'Categories',
  components: {
    'classification-list': ClassificationList
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
