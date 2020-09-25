<template functional>
  <button class="pagination__btn" v-on="listeners">
    <slot />
  </button>
</template>

<script>
export default {};
</script>

<style scoped>
/* css reset */
button {
  margin: 0;
  padding: 0;
  background: none;
  border: none;
}

/* css reset */

.pagination__btn {
  padding: 10px;
  font-size: 20px;
  cursor: pointer;
}
</style>
