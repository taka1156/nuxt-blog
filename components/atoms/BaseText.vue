<template functional>
  <p class="text" :class="data.staticClass || ''">
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

.text {
  display: inline;
}

.text--white {
  color: white;
}

.text--green {
  color: rgba(40, 167, 69, 0.9);
}

.text--badge {
  font-size: 12px;
  line-height: 30px;
}
</style>
