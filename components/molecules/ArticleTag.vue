<template>
  <div>
    <div class="article-tag">
      タグ:&nbsp;
      <article-badge
        v-for="(tag, index) in tags"
        :key="index"
        :badge-id="tag.id"
        :name="tag.name"
        :img-url="tag.img.url"
        class="article-badge--outline"
        @click="jump"
      />
    </div>
  </div>
</template>

<script>
import ArticleBadge from '../atoms/ArticleBadge';

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
