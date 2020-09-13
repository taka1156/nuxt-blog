<template>
  <div class="Category">
    <div class="container-fluid">
      <classfication-title :img-url="category.img.url">
        Category: {{ category.name }}
      </classfication-title>
      <hr />
      <article-list :filters="filters" />
    </div>
  </div>
</template>

<script>
import ClassficationTitle from '@/components/organisms/ClassficationTitle';
import AricleList from '@/components/organisms/ArticleList';
import meta from 'assets/js/mixin/meta.mixin.js';

export default {
  name: 'Category',
  components: {
    'classfication-title': ClassficationTitle,
    'article-list': AricleList
  },
  mixins: [meta],
  async asyncData({ $axios, params, payload }) {
    if (payload != null) {
      return { category: payload };
    }
    const CATEGORY_URL = `${process.env.CATEGORY_URL}/${params.id}`;
    const CATEGORY = await $axios.$get(CATEGORY_URL, {
      params: { fields: 'id,name,img' },
      headers: { 'X-API-KEY': process.env.MICRO_CMS }
    });
    return { category: CATEGORY };
  },
  data() {
    return {
      category: {},
      // 記事取得クエリ
      filters: `category[equals]${this.$route.params.id}`
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
    const URL = `${this.baseURL}/category/${this.category.id}`;
    const IMAGE = this.format(this.category.img.url);
    // メタタグ
    this.meta.title = `${this.category.name}カテゴリの記事一覧`;
    this.meta.description = `${this.category.name}関連の記事`;
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
