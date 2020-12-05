<template>
  <div>
    <div class="nav-item">
      <nuxt-link :to="navItem.to" class="nav-item__link">
        <base-img
          :size="`lg`"
          :img-url="navItem.img"
          :img-alt="`${navItem.name}の画像`"
        />
        <base-text>{{ navItem.name }}</base-text>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import BaseImg from '../../atoms/BaseImg/BaseImg';
import BaseText from '../../atoms/BaseText/BaseText';

export default {
  name: 'NavListItem',
  components: {
    'base-img': BaseImg,
    'base-text': BaseText
  },
  props: {
    /**
     * ナビゲーションの１項目分
     */
    navItem: {
      type: Object,
      default: () => {},
      required: true
    }
  }
};
</script>

<style scoped>
::v-deep .base-text--extend {
  color: white;
}

.nav-item {
  display: block;
  font-size: 50px;
  text-align: left;
}

.nav-item__link {
  display: flex;
  width: 100%;
  text-decoration: none;
}
</style>
