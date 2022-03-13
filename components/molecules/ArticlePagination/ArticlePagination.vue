<template>
  <div>
    <div class="article-pagination">
      <base-link
        :route-to="{
          name: routePath,
          params: { pageid: prevIndex }
        }"
      >
        &lt;
      </base-link>
      <base-text> {{ currentPage }}/{{ maxPage }} </base-text>
      <base-link
        :route-to="{
          name: routePath,
          params: { pageid: nextIndex }
        }"
      >
        &gt;
      </base-link>
    </div>
  </div>
</template>

<script>
import BaseLink from '../../atoms/BaseLink/BaseLink';
import BaseText from '../../atoms/BaseText/BaseText';

export default {
  name: 'ArticlePagination',
  components: {
    BaseLink,
    BaseText
  },
  props: {
    /**
     * 現在閲覧しているページ番号
     */
    currentPage: {
      type: Number,
      required: true
    },
    /**
     * 最大ページ数
     */
    maxPage: {
      type: Number,
      required: true
    },
    /**
     * 現在閲覧中のroute
     * (閲覧しているパスによってpageJumpの行き先が変わる)
     * @values page-pageid, tag-id-pageid, category-id-pageid
     */
    routePath: {
      type: String,
      required: true,
      validator: function (value) {
        return (
          ['page-pageid', 'tag-id-pageid', 'category-id-pageid'].indexOf(value) !==
          -1
        );
      }
    },
    nextIndex: {
      type: Number,
      required: true
    },
    prevIndex: {
      type: Number,
      required: true
    }
  }
};
</script>

<style scoped>
::v-deep .base-link--extend {
  padding: 10px;
  font-size: 20px;
  color: rgb(40 167 69);
  background: transparent;
  border: none;
}

::v-deep .base-text--extend {
  padding: 10px;
  font-size: 20px;
  color: rgb(40 167 69);
}

.article-pagination {
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 15px auto;
}
</style>
