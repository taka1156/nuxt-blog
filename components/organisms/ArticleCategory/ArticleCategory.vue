<template>
  <div>
    <div class="article-category">
      カテゴリー:
      <article-badge :route-path="`category-id`" :badge="category" />
    </div>
  </div>
</template>

<script>
import ArticleBadge from '../../molecules/ArticleBadge/ArticleBadge';

export default {
  name: 'ArticleCategory',
  components: {
    ArticleBadge
  },
  props: {
    /**
     * カテゴリー情報(1つのみに属する)
     */
    category: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
::v-deep .article-badge--extend {
  width: 130px;
  color: white;
  background-color: rgb(40, 167, 69);
  border: 0;
}

.article-category {
  display: flex;
  justify-content: space-between;
  margin: 5px;
}
</style>
