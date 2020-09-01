<template>
  <div>
    <div class="article-category">
      カテゴリー:
      <article-badge
        :badge-id="category.id"
        :name="category.name"
        :img-url="category.img.url"
        class="article-badge--fill"
        @click="jump"
      />
    </div>
  </div>
</template>

<script>
import ArticleBadge from '../atoms/ArticleBadge';

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
