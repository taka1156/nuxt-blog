<template functional>
  <img
    :src="props.imgUrl"
    :alt="`${props.imgAlt}`"
    class="img"
    :class="data.staticClass || ''"
  />
</template>

<style scoped>
.img {
  display: block;
  padding: 3px;
}

.img--lg {
  height: 50px;
  width: 50px;
}

.img--sm {
  height: 20px;
  width: 20px;
}
</style>
