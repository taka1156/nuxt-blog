<template>
  <div class="ArticleList">
    <div class="list-group">
      <div v-for="(Article, index) in articledata" :key="index">
        <article
          class="article-color mt-2 mx-auto text-left list-group-item flex-column align-items-start"
          @click="jump(Article.fields.subpath)"
        >
          <small>
            <i class="material-icons">event_note</i>
            作成日:{{ dateFormat(Article.fields.createdAt) }} ~ 更新日:{{
              dateFormat(Article.fields.updatedAt)
            }}
          </small>
          <div class="border" />
          <div class="d-flex justify-content-between">
            <h3 class="h4 mb-1">{{ Article.fields.title }}</h3>
          </div>
          <p>{{ Article.fields.summary }}</p>
          <div class="border" />
          <div class="d-flex justify-content-start">
            タグ:&nbsp;
            <div v-for="(tag, Index) in Article.fields.tags" :key="Index">
              <p class="badge badge-pill badge-secondary">{{ tag }}</p>
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
    articledata: null
  },
  methods: {
    jump(subpath) {
      let path;
      if (this.$route.path.match('(result/*)')) {
        path = `../../post/${subpath}`;
      } else {
        path = `post/${subpath}`;
      }
      this.$router.push(path);
    },
    dateFormat(date) {
      if (date === undefined) return '--/--/--';
      return new Date(date).toLocaleDateString();
    }
  }
};
</script>
