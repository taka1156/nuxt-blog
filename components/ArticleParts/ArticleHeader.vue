<template>
  <div class="ArticleHeader">
    <div class="m-3">
      <article-category :category="article.category" />
      <article-date
        :created-at="article.createdAt"
        :updated-at="article.updatedAt"
      />
      <div class="border" />
      <!--一覧表示の時はh3、記事表示はh1-->
      <slot name="title"></slot>
      <!--一覧表示の時はsummaryの表示-->
      <div v-if="article.summary != null">
        <p class="text-left">{{ article.summary }}</p>
        <div class="border"></div>
      </div>
      <article-tag :tags="article.tags" />
    </div>
  </div>
</template>

<script>
import ArticleCategory from './ArticleCategory';
import ArticleTag from './ArticleTag';
import ArticleDate from './ArticleDate';

export default {
  name: 'ArticleHeader',
  components: {
    'article-category': ArticleCategory,
    'article-tag': ArticleTag,
    'article-date': ArticleDate
  },
  props: {
    article: {
      type: Object,
      default: () => {},
      required: true
    }
  }
};
</script>

<style></style>
