<template>
  <div>
    <article
      class="classification-list-item"
      @click="classificationJump(classificationItem)"
    >
      <div class="classification-list-item__box">
        <h2 class="classification-list-item__title">
          {{ classificationItem.name }}
        </h2>
        <base-img
          class="base-img--lg"
          :img-url="classificationItem.img.url"
          :img-alt="`${classificationItem.name}のロゴ`"
        />
      </div>
    </article>
  </div>
</template>

<script>
import BaseImg from '../../atoms/base/BaseImg';

export default {
  name: 'ClassificationListItem',
  components: {
    'base-img': BaseImg
  },
  props: {
    classificationItem: {
      type: Object,
      default: () => {},
      required: true
    },
    path: {
      type: String,
      default: '',
      required: true
    }
  },
  methods: {
    classificationJump({ id }) {
      this.$router.push({
        name: `${this.path}-id`,
        params: { id: id }
      });
    }
  }
};
</script>

<style scoped>
.classification-list-item {
  display: block;
  margin: 10px;
  padding: 10px;
  border: 1px solid rgba(40, 167, 69, 0.9);
  border-radius: 5px;
  cursor: pointer;
}

.classification-list-item__box {
  display: flex;
  justify-content: space-between;
}

.classification-list-item__title {
  text-align: left;
}
</style>
