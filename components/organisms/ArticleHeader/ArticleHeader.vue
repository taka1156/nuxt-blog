<template>
  <div>
    <div class="article-header">
      <article-category :category="article.category" />
      <article-date
        :created-at="article.createdAt"
        :updated-at="article.updatedAt"
      />
      <div class="line" />
      <h1 class="article-header__title">
        {{ article.title }}
      </h1>
      <article-tag :tags="article.tags" />
    </div>
  </div>
</template>

<script>
import ArticleCategory from '../ArticleCategory/ArticleCategory';
import ArticleTag from '../ArticleTag/ArticleTag';
import ArticleDate from '../../molecules/ArticleDate/ArticleDate';

export default {
  name: 'ArticleHeader',
  components: {
    'article-category': ArticleCategory,
    'article-tag': ArticleTag,
    'article-date': ArticleDate
  },
  props: {
    /**
     * 記事の情報
     */
    article: {
      type: Object,
      default: () => {},
      required: true
    }
  }
};
</script>

<style scoped>
.article-header {
  padding: 10px;
  background-color: whitesmoke;
  border: 1px solid lightgray;
}

.article-header__title {
  font-size: 1.75rem;
  text-align: left;
  word-break: break-word;
  overflow-wrap: break-word;
  color: rgba(40, 167, 69, 0.9);
}
</style>
