<template>
  <div>
    <div class="article-category">
      カテゴリー:
      <div @click="categoryJump(category)">
        <article-badge :badge="category" />
      </div>
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
::v-deep .article-badge--extend {
  width: 130px;
  color: white;
  background-color: rgb(40, 167, 69);
}

.article-category {
  display: flex;
  justify-content: space-between;
  margin: 5px;
}
</style>
