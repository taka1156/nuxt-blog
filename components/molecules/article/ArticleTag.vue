<template>
  <div>
    <div class="article-tag">
      タグ:&nbsp;
      <article-badge
        v-for="(tag, index) in tags"
        :key="index"
        :badge-type="'tag'"
        :badge="tag"
        @jump="jump"
      />
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
    jump(id) {
      this.$router.push({
        name: 'tag-id',
        params: { id: id }
      });
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
