<template>
  <div class="ArticleList">
    <div class="list-group">
      <div v-for="(article, article_index) in articles" :key="article_index">
        <article
          class="clickable article-color mt-2 mx-auto text-left list-group-item flex-column"
          @click="jump(article.id)"
        >
          <small>
            <i class="material-icons">event_note</i>
            作成日:{{ dateFormat(article.createdAt) }} ~ 更新日:{{
              dateFormat(article.updatedAt)
            }}
          </small>
          <div class="border" />
          <div class="d-flex justify-content-between">
            <h3 class="h4 mb-1">{{ article.title }}</h3>
          </div>
          <p>{{ article.summary }}</p>
          <div class="border" />
          <div class="d-flex justify-content-start">
            タグ:&nbsp;
            <div v-for="(tag, tag_index) in article.tags" :key="tag_index">
              <p class="badge badge-pill badge-secondary">{{ tag.name }}</p>
              &nbsp;
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    articles: {
      type: Array,
      default: () => [],
      require: true
    }
  },
  methods: {
    jump(id) {
      this.$router.push({ name: 'article-id', params: { id: `${id}` } });
    },
    dateFormat(date) {
      if (date === undefined) return '--/--/--';
      return new Date(date).toLocaleDateString();
    }
  }
};
</script>
