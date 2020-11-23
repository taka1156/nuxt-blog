<template>
  <div class="pagination">
    <base-btn :use-type="`pagenation`" @btn-click="prevPage">
      <span class="pagination__btn">
        &lt;
      </span>
    </base-btn>
    <base-text :use-type="`pagenation`" :color="`green`">
      {{ currentPage }}/{{ maxPage }}
    </base-text>
    <base-btn :use-type="`pagenation`" @btn-click="nextPage">
      <span class="pagination__btn">
        &gt;
      </span>
    </base-btn>
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
.pagination {
  display: flex;
  justify-content: center;
  margin: 0 auto;
  padding: 0;
  width: 100%;
  color: rgba(40, 167, 69, 0.9);
}

.pagination__btn {
  color: rgba(40, 167, 69, 0.9);
}
</style>
