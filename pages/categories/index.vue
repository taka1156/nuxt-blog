<template>
  <div>
    <h1>Category</h1>
    <div class="line" />
    <classification-list :route-path="'category'" :items="categories" />
  </div>
</template>

<script>
import ClassificationList from '@/components/organisms/ClassificationList/ClassificationList';
import meta from 'assets/js/mixin/meta.mixin.js';

export default {
  name: 'Categories',
  components: {
    'classification-list': ClassificationList
  },
  mixins: [meta],
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
  },
  head() {
    const URL = `${this.baseURL}/categories/`;
    const IMAGE = `${this.baseURL}/img/ogp/category.png`;
    // メタタグ
    this.meta.title = 'カテゴリー 一覧';
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
          property: 'description',
          content: this.meta.description
        }
      ]
    };
  }
};
</script>
