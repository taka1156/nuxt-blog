<template>
  <div>
    <div class="article-header">
      <article-category :category="article.category" />
      <article-date
        :created-at="article.createdAt"
        :updated-at="article.updatedAt"
      />
      <base-heading :h-lv="1">
        {{ article.title }}
      </base-heading>
      <article-tag :tags="article.tags" />
    </div>
  </div>
</template>

<script>
import BaseHeading from '../../atoms/BaseHeading/BaseHeading';
import ArticleCategory from '../ArticleCategory/ArticleCategory';
import ArticleTag from '../ArticleTag/ArticleTag';
import ArticleDate from '../../molecules/ArticleDate/ArticleDate';

export default {
  name: 'ArticleHeader',
  components: {
    BaseHeading,
    ArticleCategory,
    ArticleTag,
    ArticleDate
  },
  props: {
    /**
     * 記事の情報
     */
    article: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
::v-deep .base-heading1--extend {
  padding: 10px 0 0;
  margin-left: 5px;
  font-size: 1.75rem;
  color: rgb(40 167 69);
  text-align: left;
  border-top: 2.5px solid lightgray;
}

.article-header {
  padding: 10px;
  background-color: whitesmoke;
  border: 1px solid lightgray;
}
</style>
