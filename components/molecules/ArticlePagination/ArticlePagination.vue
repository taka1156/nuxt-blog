<template>
  <div>
    <div class="article-pagination">
      <base-btn @btn-click="prevPage">
        <span>
          &lt;
        </span>
      </base-btn>
      <base-text> {{ currentPage }}/{{ maxPage }} </base-text>
      <base-btn @btn-click="nextPage">
        <span>
          &gt;
        </span>
      </base-btn>
    </div>
  </div>
</template>

<script>
import BaseBtn from '../../atoms/BaseBtn/BaseBtn';
import BaseText from '../../atoms/BaseText/BaseText';

export default {
  name: 'ArticlePagination',
  components: {
    'base-btn': BaseBtn,
    'base-text': BaseText
  },
  props: {
    /**
     * 現在閲覧しているページ番号
     */
    currentPage: {
      type: Number,
      default: 0,
      requierd: true
    },
    /**
     * 最大ページ数
     */
    maxPage: {
      type: Number,
      default: 0,
      requierd: true
    }
  },
  methods: {
    prevPage() {
      /**
       * 前のページに進む
       * (イベント伝搬)
       * @event prevPage
       */
      this.$emit('prev');
    },
    nextPage() {
      /**
       * 次のページに進む
       * (イベント伝搬)
       * @event nextPage
       */
      this.$emit('next');
    }
  }
};
</script>

<style scoped>
::v-deep .base-btn--extend {
  padding: 10px;
  font-size: 20px;
  color: rgb(40, 167, 69);
  background: transparent;
  border: none;
}

::v-deep .base-text--extend {
  padding: 10px;
  font-size: 20px;
  color: rgb(40, 167, 69);
}

.article-pagination {
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 15px auto;
}
</style>
