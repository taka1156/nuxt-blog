<template>
  <div>
    <div
      class="article-badge"
      :class="[
        badgeType === 'category' ? 'article-badge__fill' : 'article-badge__outline'
      ]"
    >
      <base-text
        :use-type="`badge`"
        :color="`${badgeType === 'category' ? 'white' : 'green'}`"
      >
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
     * バッジの種類
     * @values category, tag
     */
    badgeType: {
      type: String,
      required: true,
      validator: function(value) {
        return ['category', 'tag'].indexOf(value) !== -1;
      }
    },
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

.article-badge {
  display: flex;
  justify-content: center;
  padding: 2px;
  cursor: pointer;
  border-radius: 20px;
}

.article-badge__fill {
  width: 130px;
  background-color: rgba(40, 167, 69, 0.9);
}

.article-badge__outline {
  width: 100px;
  margin: 2px;
  border: 1px solid rgba(40, 167, 69, 0.9);
}
</style>
