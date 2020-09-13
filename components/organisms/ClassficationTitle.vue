<template>
  <div>
    <div class="classfication-title">
      <h1 class="classfication-title__title">
        <slot />
      </h1>
      <base-img class="img--lg" :img-url="imgUrl" :img-alt="'ロゴ'" />
    </div>
  </div>
</template>

<script>
import BaseImg from '../atoms/BaseImg';

export default {
  name: 'ClassficationTitle',
  components: {
    'base-img': BaseImg
  },
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
