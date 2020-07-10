<template>
  <div class="Top">
    <nav-bar />
    <div class="container-fluid mt-6">
      <h2>記事一覧</h2>
      <div class="border" />
      <article-list :filters="filters" />
    </div>
  </div>
</template>

<script>
import AricleList from '@/components/ArticleList';

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
