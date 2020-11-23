<template>
  <div>
    <p class="base-text" :class="`base-text--${useType} base-text--${color}`">
      <!-- @slot テキスト -->
      <slot />
    </p>
  </div>
</template>

<script>
export default {
  name: 'BaseText',
  props: {
    /**
     * テキストの用途別のスタイル指定
     * (noneは特に指定がない時)
     * @values none, badge, pagenation
     */
    useType: {
      type: String,
      default: 'none',
      validator: function(value) {
        return ['none', 'badge', 'pagenation'].indexOf(value) !== -1;
      }
    },
    /**
     * テキストの色
     * (noneは特に指定がない時)
     * @values none, white, green
     */
    color: {
      type: String,
      default: 'none',
      required: true,
      validator: function(value) {
        return ['none', 'white', 'green'].indexOf(value) !== -1;
      }
    }
  }
};
</script>

<style scoped>
/* css reset */
p {
  margin: 0;
  padding: 0;
}

/* css reset */

.base-text {
  display: block;
}

.base-text--white {
  color: white;
}

.base-text--green {
  color: rgba(40, 167, 69, 0.9);
}

.base-text--badge {
  font-size: 12px;
  line-height: 30px;
}

.base-text--pagenation {
  padding: 10px;
  font-size: 20px;
}
</style>
