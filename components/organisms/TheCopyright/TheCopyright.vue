<template>
  <div>
    <div class="the-copyright">
      <base-text>
        &copy; 2019 taka1156
      </base-text>
    </div>
  </div>
</template>

<script>
import BaseText from '../../atoms/BaseText/BaseText';

export default {
  name: 'TheCopyright',
  components: {
    'base-text': BaseText
  }
};
</script>

<style scoped>
::v-deep .base-text--extend {
  color: white;
}

.the-copyright {
  bottom: 0;
  width: 100%;
  padding: 0;
  margin: 0;
  text-align: left;
  background-color: rgba(40, 167, 69, 0.9);
}
</style>
