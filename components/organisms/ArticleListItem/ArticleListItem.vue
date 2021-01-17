<template>
  <div>
    <article class="article-list-item">
      <article-category :category="article.category" />
      <article-date
        :created-at="article.createdAt"
        :updated-at="article.updatedAt"
      />
      <div class="line" />
      <base-link :route-to="{ name: 'article-id', params: { id: article.id } }">
        <h2>{{ article.title }}</h2>
      </base-link>
      <base-text>{{ article.summary }}</base-text>
      <div class="line" />
      <article-tag :tags="article.tags" />
    </article>
  </div>
</template>

<script>
import ArticleCategory from '../ArticleCategory/ArticleCategory';
import BaseLink from '../../atoms/BaseLink/BaseLink';
import ArticleTag from '../ArticleTag/ArticleTag';
import ArticleDate from '../../molecules/ArticleDate/ArticleDate';
import BaseText from '../../atoms/BaseText/BaseText';

export default {
  name: 'ArticleListItem',
  components: {
    'article-category': ArticleCategory,
    'base-link': BaseLink,
    'article-tag': ArticleTag,
    'article-date': ArticleDate,
    'base-text': BaseText
  },
  props: {
    /**
     * 記事一覧の1つ分の情報
     */
    article: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
::v-deep .base-link--extend {
  color: rgb(40, 167, 69);
  text-align: left;
  word-break: break-word;
  overflow-wrap: break-word;
  cursor: pointer;
}

::v-deep .base-link--extend:hover {
  color: rgba(70, 129, 84, 0.9);
}

::v-deep .base-text--extend {
  text-align: left;
}

.article-list-item {
  display: block;
  padding: 10px;
  margin: 10px;
  border: 1px solid rgb(40, 167, 69);
  border-radius: 5px;
}
</style>
