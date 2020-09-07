<template>
  <div class="TagList">
    <div class="container-fluid">
      <h1>Tag</h1>
      <hr />
      <item-list :path="'tag'" :items="tags" />
    </div>
  </div>
</template>

<script>
import ItemList from '@/components/organisms/ClassficationList';

export default {
  name: 'TagList',
  components: {
    'item-list': ItemList
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
