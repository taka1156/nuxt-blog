<template>
  <div>
    <div class="article-tag">
      タグ:&nbsp;
      <article-badge
        v-for="(tag, index) in tags"
        :key="index"
        :badge-type="'tag'"
        :badge="tag"
        class="article-badge__outline"
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
        name: 'tag-id-pageid',
        params: { id: id, pageid: 1 }
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

.article-badge__outline {
  width: 100px;
  margin: 2px;
  border: 1px solid rgba(40, 167, 69, 0.9);
  color: rgba(40, 167, 69, 0.9);
}
</style>
