<template>
  <div>
    <div class="index-nav" @click="changeState">
      <base-nav-icon :is-open="isOpen">
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
    isOpen: {
      type: Boolean,
      default: false,
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
.index-nav {
  position: fixed;
  right: 10px;
  bottom: 50px;
  z-index: 2;
  width: 50px;
  height: 55px;
  background-color: rgba(40, 167, 69, 0.9);
}

.index-nav__text {
  padding: 0;
  margin-top: -10px;
  font-size: 10px;
  color: white;
}
</style>
