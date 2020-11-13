<template>
  <div>
    <div v-if="articles.length !== 0">
      <article-pagination
        :current-page="currentPage"
        :max-page="maxPage"
        @prev="prev"
        @next="next"
      />
      <ul>
        <article v-for="(article, index) in articles" :key="index">
          <article-list-item
            :article="article"
            @classfication-jump="classficationJump"
          />
        </article>
      </ul>
      <article-pagination
        :current-page="currentPage"
        :max-page="maxPage"
        @prev="prev"
        @next="next"
      />
    </div>
    <p v-else>記事がありません。</p>
  </div>
</template>

<script>
import ArticleListItem from '../../molecules/list/ArticleListItem';
import ArticlePagination from '../../molecules/list/ArticlePagination';

export default {
  components: {
    'article-list-item': ArticleListItem,
    'article-pagination': ArticlePagination
  },
  props: {
    articles: {
      type: Array,
      default: () => [],
      required: true
    },
    maxPage: {
      type: Number,
      default: 0,
      required: true
    },
    routePath: {
      type: String,
      default: '',
      required: true
    }
  },
  computed: {
    currentPage() {
      // return parseInt(this.$route.params.pageid || 1);
      if (this.$route != null && this.$route.params.pageid != null) {
        return parseInt(this.$route.params.pageid);
      } else {
        return 1;
      }
    }
  },
  methods: {
    prev() {
      let pageid = Math.max(this.currentPage - 1, 0);
      if (pageid < 1) {
        pageid = this.maxPage;
      }
      this.pageJump(pageid);
    },
    next() {
      let pageid = Math.min(this.currentPage + 1, this.maxPage + 1);
      if (pageid > this.maxPage) {
        pageid = 1;
      }
      this.pageJump(pageid);
    },
    pageJump(pageid) {
      this.$router.push({
        name: this.routePath,
        params: { pageid: pageid }
      });
    },
    classficationJump({ path, id }) {
      this.$router.push({
        name: `${path}-id`,
        params: { id: id }
      });
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
