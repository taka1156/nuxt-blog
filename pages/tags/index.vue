<template>
  <div>
    <base-heading1>
      Tag
    </base-heading1>
    <div class="line" />
    <classification-list :route-path="'tag'" :items="tags" />
  </div>
</template>

<script>
import BaseHeading1 from '@/components/atoms/BaseHeading1/BaseHeading1';
import ClassificationList from '@/components/organisms/ClassificationList/ClassificationList';
import meta from 'assets/js/mixin/meta.mixin.js';

export default {
  name: 'Tags',
  components: {
    'base-heading1': BaseHeading1,
    'classification-list': ClassificationList
  },
  mixins: [meta],
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
  },
  head() {
    const URL = `${this.baseURL}/tags/`;
    const IMAGE = `${this.baseURL}/img/ogp/tag.png`;
    // メタタグ
    this.meta.title = 'タグー 一覧';
    this.meta.description =
      'taka1156のブログ。\nVueやTS、electron、Laravelなど技術関連の記事を更新中';
    this.meta.type = 'article';
    this.meta.url = URL;
    this.meta.image = IMAGE;

    return {
      title: this.meta.title,
      meta: [
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.meta.description
        },
        { hid: 'og:title', property: 'og:title', content: this.meta.title },
        { hid: 'og:type', property: 'og:type', content: this.meta.type },
        { hid: 'og:url', property: 'og:url', content: this.meta.url },
        { hid: 'og:image', property: 'og:image', content: this.meta.image },
        {
          hid: 'description',
          name: 'description',
          content: this.meta.description
        }
      ]
    };
  }
};
</script>

<style scoped>
::v-deep .base-heading1--extend {
  padding: 0 0 10px;
  border-bottom: 2.5px solid lightgray;
}
</style>
