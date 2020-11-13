<template>
  <div>
    <div
      class="article-badge"
      :class="[
        badgeType === 'category' ? 'article-badge__fill' : 'article-badge__outline'
      ]"
    >
      <base-text
        class="base-text--badge"
        :class="[badgeType === 'category' ? 'base-text--white' : 'base-text--green']"
      >
        {{ badge.name }}
      </base-text>
      <base-img
        class="base-img--sm"
        :img-url="badge.img.url"
        :img-alt="`${badge.name}の画像`"
      />
    </div>
  </div>
</template>

<script>
import BaseImg from '../../atoms/base/BaseImg';
import BaseText from '../../atoms/base/BaseText';

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
