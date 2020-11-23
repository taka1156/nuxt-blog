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
  bottom: 50px;
  right: 10px;
  height: 55px;
  width: 50px;
  background-color: rgba(40, 167, 69, 0.9);
  z-index: 2;
}

.index-nav__text {
  margin-top: -10px;
  padding: 0;
  color: white;
  font-size: 10px;
}
</style>
