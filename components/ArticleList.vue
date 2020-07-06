<template>
  <div class="ArticleList">
    <div class="list-group">
      <div v-if="articles.length !== 0">
        <div v-for="(article, article_index) in articles" :key="article_index">
          <article class="my-2 border rounded">
            <article-header :article="article">
              <template v-slot:title>
                <h3
                  class="clickable text-break text-left my-1 text-success"
                  @click="jump(article)"
                >
                  {{ article.title }}
                </h3>
              </template>
            </article-header>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ArticleHeader from './ArticleParts/ArticleHeader';

export default {
  components: {
    'article-header': ArticleHeader
  },
  props: {
    articles: {
      type: Array,
      default: () => [],
      require: true
    }
  },
  methods: {
    jump({ id }) {
      this.$router.push({ name: 'article-id', params: { id: `${id}` } });
    }
  }
};
</script>
