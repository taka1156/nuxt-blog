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
      default: () => {},
      required: true
    }
  }
};
</script>

<style scoped>
.index-list-item {
  color: rgba(40, 167, 69, 0.9);
  font-size: 15px;
}

@media (min-width: 790px) {
  .index-list-item {
    font-size: 20px;
  }
}
</style>
