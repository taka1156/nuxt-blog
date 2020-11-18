<template>
  <div>
    <div class="article-tag">
      タグ:&nbsp;
      <div v-for="(tag, index) in tags" :key="index">
        <div @click="tagJump(tag)">
          <article-badge :badge-type="'tag'" :badge="tag" />
        </div>
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
      default: () => [],
      required: true
    }
  },
  methods: {
    tagJump({ id }) {
      /**
       * タグ、一覧にジャンプする
       * (vue-router使用)
       */
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
