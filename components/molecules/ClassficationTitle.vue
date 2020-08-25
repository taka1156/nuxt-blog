<template>
  <div>
    <div class="classfication-title">
      <h1 class="classfication-title__title">
        <slot />
      </h1>
      <img :src="imgUrl" class="classfication-title__icon" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ClassficationTitle',
  props: {
    imgUrl: {
      type: String,
      default: '',
      require: true
    }
  }
};
</script>

<style scoped>
.classfication-title {
  display: flex;
  justify-content: center;
}

.classfication-title__title {
  padding: 5px;
  font-size: 1.25rem;
}

.classfication-title__icon {
  padding: 5px;
  height: 50px;
  width: 50px;
}
</style>
