<template>
  <div>
    <div v-if="articles.length !== 0">
      <article-pagenation
        :current-page="currentPage"
        :max-page="maxPage"
        :prev="prev"
        :next="next"
      />
      <ul>
        <article v-for="(article, index) in articles" :key="index">
          <article-list-item :article="article" />
        </article>
      </ul>
      <article-pagenation
        :current-page="currentPage"
        :max-page="maxPage"
        :prev="prev"
        :next="next"
      />
    </div>
    <p v-else>記事がありません。</p>
  </div>
</template>

<script>
import ArticleListItem from '../molecules/ArticleListItem';
import ArticlePagenation from '@/components/atoms/ArticlePagenation';

export default {
  components: {
    'article-list-item': ArticleListItem,
    'article-pagenation': ArticlePagenation
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
      return parseInt(this.$route.params.pageid || 1);
    }
  },
  methods: {
    prev() {
      let pageid = Math.max(this.currentPage - 1, 0);
      if (pageid < 1) {
        pageid = this.maxPage;
      }
      this.jump(pageid);
    },
    next() {
      let pageid = Math.min(this.currentPage + 1, this.maxPage + 1);
      if (pageid > this.maxPage) {
        pageid = 1;
      }
      this.jump(pageid);
    },
    jump(pageid) {
      this.$router.push({
        name: this.routePath,
        params: { pageid: pageid }
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
