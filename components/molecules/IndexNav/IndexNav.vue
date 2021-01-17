<template>
  <div>
    <div class="index-nav">
      <base-nav-icon :is-open="isOpen" @btn-click="changeState">
        {{ isOpen ? 'CLOSE' : 'INDEX' }}
      </base-nav-icon>
    </div>
  </div>
</template>

<script>
import NavIcon from '../../atoms/BaseNavIcon/BaseNavIcon';

export default {
  name: 'IndexNav',
  components: {
    'base-nav-icon': NavIcon
  },
  props: {
    /**
     * 目次の開閉状態
     */
    isOpen: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    changeState() {
      this.$emit('change-state', !this.isOpen);
    }
  }
};
</script>

<style scoped>
::v-deep .base-nav-icon--extend {
  top: 0;
  margin: 0 auto;
}

.index-nav {
  position: fixed;
  right: 10px;
  bottom: 50px;
  z-index: 2;
  width: 50px;
  height: 55px;
  padding: 0;
  margin: auto;
  background-color: rgba(40, 167, 69, 0.9);
}
</style>
