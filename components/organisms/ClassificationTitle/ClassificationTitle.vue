<template>
  <div>
    <div class="classification-title">
      <base-heading :h-lv="1">
        <!-- @slot タグもしくはカテゴリー名 -->
        <slot />
      </base-heading>
      <base-img-lazy size="lg" :img-url="imgUrl" img-alt="ロゴ" />
    </div>
    <div class="classification-title__border" />
  </div>
</template>

<script>
import BaseHeading from '../../atoms/BaseHeading/BaseHeading';
import BaseImgLazy from '../../atoms/BaseImgLazy/BaseImgLazy';

export default {
  name: 'ClassificationTitle',
  components: {
    BaseHeading,
    BaseImgLazy
  },
  props: {
    /**
     * 画像のURL
     */
    imgUrl: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
::v-deep .base-heading1--extend {
  padding: 5px;
  font-size: 1.5rem;
}

.classification-title {
  display: flex;
  justify-content: center;
}

.classification-title__border {
  margin: 5px;
  border: 1px solid lightgray;
}
</style>
