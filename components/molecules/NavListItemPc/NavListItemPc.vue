<template>
  <div>
    <div class="nav-item">
      <base-link :route-to="navItem.to">
        <div class="nav-item__contents">
          <base-img
            :size="`sm`"
            :img-url="navItem.img"
            :img-alt="`${navItem.name}の画像`"
          />
          <base-text>{{ navItem.name }}</base-text>
        </div>
      </base-link>
    </div>
  </div>
</template>

<script>
import BaseImg from '../../atoms/BaseImg/BaseImg';
import BaseText from '../../atoms/BaseText/BaseText';
import BaseLink from '../../atoms/BaseLink/BaseLink';

export default {
  name: 'NavListItemPc',
  components: {
    'base-img': BaseImg,
    'base-text': BaseText,
    'base-link': BaseLink
  },
  props: {
    /**
     * ナビゲーションの１項目分
     */
    navItem: {
      type: Object,
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
  font-size: 18px;
  text-align: left;
}

.nav-item__contents {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0;
  margin: 0;
}
</style>
