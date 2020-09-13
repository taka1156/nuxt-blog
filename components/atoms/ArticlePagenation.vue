<template functional>
  <div class="page-nation">
    <div class="page-nation__btn" @click="props.prev()">&lt;</div>
    <div>{{ props.currentPage }}/{{ props.maxPage }}</div>
    <div class="page-nation__btn" @click="props.next()">&gt;</div>
  </div>
</template>

<style scoped>
.page-nation {
  display: flex;
  justify-content: center;
  margin: 0 auto;
  padding: 0 auto;
  width: 100%;
  color: rgba(40, 167, 69, 0.9);
}

.page-nation div {
  padding: 10px;
  font-size: 20px;
}

.page-nation__btn {
  cursor: pointer;
}
</style>
