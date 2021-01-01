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
import BaseImg from '../../atoms/BaseImg/BaseImg';

export default {
  name: 'ClassificationTitle',
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
  width: 50px;
  height: 50px;
  padding: 5px;
}
</style>
