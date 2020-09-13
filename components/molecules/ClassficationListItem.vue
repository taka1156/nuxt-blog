<template>
  <div>
    <li class="list-item" @click="jump(classficationItem)">
      <h2 class="list-item__title">{{ classficationItem.name }}</h2>
      <base-img
        class="img--lg"
        :img-url="classficationItem.img.url"
        :img-alt="`${classficationItem.name}のロゴ`"
      />
    </li>
  </div>
</template>

<script>
import BaseImg from '../atoms/BaseImg';

export default {
  name: 'ClassficationListItem',
  components: {
    'base-img': BaseImg
  },
  props: {
    classficationItem: {
      type: Object,
      default: () => {},
      required: true
    },
    path: {
      type: String,
      default: '',
      required: true
    }
  },
  methods: {
    jump({ id }) {
      this.$router.push({
        name: `${this.path}-id`,
        params: { id: id }
      });
    }
  }
};
</script>

<style scoped>
.list-item {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  margin: 10px;
  border: 1px solid rgba(40, 167, 69, 0.9);
  border-radius: 5px;
}

.list-item__title {
  text-align: left;
}

.list-item__icon {
  height: 70px;
  width: 70px;
}
</style>
