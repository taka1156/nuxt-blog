<template>
  <div>
    <div v-if="items.length !== 0">
      <ul>
        <li v-for="(item, index) in items" :key="`classification_${index}`">
          <classification-list-item
            :classification-item="item"
            :route-path="routePath"
          />
        </li>
      </ul>
    </div>
    <p v-else>{{ routePath }}がありません。</p>
  </div>
</template>

<script>
import ClassificationListItem from '../ClassificationListItem/ClassificationListItem';

export default {
  name: 'ClassificatetionList',
  components: {
    'classification-list-item': ClassificationListItem
  },
  props: {
    /**
     * タグもしくは、カテゴリーの一覧が入る
     */
    items: {
      type: Array,
      default: () => [],
      required: true
    },
    /**
     * 現在閲覧中のroute
     * (閲覧しているパスによってpageJumpの行き先が変わる)
     * @values tag, category
     */
    routePath: {
      type: String,
      default: '',
      required: true,
      validator: function(value) {
        return ['tag', 'category'].indexOf(value) !== -1;
      }
    }
  }
};
</script>

<style scoped>
/* css reset */
ul,
li {
  padding: 0;
  margin: 0;
  list-style-type: none;
}

/* css reset */
</style>
