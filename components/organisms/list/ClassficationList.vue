<template>
  <div>
    <div v-if="items.length !== 0">
      <ul>
        <article v-for="(item, index) in items" :key="index">
          <classfication-list-item
            :classfication-item="item"
            @classfication-jump="classficationJump"
          />
        </article>
      </ul>
    </div>
    <p v-else>{{ path }}がありません。</p>
  </div>
</template>

<script>
import ClassficationListItem from '../../molecules/list/ClassficationListItem';

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
    },
    path: {
      type: String,
      default: '',
      required: true
    }
  },
  methods: {
    classficationJump({ id }) {
      this.$router.push({
        name: `${this.path}-id`,
        params: { id: id }
      });
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
