<template>
  <div class="ArticleList">
    <div class="list-group">
      <div v-if="articles.length !== 0">
        <div v-for="(article, index) in articles" :key="index">
          <article class="my-2 border rounded">
            <article-header :article="article">
              <template v-slot:title>
                <h3
                  class="clickable text-break text-left my-1 text-success"
                  @click="jump(article)"
                >
                  {{ article.title }}
                </h3>
              </template>
            </article-header>
          </article>
        </div>
      </div>
    </div>
    <client-only>
      <infinite-loading @infinite="infiniteHandler" />
    </client-only>
  </div>
</template>

<script>
import ArticleHeader from './ArticleParts/ArticleHeader';

const POSTS_PER_PAGE = 10;

export default {
  components: {
    'article-header': ArticleHeader
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
        let QUERY = {
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
    },
    jump({ id }) {
      this.$router.push({ name: 'article-id', params: { id: `${id}` } });
    }
  }
};
</script>
