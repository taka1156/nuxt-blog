<template>
  <div>
    <div class="article-tag">
      タグ:&nbsp;
      <div v-for="(tag, index) in tags" :key="`tag_${index}`">
        <article-badge
          :route-to="{
            name: 'tag-id',
            params: { id: tag.id }
          }"
          :badge="tag"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ArticleBadge from '../../molecules/ArticleBadge/ArticleBadge';

export default {
  name: 'ArticleTag',
  components: {
    'article-badge': ArticleBadge
  },
  props: {
    /**
     * タグ情報(複数属することができる)
     */
    tags: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped>
::v-deep .article-badge--extend {
  width: 100px;
  margin: 2px;
  color: rgb(40, 167, 69);
  background-color: transparent;
  border: 1px solid rgb(40, 167, 69);
}

.article-tag {
  display: flex;
  flex-wrap: wrap;
  margin: 10px;
}
</style>
