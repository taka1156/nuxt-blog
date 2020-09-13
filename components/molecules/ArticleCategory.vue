<template>
  <div>
    <div class="article-category">
      カテゴリー:
      <article-badge
        :badge-type="'category'"
        :badge="category"
        class="article-badge__fill"
        @jump="jump"
      />
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

.article-badge__fill {
  width: 130px;
  background-color: rgba(40, 167, 69, 0.9);
  color: white;
}
</style>
