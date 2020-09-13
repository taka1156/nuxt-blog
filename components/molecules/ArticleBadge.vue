<template>
  <div class="article-badge" @click="$emit('jump', badge.id)">
    <base-text
      class="text--badge"
      :class="[badgeType === 'category' ? 'text--white' : 'text--green']"
      >{{ badge.name }}
    </base-text>
    <base-img
      class="img--sm"
      :img-url="badge.img.url"
      :img-alt="`${badge.name}の画像`"
    />
  </div>
</template>

<script>
import BaseImg from '../atoms/BaseImg';
import BaseText from '../atoms/BaseText';

export default {
  name: 'ArticleBadge',
  components: {
    'base-img': BaseImg,
    'base-text': BaseText
  },
  props: {
    badgeType: {
      type: String,
      default: '',
      required: true
    },
    badge: {
      type: Object,
      default: () => {},
      required: true
    }
  }
};
</script>

<style scoped>
/* css reset */
p {
  margin: 0;
  padding: 0;
}

/* css reset */

.article-badge {
  display: flex;
  justify-content: center;
  padding: 2px;
  border-radius: 20px;
  cursor: pointer;
}
</style>
