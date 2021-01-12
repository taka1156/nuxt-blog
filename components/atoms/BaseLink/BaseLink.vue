<template>
  <div>
    <nuxt-link class="base-link--extend" :to="routeTo">
      <!-- @slot リンクのクリックに指定したいもの -->
      <slot />
    </nuxt-link>
  </div>
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
  }
};
</script>
