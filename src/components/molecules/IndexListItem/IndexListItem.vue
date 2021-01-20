<template>
  <div>
    <a v-scroll-to="`#${t.anchor}`" class="index-list-item" :href="`#${t.anchor}`">
      {{ t.index }}.{{ t.escapedText }}
    </a>
  </div>
</template>

<script>
export default {
  name: 'IndexListItem',
  props: {
    t: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.index-list-item {
  font-size: 15px;
  color: rgb(40, 167, 69);
}

@media (min-width: 790px) {
  .index-list-item {
    font-size: 20px;
  }
}
</style>
