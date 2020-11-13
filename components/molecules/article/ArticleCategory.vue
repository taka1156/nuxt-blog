<template>
  <div>
    <div class="article-category">
      カテゴリー:
      <div @click="classficationJump">
        <article-badge :badge-type="'category'" :badge="category" />
      </div>
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
    classficationJump() {
      this.$emit('classfication-jump', { path: 'category', id: this.category.id });
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
