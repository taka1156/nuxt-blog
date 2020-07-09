<template>
  <div class="ArticleCategory">
    <div class="mt-2 mb-1 d-flex justify-content-between">
      カテゴリー:
      <p
        class="clickable my-0 badge badge-pill badge-success"
        @click="jump(category)"
      >
        {{ category.name }}
        <img :src="category.img.url" class="category" />
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArticleCategory',
  props: {
    category: {
      type: Object,
      default: () => {},
      required: true
    }
  },
  methods: {
    jump({ id }) {
      this.$router.push({
        name: 'category-id',
        params: { id: `${id}` }
      });
    }
  }
};
</script>

<style scoped>
.category {
  height: 20px;
  width: 20px;
}
</style>
