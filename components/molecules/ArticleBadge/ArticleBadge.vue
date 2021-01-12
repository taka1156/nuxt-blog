<template>
  <div class="article-badge">
    <base-btn @btn-click="badgeClick()">
      <span class="article-badge__text">
        {{ badge.name }}
      </span>
      <base-img-webp
        :size="`sm`"
        :img-url="badge.img.url"
        :img-alt="`${badge.name}の画像`"
      />
    </base-btn>
  </div>
</template>

<script>
import BaseBtn from '../../atoms/BaseBtn/BaseBtn';
import BaseImgWebp from '../../atoms/BaseImgWebp/BaseImgWebp';

export default {
  name: 'ArticleBadge',
  components: {
    'base-btn': BaseBtn,
    'base-img-webp': BaseImgWebp
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
  },
  methods: {
    badgeClick() {
      this.$emit('badge-click');
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
::v-deep .base-btn--extend {
  display: flex;
  justify-content: center;
  padding: 2px;
  cursor: pointer;
  border-radius: 20px;
}

.article-badge__text {
  font-size: 12px;
  line-height: 30px;
}
</style>
