<template>
  <div>
    <div class="article-header">
      <article-category
        :category="article.category"
        @classfication-jump="classficationJump"
      />
      <article-date
        :created-at="article.createdAt"
        :updated-at="article.updatedAt"
      />
      <div class="line" />
      <h1 class="article-header__title">
        {{ article.title }}
      </h1>
      <article-tag :tags="article.tags" @classfication-jump="classficationJump" />
    </div>
  </div>
</template>

<script>
import ArticleCategory from '../../molecules/article/ArticleCategory';
import ArticleTag from '../../molecules/article/ArticleTag';
import ArticleDate from '../../molecules/article/ArticleDate';

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
  },
  methods: {
    classficationJump({ path, id }) {
      this.$router.push({
        name: `${path}-id`,
        params: { id: id }
      });
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
