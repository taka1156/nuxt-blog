<template>
  <div>
    <div class="container">
      <h1>Top</h1>
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
import AricleList from '@/components/organisms//ArticleList/ArticleList';
const POSTS_PER_PAGE = 5;

export default {
  name: 'Top',
  components: {
    'article-list': AricleList
  },
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
  }
};
</script>
