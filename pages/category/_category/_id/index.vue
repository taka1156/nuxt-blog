<template>
  <div class="Category">
    <nav-bar />
    <div class="container-fluid mt-6">
      <div class="m-1 d-flex justify-content-center">
        <h1 class="h4 m-1">カテゴリー:{{ category.name }}</h1>
        <img :src="category.img.url" class="m-1 icon" />
      </div>
      <div class="border" />
      <article-list :articles="posts" />
      <infinite-loading @infinite="infiniteHandler" />
    </div>
  </div>
</template>

<script>
import AricleList from '@/components/ArticleList';
import meta from 'assets/js/mixin/meta.mixin.js';
import cms from 'assets/js/mixin/cms.mixin.js';

export default {
  name: 'Category',
  components: {
    'article-list': AricleList
  },
  mixins: [meta, cms],
  async asyncData({ $axios, params }) {
    const CATEGORY_URL = `${process.env.CATEGORY_URL}/${params.id}`;
    const OPTIONS = { fields: 'id,name,img' };
    const CATEGORY_INFO = await $axios.$get(CATEGORY_URL, {
      params: { ...OPTIONS },
      headers: { 'X-API-KEY': process.env.MICRO_CMS_KEY }
    });
    return { category: CATEGORY_INFO };
  },
  data() {
    return {
      fields: 'id,title,summary,tags,category,createdAt,updatedAt',
      filter: `category[equals]${this.$route.params.id}`,
      url: process.env.ARTICLE_URL,
      posts: [],
      category: {}
    };
  },
  head() {
    // メタタグ
    this.meta.title = `${this.category.name}カテゴリの記事一覧`;
    this.meta.description = `${this.category.name}関連の記事`;
    this.meta.type = 'article';
    this.meta.url = `${this.baseURL}/category/${this.category.name}/${this.category.id}`;
    this.meta.image = this.category.img.url || '';

    return {
      title: this.meta.title,
      meta: [
        // eslint-disable-next-line prettier/prettier
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.meta.description
        },
        { hid: 'og:title', property: 'og:title', content: this.meta.title },
        { hid: 'og:type', property: 'og:type', content: this.meta.type },
        { hid: 'og:url', property: 'og:url', content: this.meta.url },
        { hid: 'og:image', property: 'og:image', content: this.meta.image }
      ]
    };
  }
};
</script>

<style scoped>
.icon {
  height: 30px;
  width: 30px;
}
</style>
