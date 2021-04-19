<template>
  <div>
    <nav>
      <div v-if="isMobile">
        <nav-bar
          :logo-text="logoText"
          :is-open="isOpen"
          @change-state="changeState"
        />
        <nav-list :is-open="isOpen" :routes="routes" @change-state="changeState" />
      </div>
      <div v-else>
        <nav-bar-pc :logo-text="logoText" :routes="routes" />
      </div>
    </nav>
  </div>
</template>

<script>
import responsive from '@/assets/js/mixin/responsive.mixin.js';
import NavBar from '../../molecules/NavBar/NavBar';
import NavList from '../../molecules/NavList/NavList';
import NavBarPc from '../../molecules/NavBarPc/NavBarPc';

export default {
  name: 'TheNavigation',
  components: {
    NavBar,
    NavList,
    NavBarPc
  },
  mixins: [responsive],
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
  },
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    changeState(isOpen) {
      /**
       * ナビゲーションの開閉状態を変更
       */
      this.isOpen = isOpen;
    }
  }
};
</script>
