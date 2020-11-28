<template>
  <div>
    <div v-show="isOpen" class="index-list">
      <div class="index-list__box">
        <strong>Index</strong>
        <ul>
          <li
            v-for="(t, index) in toc"
            :key="`index_${index}`"
            class="index-list__item-box"
            @click="changeState"
          >
            <index-list-item :t="t" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import IndexListItem from '../IndexListItem/IndexListItem';

export default {
  name: 'IndexList',
  components: {
    'index-list-item': IndexListItem
  },
  props: {
    isOpen: {
      type: Boolean,
      default: false,
      required: true
    },
    toc: {
      type: Array,
      default: () => [],
      requried: true
    }
  },
  methods: {
    changeState() {
      this.$emit('change-state', false);
    }
  }
};
</script>

<style scoped>
/* css reset */
ul,
li {
  padding: 0;
  margin: 0;
  list-style-type: none;
}

/* css reset */

.index-list {
  position: fixed;
  right: 10px;
  bottom: 110px;
  z-index: 2;
  width: 55%;
  height: 250px;
  overflow-y: scroll;
  background-color: white;
  border: 2px solid rgba(40, 167, 69, 0.9);
}

.index-list__box {
  margin: 0 auto;
}

.index-list__item-box {
  margin: 10px;
  text-align: left;
}

.index-list::-webkit-scrollbar {
  width: 8px;
}

.index-list::-webkit-scrollbar-track {
  display: none;
}

.index-list::-webkit-scrollbar-thumb {
  width: 100%;
  background-color: gray;
  border-radius: 5px;
}

@media (min-width: 790px) {
  .index-list {
    width: 30%;
  }
}
</style>
