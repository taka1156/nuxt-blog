<template>
  <component
    :is="isInternalLink(routeTo) ? 'nuxt-link' : 'a'"
    :to="isInternalLink(routeTo) ? routeTo : ''"
    :href="`${isInternalLink(routeTo) ? '' : routeTo}`"
    class="base-link--extend"
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
    }
  },
  methods: {
    isInternalLink(path) {
      if (typeof path === 'object') {
        return true;
      }
      return !/^https?:\/\//.test(path);
    }
  }
};
</script>
