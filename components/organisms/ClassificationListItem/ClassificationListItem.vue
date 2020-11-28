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
          :size="`lg`"
          :img-url="classificationItem.img.url"
          :img-alt="`${classificationItem.name}のロゴ`"
        />
      </div>
    </article>
  </div>
</template>

<script>
import BaseImg from '../../atoms/BaseImg/BaseImg';

export default {
  name: 'ClassificationListItem',
  components: {
    'base-img': BaseImg
  },
  props: {
    /**
     * タグもしくは、カテゴリーのリストの1つ分の情報
     */
    classificationItem: {
      type: Object,
      default: () => {},
      required: true
    },
    /**
     * 現在閲覧中のroute
     * (閲覧しているパスによってclassificationJumpの行き先が変わる)
     */
    routePath: {
      type: String,
      default: '',
      required: true
    }
  },
  methods: {
    /**
     * 選択されたタグもしくは、カテゴリーが含まれた記事一覧に飛ぶ
     * (vue-router)
     */
    classificationJump({ id }) {
      this.$router.push({
        name: `${this.routePath}-id`,
        params: { id: id }
      });
    }
  }
};
</script>

<style scoped>
.classification-list-item {
  display: block;
  padding: 10px;
  margin: 10px;
  cursor: pointer;
  border: 1px solid rgba(40, 167, 69, 0.9);
  border-radius: 5px;
}

.classification-list-item__box {
  display: flex;
  justify-content: space-between;
}

.classification-list-item__title {
  text-align: left;
}
</style>
