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
        <li v-for="(article, index) in articles" :key="`article_${index}`">
          <article-list-item :article="article" />
        </li>
      </ul>
      <article-pagination
        :current-page="currentPage"
        :max-page="maxPage"
        @prev="prev"
        @next="next"
      />
    </div>
    <div v-else>
      <base-text :use-type="`none`">記事がありません。</base-text>
    </div>
  </div>
</template>

<script>
import ArticleListItem from '../ArticleListItem/ArticleListItem';
import ArticlePagination from '../../molecules/ArticlePagination/ArticlePagination';
import BaseText from '../../atoms/BaseText/BaseText';

export default {
  components: {
    'article-list-item': ArticleListItem,
    'article-pagination': ArticlePagination,
    'base-text': BaseText
  },
  props: {
    /**
     * 記事一覧
     */
    articles: {
      type: Array,
      default: () => [],
      required: true
    },
    /**
     * 最大ページ数
     */
    maxPage: {
      type: Number,
      default: 0,
      required: true
    },
    /**
     * 現在閲覧中のroute
     * (閲覧しているパスによってpageJumpの行き先が変わる)
     * @values page-pageid, tag-id-pageid, category-id-pageid
     */
    routePath: {
      type: String,
      default: '',
      required: true,
      validator: function(value) {
        return (
          ['page-pageid', 'tag-id-pageid', 'category-id-pageid'].indexOf(value) !==
          -1
        );
      }
    }
  },
  computed: {
    /**
     * 現在閲覧中のページ
     */
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
      /**
       * ひとつ前のページに戻る
       */
      let pageid = Math.max(this.currentPage - 1, 0);
      if (pageid < 1) {
        pageid = this.maxPage;
      }
      this.pageJump(pageid);
    },
    next() {
      /**
       * ひとつ後のページに進む
       */
      let pageid = Math.min(this.currentPage + 1, this.maxPage + 1);
      if (pageid > this.maxPage) {
        pageid = 1;
      }
      this.pageJump(pageid);
    },
    pageJump(pageid) {
      /**
       * 実際にページを進める
       * (vue-router)
       */
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
ul,
li {
  padding: 0;
  margin: 0;
  list-style-type: none;
}

/* css reset */
</style>
