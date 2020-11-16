<template>
  <div class="TagList">
    <div class="container">
      <h1>Tag</h1>
      <div class="line" />
      <classification-list :path="'tag'" :items="tags" />
    </div>
  </div>
</template>

<script>
import ClassificationList from '@/components/organisms/list/ClassificationList';

export default {
  name: 'TagList',
  components: {
    'classification-list': ClassificationList
  },
  async asyncData({ $axios, payload }) {
    if (payload != null) {
      return { tags: payload };
    }
    const { contents } = await $axios.$get(process.env.TAG_URL, {
      params: { fields: 'id,name,img', limit: 20 },
      headers: { 'X-API-KEY': process.env.MICRO_CMS }
    });
    return { tags: contents };
  },
  data() {
    return { tags: [] };
  }
};
</script>
