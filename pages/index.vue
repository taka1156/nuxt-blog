<template>
  <div>
    <base-heading :h-lv="1"> Top </base-heading>
    <article-list :articles="articles" :max-page="maxPage" :route-path="routePath" />
  </div>
</template>

<script>
import BaseHeading from '@/components/atoms/BaseHeading/BaseHeading';
import ArticleList from '@/components/organisms//ArticleList/ArticleList';
import meta from 'assets/js/mixin/meta.mixin.js';
const POSTS_PER_PAGE = 5;

export default {
  name: 'Top',
  components: {
    BaseHeading,
    ArticleList
  },
  mixins: [meta],
  async asyncData({ $axios, params, payload }) {
    if (payload != null) {
      return { articles: payload.articles, maxPage: payload.maxPage };
    }

    const PARAMS = {
      fields: 'id,title,summary,tags,category,createdAt,updatedAt',
      limit: POSTS_PER_PAGE,
      offset: (params.pageid - 1 || 0) * POSTS_PER_PAGE
    };

    const { contents, totalCount } = await $axios.$get(process.env.ARTICLE_URL, {
      params: PARAMS,
      headers: { 'X-API-KEY': process.env.MICRO_CMS }
    });

    const page = Math.ceil(totalCount / POSTS_PER_PAGE);

    return { articles: contents, maxPage: page };
  },
  data() {
    return {
      articles: [],
      maxPage: 0,
      routePath: 'page-pageid'
    };
  },
  head() {
    // メタタグ
    this.meta.title = 'トップ';

    return {
      title: this.meta.title
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
