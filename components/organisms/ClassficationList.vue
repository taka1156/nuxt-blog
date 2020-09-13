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
import ClassficationListItem from '../molecules/ClassficationListItem';

export default {
  name: 'ClassficatetionList',
  components: {
    'classfication-list-item': ClassficationListItem
  },
  props: {
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
