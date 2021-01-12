<template>
  <div>
    <div class="article-category">
      カテゴリー:
      <article-badge :badge="category" @badge-click="categoryJump(category)" />
    </div>
  </div>
</template>

<script>
import ArticleBadge from '../../molecules/ArticleBadge/ArticleBadge';

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
::v-deep .base-btn--extend {
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
