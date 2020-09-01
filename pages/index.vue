<template>
  <div class="Top">
    <div class="container-fluid">
      <h1>Top</h1>
      <hr />
      <article-list :filters="filters" />
    </div>
  </div>
</template>

<script>
import AricleList from '@/components/organisms/ArticleList';

export default {
  name: 'Top',
  components: {
    'article-list': AricleList
  },
  data() {
    return {
      // 記事取得クエリ
      filters: ''
    };
  }
};
</script>
