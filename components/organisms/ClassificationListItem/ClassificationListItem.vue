<template>
  <div>
    <article class="classification-list-item">
      <base-link
        :route-to="{
          name: `${routePath}-id`,
          params: { id: item.id }
        }"
      >
        <div class="classification-list-item__box">
          <h2>{{ item.name }}</h2>
          <base-img-lazy
            size="lg"
            :img-url="item.img.url"
            :img-alt="`${item.name}のロゴ`"
          />
        </div>
      </base-link>
    </article>
  </div>
</template>

<script>
import BaseLink from '../../atoms/BaseLink/BaseLink';
import BaseImgLazy from '../../atoms/BaseImgLazy/BaseImgLazy';

export default {
  name: 'ClassificationListItem',
  components: {
    BaseLink,
    BaseImgLazy
  },
  props: {
    /**
     * 現在閲覧中のroute
     * (閲覧しているパスによってclassificationJumpの行き先が変わる)
     */
    routePath: {
      type: String,
      required: true
    },
    /**
     * タグもしくは、カテゴリーのリストの1つ分の情報
     */
    item: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
::v-deep .base-link--extend {
  color: black;
  text-align: left;
  word-break: break-word;
  overflow-wrap: break-word;
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
