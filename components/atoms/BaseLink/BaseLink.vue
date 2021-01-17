<template>
  <component
    :is="isInternalLink(routeTo) ? 'nuxt-link' : 'a'"
    :to="isInternalLink(routeTo) ? routeTo : ''"
    :href="isInternalLink(routeTo) ? '' : routeTo"
    class="base-link--extend"
    v-bind="isTarget ? { target: '_blank', rel: 'noopener noreferrer' } : false"
  >
    <!-- @slot リンクのクリックに指定したいもの -->
    <slot />
  </component>
</template>

<script>
export default {
  name: 'BaseLink',
  props: {
    /**
     * nuxt-linkの遷移先
     */
    routeTo: {
      type: [String, Object],
      required: true
    },
    isTarget: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    isInternalLink() {
      /**
       * ルーティングか、外部リンクどちらか判定する。
       */
      return function(path) {
        if (typeof path === 'object') {
          return true;
        }
        return !/^https?:\/\//.test(path);
      };
    }
  }
};
</script>
