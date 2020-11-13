<template>
  <div>
    <div class="article-tag">
      タグ:&nbsp;
      <div v-for="(tag, index) in tags" :key="index">
        <div @click="classficationJump(tag)">
          <article-badge :badge-type="'tag'" :badge="tag" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ArticleBadge from './ArticleBadge';

export default {
  name: 'ArticleTag',
  components: {
    'article-badge': ArticleBadge
  },
  props: {
    tags: {
      type: Array,
      default: () => [],
      required: true
    }
  },
  methods: {
    classficationJump(tag) {
      this.$emit('classfication-jump', { path: 'tag', id: tag.id });
    }
  }
};
</script>

<style scoped>
.article-tag {
  display: flex;
  flex-wrap: wrap;
  margin: 10px;
}
</style>
