<template>
  <div>
    <index-nav :is-open="isOpen" @change-state="changeState" />
    <index-list :is-open="isOpen" :tocs="tocs" @change-state="changeState" />
  </div>
</template>

<script>
import IndexNav from '../../molecules/IndexNav/IndexNav';
import IndexList from '../../molecules/IndexList/IndexList';

export default {
  name: 'IndexList',
  components: {
    'index-nav': IndexNav,
    'index-list': IndexList
  },
  props: {
    tocs: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    changeState(state) {
      // ナビゲーションバーの開閉管理
      this.isOpen = state;
    }
  }
};
</script>
