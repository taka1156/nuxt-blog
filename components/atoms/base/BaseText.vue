<template functional>
  <p class="base-text" :class="[data.staticClass, data.class]">
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

.base-text {
  display: block;
}

.base-text--white {
  color: white;
}

.base-text--green {
  color: rgba(40, 167, 69, 0.9);
}

.base-text--badge {
  font-size: 12px;
  line-height: 30px;
}

.base-text--pagenation {
  padding: 10px;
  font-size: 20px;
}
</style>
