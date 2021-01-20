<template>
  <div>
    <div class="classification-title">
      <base-heading1>
        <!-- @slot タグもしくはカテゴリー名 -->
        <slot />
      </base-heading1>
      <base-img-lazy :size="`lg`" :img-url="imgUrl" :img-alt="`ロゴ`" />
    </div>
    <div class="classification-title__border" />
  </div>
</template>

<script>
import BaseImgLazy from '../../atoms/BaseImgLazy/BaseImgLazy';
import BaseHeading1 from '../../atoms/BaseHeading1/BaseHeading1';

export default {
  name: 'ClassificationTitle',
  components: {
    'base-img-lazy': BaseImgLazy,
    'base-heading1': BaseHeading1
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
