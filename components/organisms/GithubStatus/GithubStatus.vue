<template>
  <div class="github-status">
    <base-img size="free" :img-url="statusUrl" :img-alt="imgAlt" />
    <base-img size="free" :img-url="usedLangUrl" :img-alt="imgAlt" />
  </div>
</template>

<script>
import BaseImg from '../../atoms/BaseImg/BaseImg';

export default {
  name: 'GithubStatus',
  components: {
    BaseImg
  },
  props: {
    statusUrl: {
      type: String,
      required: true
    },
    usedLangUrl: {
      type: String,
      required: true
    },
    imgAlt: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
::v-deep .base-img--extend {
  width: 100%;
  margin: 0;
}

@media screen and (min-width: 768px) {
  ::v-deep .base-img--extend {
    width: 40%;
  }
}

.github-status {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 85%;
  margin: 0 auto;
  border: 1px solid rgba(40, 167, 69, 0.9);
  border-radius: 5px;
}
</style>
