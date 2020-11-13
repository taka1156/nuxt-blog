<template>
  <div>
    <li class="article-list-item">
      <article-category
        :category="article.category"
        @classfication-jump="classficationJump"
      />
      <article-date
        :created-at="article.createdAt"
        :updated-at="article.updatedAt"
      />
      <div class="line" />
      <h2 class="article-list-item__title" @click="jump(article)">
        {{ article.title }}
      </h2>
      <p class="article-list-item__summary">{{ article.summary }}</p>
      <div class="line" />
      <article-tag :tags="article.tags" @classfication-jump="classficationJump" />
    </li>
  </div>
</template>

<script>
import ArticleCategory from '../../molecules/article/ArticleCategory';
import ArticleTag from '../../molecules/article/ArticleTag';
import ArticleDate from '../../molecules/article/ArticleDate';

export default {
  name: 'ArticleListItem',
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
  },
  methods: {
    classficationJump(jumpInfo) {
      this.$emit('classfication-jump', jumpInfo);
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
