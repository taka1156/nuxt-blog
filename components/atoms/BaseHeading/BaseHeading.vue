<template>
  <div>
    <component
      :is="`h${hLv}`"
      class="base-heading"
      :class="`base-heading${hLv}--extend`"
    >
      <!-- @slot headingタグの内容 -->
      <slot />
    </component>
  </div>
</template>

<script>
export default {
  name: 'BaseHeading',
  props: {
    /**
     * headingレベル(1~6)
     */
    hLv: {
      type: Number,
      required: true,
      validator: function (v) {
        return [1, 2, 3, 4, 5, 6].indexOf(v) !== -1;
      }
    }
  }
};
</script>

<style scoped>
.base-heading {
  word-break: break-word;
  overflow-wrap: break-word;
}
</style>
