<template>
  <div class="Tag">
    <nav-bar />
    <div class="container-fluid mt-6">
      <div class="m-1 d-flex justify-content-center">
        <h1 class="h5 mx-1 my-auto">タグ:{{ tag.name }}</h1>
        <img :src="format(tag.img.url)" class="m-1 icon" />
      </div>
      <div class="border" />
      <article-list :filters="filters" />
    </div>
  </div>
</template>

<script>
import AricleList from '@/components/ArticleList';
import meta from 'assets/js/mixin/meta.mixin.js';

export default {
  name: 'Tag',
  components: {
    'article-list': AricleList
  },
  mixins: [meta],
  async asyncData({ $axios, params }) {
    const TAG_URL = `${process.env.TAG_URL}/${params.id}`;
    const TAG = await $axios.$get(TAG_URL, {
      params: { fields: 'id,name,img' },
      headers: { 'X-API-KEY': process.env.MICRO_CMS }
    });
    return { tag: TAG };
  },
  data() {
    return {
      tag: {},
      // 記事取得クエリ
      filters: `tags[contains]${this.$route.params.id}`
    };
  },
  methods: {
    format(imgUrl) {
      if (imgUrl == null) {
        return '';
      }
      return `${imgUrl}?fit=fillmax&fill-color=white&w=200&h=200`;
    }
  },
  head() {
    const URL = `${this.baseURL}/tag/${this.tag.id}`;
    const IMAGE = this.format(this.tag.img.url);
    // メタタグ
    this.meta.title = `${this.tag.name}タグの記事一覧`;
    this.meta.description = `${this.tag.name}関連の記事`;
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
        { hid: 'og:image', property: 'og:image', content: this.meta.image }
      ]
    };
  }
};
</script>

<style scoped>
.icon {
  height: 50px;
  width: 50px;
}
</style>
