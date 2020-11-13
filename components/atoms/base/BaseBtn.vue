<template functional>
  <button class="btn" v-on="listeners">
    <slot />
  </button>
</template>

<style scoped>
/* css reset */
button {
  margin: 0;
  padding: 0;
  border: none;
  outline: none;
  background: transparent;
}

/* css reset */

.btn {
  padding: 10px;
  font-size: 20px;
  cursor: pointer;
}
</style>
