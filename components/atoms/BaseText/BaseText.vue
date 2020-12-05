<template>
  <div>
    <p class="base-text--extend">
      <!-- @slot テキスト -->
      <slot />
    </p>
  </div>
</template>

<script>
export default {
  name: 'BaseText'
};
</script>

<style scoped>
/* css reset */
p {
  display: block;
  padding: 0;
  margin: 0;
}

/* css reset */
</style>
