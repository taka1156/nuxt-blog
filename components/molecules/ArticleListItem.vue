<template>
  <div>
    <li class="list-item">
      <article-category :category="article.category" />
      <article-date
        :created-at="article.createdAt"
        :updated-at="article.updatedAt"
      />
      <hr />
      <h2 class="list-item__title" @click="jump(article)">
        {{ article.title }}
      </h2>
      <p class="list-item__summary">{{ article.summary }}</p>
      <hr />
      <article-tag :tags="article.tags" />
    </li>
  </div>
</template>

<script>
import ArticleCategory from './ArticleCategory';
import ArticleTag from './ArticleTag';
import ArticleDate from '../atoms/ArticleDate';

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
    jump({ id }) {
      this.$router.push({ name: 'article-id', params: { id: `${id}` } });
    }
  }
};
</script>

<style scoped>
.list-item {
  display: block;
  margin: 10px;
  padding: 10px;
  border: 1px solid rgba(40, 167, 69, 0.9);
  border-radius: 5px;
}

.list-item__title {
  text-align: left;
  word-break: break-word;
  overflow-wrap: break-word;
  color: rgba(40, 167, 69, 0.9);
  cursor: pointer;
}

.list-item__summary {
  text-align: left;
}
</style>
