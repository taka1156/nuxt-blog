<template functional>
  <p class="nav-text">
    <slot />
  </p>
</template>

<style scoped>
/* css reset */
p {
  margin: 0;
  padding: 0;
}

/* css reset */

.nav-text {
  display: inline;
  padding: 5px;
  color: white;
}
</style>
