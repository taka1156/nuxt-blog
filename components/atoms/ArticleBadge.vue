<template functional>
  <div
    class="article-badge"
    :class="data.staticClass || ''"
    @click="listeners.click(props.badgeId)"
  >
    <p class="article-badge__text">{{ props.name }}</p>
    <img :src="props.imgUrl" class="article-badge__img" />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
/* css reset */
p {
  margin: 0;
  padding: 0;
}

/* css reset */

.article-badge {
  display: flex;
  justify-content: center;
  padding: 2px;
  border-radius: 15px;
  cursor: pointer;
}

.article-badge--outline {
  width: 100px;
  margin: 2px;
  border: 1px solid rgba(40, 167, 69, 0.9);
  color: rgba(40, 167, 69, 0.9);
}

.article-badge--fill {
  width: 130px;
  background-color: rgba(40, 167, 69, 0.9);
  color: white;
}

.article-badge__text {
  padding: 5px;
  text-align: center;
  font-size: 12px;
}

.article-badge__img {
  height: 20px;
  width: 20px;
}
</style>
