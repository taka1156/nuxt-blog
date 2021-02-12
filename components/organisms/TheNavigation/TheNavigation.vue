<template>
  <div>
    <!--サーバー側ではUserAgentが確定しない-->
    <client-only>
      <nav>
        <div v-if="isCellphone">
          <nav-bar
            :logo-text="logoText"
            :is-open="isOpen"
            @change-state="changeState"
          />
          <nav-list :is-open="isOpen" :routes="routes" @change-state="changeState" />
        </div>
        <div v-else>
          <nav-bar-default :logo-text="logoText" :routes="routes" />
        </div>
      </nav>
    </client-only>
  </div>
</template>

<script>
import NavBar from '../../molecules/NavBar/NavBar';
import NavList from '../../molecules/NavList/NavList';
import NavBarDefault from '../../molecules/NavBarDefault/NavBarDefault';

export default {
  name: 'TheNavigation',
  components: {
    'nav-bar-default': NavBarDefault,
    'nav-bar': NavBar,
    'nav-list': NavList
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
  },
  data() {
    return {
      isOpen: false
    };
  },
  computed: {
    isCellphone() {
      return this.$isMobile;
    }
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
