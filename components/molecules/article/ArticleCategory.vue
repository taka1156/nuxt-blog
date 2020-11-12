<template>
  <div>
    <div class="article-category">
      カテゴリー:
      <article-badge :badge-type="'category'" :badge="category" @jump="jump" />
    </div>
  </div>
</template>

<script>
import ArticleBadge from './ArticleBadge';

export default {
  name: 'ArticleCategory',
  components: {
    'article-badge': ArticleBadge
  },
  props: {
    category: {
      type: Object,
      default: () => {},
      required: true
    }
  },
  methods: {
    jump(id) {
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
