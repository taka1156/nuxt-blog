<template>
  <div>
    <div class="nav-bar">
      <div class="nav-bar__box">
        <base-link :route-to="`/`">{{ logoText }}</base-link>
        <nav-list-pc :routes="routes" />
      </div>
    </div>
  </div>
</template>

<script>
import BaseLink from '../../atoms/BaseLink/BaseLink';
import NavListPc from '../NavListPc/NavListPc';

export default {
  name: 'NavBarPc',
  components: {
    BaseLink,
    NavListPc
  },
  props: {
    /**
     * ロゴテキスト
     */
    logoText: {
      type: String,
      required: true
    },
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
::v-deep .base-link--extend {
  display: block;
  height: 30px;
  margin-top: 10px;
  font-size: 1.3em;
  color: white;
}

.nav-bar {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 60px;
  background-color: rgba(40, 167, 69, 0.9);
}

.nav-bar__box {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 85%;
  margin: 0.5em auto;
}
</style>
