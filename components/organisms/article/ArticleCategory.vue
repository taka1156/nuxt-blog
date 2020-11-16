<template>
  <div>
    <div class="article-category">
      カテゴリー:
      <div @click="categoryJump(category)">
        <article-badge :badge-type="'category'" :badge="category" />
      </div>
    </div>
  </div>
</template>

<script>
import ArticleBadge from '../../molecules/article/ArticleBadge';

export default {
  name: 'ArticleCategory',
  components: {
    'article-badge': ArticleBadge
  },
  props: {
    /**
     * カテゴリー情報(1つのみに属する)
     */
    category: {
      type: Object,
      default: () => {},
      required: true
    }
  },
  methods: {
    categoryJump({ id }) {
      /**
       * カテゴリー、一覧にジャンプする
       * (vue-router使用)
       */
      this.$router.push({
        name: 'category-id',
        params: { id: id }
      });
    }
  }
};
</script>

<style scoped>
.article-category {
  display: flex;
  justify-content: space-between;
  margin: 5px;
}
</style>
