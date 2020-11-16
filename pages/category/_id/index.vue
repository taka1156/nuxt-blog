<template>
  <div class="Category">
    <div class="container">
      <classification-title :img-url="category.img.url">
        Category: {{ category.name }}
      </classification-title>
      <div class="line" />
      <article-list
        :articles="articles"
        :max-page="maxPage"
        :route-path="routePath"
      />
    </div>
  </div>
</template>

<script>
import ClassificationTitle from '@/components/organisms/title/ClassificationTitle';
import AricleList from '@/components/organisms/list/ArticleList';
import meta from 'assets/js/mixin/meta.mixin.js';
const POSTS_PER_PAGE = 5;

export default {
  name: 'Category',
  components: {
    'classification-title': ClassificationTitle,
    'article-list': AricleList
  },
  mixins: [meta],
  async asyncData({ $axios, params, payload }) {
    if (payload != null) {
      return {
        category: payload.category,
        articles: payload.articles,
        maxPage: payload.maxPage
      };
    }
    const CATEGORY_URL = `${process.env.CATEGORY_URL}/${params.id}`;
    const CATEGORY = await $axios.$get(CATEGORY_URL, {
      params: { fields: 'id,name,img' },
      headers: { 'X-API-KEY': process.env.MICRO_CMS }
    });

    const { contents, totalCount } = await $axios.$get(process.env.ARTICLE_URL, {
      params: {
        fields: 'id,title,summary,tags,category,createdAt,updatedAt',
        limit: POSTS_PER_PAGE,
        offset: (params.pageid - 1 || 0) * POSTS_PER_PAGE,
        filters: `category[equals]${params.id}`
      },
      headers: { 'X-API-KEY': process.env.MICRO_CMS }
    });

    const page = Math.ceil(totalCount / POSTS_PER_PAGE);

    return { category: CATEGORY, articles: contents, maxPage: page };
  },
  data() {
    return {
      category: {},
      articles: [],
      maxPage: 0,
      routePath: 'category-id-pageid'
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
    const URL = `${this.baseURL}/category/${this.category.id}/1`;
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
