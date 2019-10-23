<template>
  <div class="app">
    <nuxt />
    <p5bg />
  </div>
</template>

<script>
import p5bg from "@/components/p5-bgimage";

export default {
  name: "app",
  components: {
    p5bg
  }
};
</script>

<style scoped>
.app {
  text-align: center;
}
</style>