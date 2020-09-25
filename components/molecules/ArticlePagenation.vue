<template>
  <div class="pagination">
    <pagination-btn @click="$emit('prev')">
      &lt;
    </pagination-btn>
    <base-text class="base-text--pagenation">
      {{ currentPage }}/{{ maxPage }}
    </base-text>
    <pagination-btn @click="$emit('next')">
      &gt;
    </pagination-btn>
  </div>
</template>

<script>
import PaginationBtn from '../atoms/PaginationBtn';
import BaseText from '../atoms/BaseText.vue';

export default {
  name: 'ArticlePagenation',
  components: {
    'pagination-btn': PaginationBtn,
    'base-text': BaseText
  },
  props: {
    currentPage: {
      type: Number,
      default: 0,
      requierd: true
    },
    maxPage: {
      type: Number,
      default: 0,
      requierd: true
    }
  }
};
</script>

<style scoped>
.pagination {
  display: flex;
  justify-content: center;
  margin: 0 auto;
  padding: 0 auto;
  width: 100%;
  color: rgba(40, 167, 69, 0.9);
}

/*
  padding: 10px;
  font-size: 20px;
*/
</style>
