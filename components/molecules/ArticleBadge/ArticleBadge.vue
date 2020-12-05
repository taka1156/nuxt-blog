<template>
  <div>
    <div class="article-badge article-badge--extend">
      <base-text>
        {{ badge.name }}
      </base-text>
      <base-img
        :size="`sm`"
        :img-url="badge.img.url"
        :img-alt="`${badge.name}の画像`"
      />
    </div>
  </div>
</template>

<script>
import BaseImg from '../../atoms/BaseImg/BaseImg';
import BaseText from '../../atoms/BaseText/BaseText';

export default {
  name: 'ArticleBadge',
  components: {
    'base-img': BaseImg,
    'base-text': BaseText
  },
  props: {
    /**
     * バッジの情報
     * (id、バッジ名、画像URL)
     */
    badge: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
/* css reset */
p {
  padding: 0;
  margin: 0;
}

/* css reset */

::v-deep .base-text--extend {
  font-size: 12px;
  line-height: 30px;
}

.article-badge {
  display: flex;
  justify-content: center;
  padding: 2px;
  cursor: pointer;
  border-radius: 20px;
}
</style>
