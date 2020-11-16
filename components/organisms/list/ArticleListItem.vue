<template>
  <div>
    <article class="article-list-item">
      <article-category :category="article.category" />
      <article-date
        :created-at="article.createdAt"
        :updated-at="article.updatedAt"
      />
      <div class="line" />
      <h2 class="article-list-item__title" @click="articleJump(article)">
        {{ article.title }}
      </h2>
      <p class="article-list-item__summary">{{ article.summary }}</p>
      <div class="line" />
      <article-tag :tags="article.tags" />
    </article>
  </div>
</template>

<script>
import ArticleCategory from '../article/ArticleCategory';
import ArticleTag from '../article/ArticleTag';
import ArticleDate from '../../molecules/article/ArticleDate';

export default {
  name: 'ArticleListItem',
  components: {
    'article-category': ArticleCategory,
    'article-tag': ArticleTag,
    'article-date': ArticleDate
  },
  props: {
    /**
     * 記事一覧の1つ分の情報
     */
    article: {
      type: Object,
      default: () => {},
      required: true
    }
  },
  methods: {
    articleJump({ id }) {
      /**
       * 記事閲覧ページにジャンプする
       * (vue-router)
       */
      this.$router.push({ name: 'article-id', params: { id: `${id}` } });
    }
  }
};
</script>

<style scoped>
.article-list-item {
  display: block;
  margin: 10px;
  padding: 10px;
  border: 1px solid rgba(40, 167, 69, 0.9);
  border-radius: 5px;
}

.article-list-item__title {
  text-align: left;
  word-break: break-word;
  overflow-wrap: break-word;
  color: rgba(40, 167, 69, 0.9);
  cursor: pointer;
}

.article-list-item__summary {
  text-align: left;
}
</style>
