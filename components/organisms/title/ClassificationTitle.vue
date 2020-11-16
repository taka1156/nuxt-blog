<template>
  <div>
    <div class="classification-title">
      <h1 class="classification-title__title">
        <!-- @slot タグもしくはカテゴリー名 -->
        <slot />
      </h1>
      <base-img :size="`lg`" :img-url="imgUrl" :img-alt="'ロゴ'" />
    </div>
  </div>
</template>

<script>
import BaseImg from '../../atoms/base/BaseImg';

export default {
  name: 'ClassficationTitle',
  components: {
    'base-img': BaseImg
  },
  props: {
    /**
     * 画像のURL
     */
    imgUrl: {
      type: String,
      default: '',
      require: true
    }
  }
};
</script>

<style scoped>
.classification-title {
  display: flex;
  justify-content: center;
}

.classification-title__title {
  padding: 5px;
  font-size: 1.25rem;
}

.classification-title__icon {
  padding: 5px;
  height: 50px;
  width: 50px;
}
</style>
