<template>
  <div class="pagination">
    <base-btn @btn-click="$emit('prev')">
      <base-text :color="`green`">
        &lt;
      </base-text>
    </base-btn>
    <base-text :use-type="`pagenation`" :color="`green`">
      {{ currentPage }}/{{ maxPage }}
    </base-text>
    <base-btn @btn-click="$emit('next')">
      <base-text :color="`green`">
        &gt;
      </base-text>
    </base-btn>
  </div>
</template>

<script>
import BaseBtn from '../../atoms/base/BaseBtn';
import BaseText from '../../atoms/base/BaseText';

export default {
  name: 'ArticlePagenation',
  components: {
    'base-btn': BaseBtn,
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
</style>
