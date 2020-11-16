<template>
  <div>
    <button class="btn" :class="`base-btn--${useType}`" @click="btnClick">
      <!-- @slot ボタンラベル -->
      <slot />
    </button>
  </div>
</template>

<script>
export default {
  name: 'BaseBtn',
  props: {
    useType: {
      type: String,
      default: 'none',
      required: true,
      validator: function(value) {
        return ['none', 'pagenation'].indexOf(value) !== -1;
      }
    }
  },
  methods: {
    btnClick() {
      /**
       * ボタンクリックイベント
       * @event btnClick
       * @type {event}
       */
      this.$emit('btn-click');
    }
  }
};
</script>

<style scoped>
/* css reset */
button {
  margin: 0;
  padding: 0;
  border: none;
  outline: none;
  background: transparent;
}

/* css reset */

.base-btn--pagenation {
  padding: 10px;
  font-size: 20px;
  cursor: pointer;
}
</style>
