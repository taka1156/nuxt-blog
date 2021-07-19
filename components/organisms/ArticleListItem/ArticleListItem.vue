<template>
  <div>
    <article class="article-list-item">
      <article-category :category="article.category" />
      <article-date
        :created-at="article.createdAt"
        :updated-at="article.updatedAt"
      />
      <div class="article-list-item__border" />
      <base-link :route-to="{ name: 'article-id', params: { id: article.id } }">
        <base-heading h-lv="2">
          {{ article.title }}
        </base-heading>
      </base-link>
      <base-text>{{ article.summary }}</base-text>
      <div class="article-list-item__border" />
      <article-tag :tags="article.tags" />
    </article>
  </div>
</template>

<script>
import BaseHeading from '../../atoms/BaseHeading/BaseHeading';
import BaseLink from '../../atoms/BaseLink/BaseLink';
import BaseText from '../../atoms/BaseText/BaseText';
import ArticleCategory from '../ArticleCategory/ArticleCategory';
import ArticleTag from '../ArticleTag/ArticleTag';
import ArticleDate from '../../molecules/ArticleDate/ArticleDate';

export default {
  name: 'ArticleListItem',
  components: {
    BaseHeading,
    BaseLink,
    BaseText,
    ArticleCategory,
    ArticleTag,
    ArticleDate
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
}

::v-deep .base-link--extend:hover {
  color: rgba(70, 129, 84, 0.9);
}

::v-deep .base-text--extend {
  margin-left: 5px;
  text-align: left;
}

::v-deep .base-heading2--extend {
  margin-left: 5px;
  text-align: left;
}

.article-list-item {
  display: block;
  padding: 10px;
  margin: 10px;
  border: 1px solid rgb(40, 167, 69);
  border-radius: 5px;
}

.article-list-item__border {
  margin: 5px;
  border: 1px solid lightgray;
}
</style>
