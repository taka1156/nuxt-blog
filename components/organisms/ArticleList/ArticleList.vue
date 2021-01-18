<template>
  <div>
    <div v-if="articles.length !== 0">
      <article-pagination
        :current-page="currentPage"
        :max-page="maxPage"
        :route-path="routePath"
        :prev-index="prev"
        :next-index="next"
      />
      <ul>
        <li v-for="(article, index) in articles" :key="`article_${index}`">
          <article-list-item :article="article" />
        </li>
      </ul>
      <article-pagination
        :current-page="currentPage"
        :max-page="maxPage"
        :route-path="routePath"
        :prev-index="prev"
        :next-index="next"
      />
    </div>
    <div v-else>
      <base-text>記事がありません。</base-text>
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
      required: true
    },
    /**
     * 最大ページ数
     */
    maxPage: {
      type: Number,
      required: true
    },
    /**
     * 現在閲覧中のroute
     * (閲覧しているパスによってpageJumpの行き先が変わる)
     * @values page-pageid, tag-id-pageid, category-id-pageid
     */
    routePath: {
      type: String,
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
    },
    prev() {
      /**
       * ひとつ前のページに戻る
       */
      if (this.currentPage === 1) {
        return this.maxPage;
      }
      return Math.max(this.currentPage - 1, 1);
    },
    next() {
      /**
       * ひとつ後のページに進む
       */
      if (this.currentPage === this.maxPage) {
        return 1;
      }
      return Math.min(this.currentPage + 1, this.maxPage);
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
