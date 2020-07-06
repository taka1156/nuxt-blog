<template>
  <div class="ArticleTag">
    <div class="my-2 d-flex flex-row">
      タグ:&nbsp;
      <div v-for="(tag, tag_index) in tags" :key="tag_index">
        <p
          class="clickable mx-2 my-0 badge badge-pill border border-success"
          @click="jump(tag)"
        >
          {{ tag.name }}
          <img :src="tag.img.url" class="tag" />
        </p>
        &nbsp;
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArticleTag',
  props: {
    tags: {
      type: Array,
      default: () => [],
      required: true
    }
  },
  methods: {
    jump({ name, id }) {
      this.$router.push({
        name: 'tag-tag-id',
        params: { tag: `${name}`, id: `${id}` }
      });
    }
  }
};
</script>

<style scoped>
.tag {
  height: 20px;
  width: 20px;
}
</style>
