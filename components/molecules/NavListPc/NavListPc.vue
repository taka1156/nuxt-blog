<template>
  <ul class="nav-list">
    <li v-for="route in routes" :key="route.name" class="nav-list__item">
      <nav-list-item-pc :nav-item="route" />
    </li>
  </ul>
</template>

<script>
import NavListItemPc from '../NavListItemPc/NavListItemPc';

export default {
  name: 'NavListPc',
  components: {
    NavListItemPc
  },
  props: {
    /**
     * ナビゲーションの項目が定義された配列
     */
    routes: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped>
/* css reset */
ul,
li {
  list-style-type: none;
}

/* css reset */
.nav-list {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 70%;
  padding: 0;
  margin: 0;
}

.nav-list__item {
  width: 20%;
  padding: 0;
  margin: 0 1px;
}
</style>
