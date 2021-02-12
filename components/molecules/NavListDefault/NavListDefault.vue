<template>
  <ul class="nav-list">
    <li v-for="(item, index) in routes" :key="`nav_${index}`" class="nav-list__item">
      <nav-list-item :nav-item="item" />
    </li>
  </ul>
</template>

<script>
import NavListItem from '../NavListItemDefault/NavListItemDefault';

export default {
  name: 'NavListDefault',
  components: {
    'nav-list-item': NavListItem
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
  justify-content: flex-end;
  width: 70%;
  padding: 0;
  margin: 0;
}

.nav-list__item {
  width: 20%;
  padding: 0;
  margin: 0 1px 0 1px;
}
</style>
