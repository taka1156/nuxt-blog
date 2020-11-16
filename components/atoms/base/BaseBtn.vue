<template>
  <div>
    <button class="btn" @click="$emit('btn-click')">
      <slot />
    </button>
  </div>
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
