<template functional>
  <img
    :src="props.imgUrl"
    :alt="`${props.imgAlt}`"
    class="base-img"
    :class="data.staticClass || ''"
  />
</template>

<style scoped>
.base-img {
  display: block;
  padding: 3px;
}

.base-img--lg {
  height: 50px;
  width: 50px;
}

.base-img--sm {
  height: 20px;
  width: 20px;
}
</style>
