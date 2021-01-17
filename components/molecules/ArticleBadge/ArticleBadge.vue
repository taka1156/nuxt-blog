<template>
  <base-link :route-to="routeTo">
    <div class="article-badge article-badge--extend">
      <span class="article-badge__text">
        {{ badge.name }}
      </span>
      <base-img-webp
        :size="`sm`"
        :img-url="badge.img.url"
        :img-alt="`${badge.name}の画像`"
      />
    </div>
  </base-link>
</template>

<script>
import BaseLink from '../../atoms/BaseLink/BaseLink';
import BaseImgWebp from '../../atoms/BaseImgWebp/BaseImgWebp';

export default {
  name: 'ArticleBadge',
  components: {
    'base-link': BaseLink,
    'base-img-webp': BaseImgWebp
  },
  props: {
    /**
     * 遷移先の情報
     * (name:route params:{id})
     */
    routeTo: {
      type: Object,
      required: true
    },
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
.article-badge {
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
