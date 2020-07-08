<template>
  <div class="Tag">
    <nav-bar />
    <div class="container-fluid mt-6">
      <div class="m-1 d-flex justify-content-center">
        <h1 class="h5 mx-1 my-auto">タグ:{{ tag.name }}</h1>
        <img :src="tag.img.url" class="m-1 icon" />
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
  name: 'Tag',
  components: {
    'article-list': AricleList
  },
  mixins: [meta, cms],
  async asyncData({ $axios, params }) {
    const TAG_URL = `${process.env.TAG_URL}/${params.id}`;
    const TAG = await $axios.$get(TAG_URL, {
      params: { fields: 'id,name,img' },
      headers: { 'X-API-KEY': process.env.MICRO_CMS_KEY }
    });
    return { tag: TAG };
  },
  data() {
    return {
      fields: 'id,title,summary,tags,category,createdAt,updatedAt',
      filter: `tags[contains]${this.$route.params.id}`,
      url: process.env.ARTICLE_URL,
      posts: [],
      tag: {}
    };
  },
  head() {
    const URL = `${this.baseURL}/tag/${this.tag.id}`;
    const IMAGE = this.tag.img.url != null ? this.tag.img.url : '';
    // メタタグ
    this.meta.title = `${this.tag.name}タグの記事一覧`;
    this.meta.description = `${this.tag.name}関連の記事`;
    this.meta.type = 'article';
    this.meta.url = URL;
    this.meta.image = IMAGE;

    // 画像サイズの調節
    if (this.meta.image !== '') {
      this.meta.image = `${this.meta.image}?fit=fillmax&fill-color=white&w=200&h=200`;
    }

    return {
      title: this.meta.title,
      meta: [
        // eslint-disable-next-line prettier/prettier
        { hid: 'og:description', property: 'og:description', content: this.meta.description },
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
