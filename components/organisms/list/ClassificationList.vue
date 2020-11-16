<template>
  <div>
    <div v-if="items.length !== 0">
      <ul>
        <li v-for="(item, index) in items" :key="index">
          <classification-list-item :classification-item="item" :path="path" />
        </li>
      </ul>
    </div>
    <p v-else>{{ path }}がありません。</p>
  </div>
</template>

<script>
import ClassificationListItem from './ClassificationListItem';

export default {
  name: 'ClassificatetionList',
  components: {
    'classification-list-item': ClassificationListItem
  },
  props: {
    items: {
      type: Array,
      default: () => [],
      required: true
    },
    path: {
      type: String,
      default: '',
      required: true
    }
  }
};
</script>

<style scoped>
/* css reset */
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

/* css reset */
</style>
