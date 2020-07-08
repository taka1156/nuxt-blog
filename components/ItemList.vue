<template>
  <div class="ItemList">
    <ul class="list-group">
      <div v-for="(item, index) in items" :key="index">
        <div
          class="m-2 mx-auto list-group-item flex-column align-items-start"
          @click="jump(item)"
        >
          <div class="clickable d-flex w-100 justify-content-between">
            <h2 class="h4">{{ item.name }}</h2>
            <img :src="item.img.url" class="icon" />
          </div>
        </div>
      </div>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ItemList',
  props: {
    path: {
      type: String,
      default: '',
      required: true
    },
    items: {
      type: Array,
      default: () => [],
      required: true
    }
  },
  methods: {
    jump(category) {
      this.$router.push(`./${this.path}/${category.name}/${category.id}`);
    }
  }
};
</script>

<style scoped>
.icon {
  height: 70px;
  width: 70px;
}
</style>
