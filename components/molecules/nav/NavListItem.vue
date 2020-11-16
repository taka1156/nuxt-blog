<template>
  <div>
    <li class="nav-item" @click="$emit('change-state')">
      <nuxt-link :to="navItem.to" class="nav-item__link">
        <base-img
          :size="`lg`"
          :img-url="navItem.img"
          :img-alt="`${navItem.name}の画像`"
        />
        <base-text :color="`white`">{{ navItem.name }}</base-text>
      </nuxt-link>
    </li>
  </div>
</template>

<script>
import BaseImg from '../../atoms/base/BaseImg';
import BaseText from '../../atoms/base/BaseText';

export default {
  name: 'NavListItem',
  components: {
    'base-img': BaseImg,
    'base-text': BaseText
  },
  props: {
    navItem: {
      type: Object,
      default: () => {},
      required: true
    }
  }
};
</script>

<style scoped>
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
