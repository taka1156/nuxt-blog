<template>
  <div>
    <li
      class="classfication-list-item"
      @click="$emit('classfication-jump', classficationItem)"
    >
      <div class="classfication-list-item__box">
        <h2 class="classfication-list-item__title">{{ classficationItem.name }}</h2>
        <base-img
          class="base-img--lg"
          :img-url="classficationItem.img.url"
          :img-alt="`${classficationItem.name}のロゴ`"
        />
      </div>
    </li>
  </div>
</template>

<script>
import BaseImg from '../../atoms/base/BaseImg';

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
    }
  }
};
</script>

<style scoped>
.classfication-list-item {
  display: block;
  margin: 10px;
  padding: 10px;
  border: 1px solid rgba(40, 167, 69, 0.9);
  border-radius: 5px;
  cursor: pointer;
}

.classfication-list-item__box {
  display: flex;
  justify-content: space-between;
}

.classfication-list-item__title {
  text-align: left;
}
</style>
