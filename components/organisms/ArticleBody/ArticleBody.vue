<template>
  <div>
    <!--markdown埋め込み-->
    <div class="article-body markdown-body" v-html="parseMarked" />
    <index-navigation :tocs="tocs" />
  </div>
</template>

<script>
import IndexNavigation from '@/components/organisms/IndexNavigation/IndexNavigation';
import { markedWrap, tocs } from '@/utils/marked/index.js';

export default {
  name: 'ArticleBody',
  components: {
    IndexNavigation
  },
  props: {
    article: {
      type: Object,
      required: true
    }
  },
  computed: {
    parseMarked() {
      return markedWrap(this.article.body);
    },
    tocs: () => tocs
  }
};
</script>

<style scoped>
.article-body {
  margin: 10px auto;
  text-align: left;
}
</style>
