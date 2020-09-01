<template>
  <div class="ArticleList">
    <div v-if="articles.length !== 0">
      <ul>
        <article v-for="(article, index) in articles" :key="index">
          <article-list-item :article="article" @jump="jump(article)" />
        </article>
      </ul>
    </div>
    <client-only>
      <infinite-loading @infinite="infiniteHandler" />
    </client-only>
  </div>
</template>

<script>
import ArticleListItem from '../molecules/ArticleListItem';

const POSTS_PER_PAGE = 10;

export default {
  components: {
    'article-list-item': ArticleListItem
  },
  props: {
    filters: {
      type: String,
      default: '',
      required: true
    }
  },
  data() {
    return {
      articles: [],
      page: 0,
      isLoaded: false
    };
  },
  computed: {
    pageIndex() {
      return this.page * POSTS_PER_PAGE;
    }
  },
  methods: {
    async infiniteHandler($state) {
      if (!this.isLoaded) {
        const QUERY = {
          fields: 'id,title,summary,tags,category,createdAt,updatedAt',
          limit: POSTS_PER_PAGE,
          offset: this.pageIndex
        };
        if (this.filters !== '') {
          QUERY['filters'] = this.filters;
        }
        // コンテンツの取得
        const { contents } = await this.$axios.$get(process.env.ARTICLE_URL, {
          params: { ...QUERY },
          headers: { 'X-API-KEY': process.env.MICRO_CMS }
        });

        // ページング
        if (contents.length > 0) {
          this.page++;
          this.articles.push(...contents);
          $state.loaded();
        } else {
          $state.complete();
          this.isLoaded = true;
        }
      }
    }
  }
};
</script>

<style scoped>
/* css reset */
ul {
  margin: 0;
  padding: 0;
}

/* css reset */
</style>
