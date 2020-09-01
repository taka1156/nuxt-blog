<template>
  <div class="Tag">
    <div class="container-fluid">
      <classfication-title :img-url="tag.img.url">
        Tag: {{ tag.name }}
      </classfication-title>
      <hr />
      <article-list :filters="filters" />
    </div>
  </div>
</template>

<script>
import ClassficationTitle from '@/components/molecules/ClassficationTitle';
import AricleList from '@/components/organisms/ArticleList';
import meta from 'assets/js/mixin/meta.mixin.js';

export default {
  name: 'Tag',
  components: {
    'classfication-title': ClassficationTitle,
    'article-list': AricleList
  },
  mixins: [meta],
  async asyncData({ $axios, params, payload }) {
    if (payload != null) {
      return { tag: payload };
    }
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

<style scoped></style>
