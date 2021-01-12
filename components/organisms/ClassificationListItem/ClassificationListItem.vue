<template>
  <div>
    <article class="classification-list-item">
      <base-link
        :route-to="{
          name: `${routePath}-id`,
          params: { id: classificationItem.id }
        }"
      >
        <div class="classification-list-item__box">
          <h2>{{ classificationItem.name }}</h2>
          <base-img
            :size="`lg`"
            :img-url="classificationItem.img.url"
            :img-alt="`${classificationItem.name}のロゴ`"
          />
        </div>
      </base-link>
    </article>
  </div>
</template>

<script>
import BaseLink from '../../atoms/BaseLink/BaseLink';
import BaseImg from '../../atoms/BaseImg/BaseImg';

export default {
  name: 'ClassificationListItem',
  components: {
    'base-link': BaseLink,
    'base-img': BaseImg
  },
  props: {
    /**
     * 現在閲覧中のroute
     * (閲覧しているパスによってclassificationJumpの行き先が変わる)
     */
    routePath: {
      type: String,
      default: '',
      required: true
    },
    /**
     * タグもしくは、カテゴリーのリストの1つ分の情報
     */
    classificationItem: {
      type: Object,
      default: () => {},
      required: true
    }
  }
};
</script>

<style scoped>
::v-deep .base-link--extend {
  color: black;
  text-align: left;
  text-decoration: none;
  word-break: break-word;
  overflow-wrap: break-word;
  cursor: pointer;
}

.classification-list-item {
  display: block;
  padding: 10px;
  margin: 10px;
  cursor: pointer;
  border: 1px solid rgb(40, 167, 69);
  border-radius: 5px;
}

.classification-list-item__box {
  display: flex;
  justify-content: space-between;
}
</style>
