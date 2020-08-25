<template>
  <div>
    <ul>
      <classfication-list-item
        v-for="(item, index) in items"
        :key="index"
        :classfication-item="item"
      />
    </ul>
  </div>
</template>

<script>
import ClassficationListItem from '../molecules/classficationListItem';

export default {
  name: 'ClassficateList',
  components: {
    'cclassfication-list-item': ClassficateListItem
  },
  props: {
    path: {
      type: String,
      default: '',
      required: true
    },
    items: {
      type: Array,
      default: () => [],
      required: true
    }
  }
};
</script>

<style scoped>
/* css reset */
ul {
  margin: 0;
  padding: 0;
}

/* css reset */
</style>
