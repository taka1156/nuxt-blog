<template>
  <div class="Article">
    <NaviBar />
    <div class="container-fluid mt-6">
      <!--記事のheader-->
      <div class="border bg-info">
        <h1>{{ article.title }}</h1>
        <p>
          作成日:{{ dateFormat(article.createdAt) }} ~ 更新日:{{
            dateFormat(article.updatedAt)
          }}
        </p>
        <div class="mx-auto d-flex justify-content-center">
          タグ:&nbsp;
          <div v-for="(tag, index) in article.tags" :key="index">
            <p class="badge badge-pill badge-secondary">{{ tag.name }}</p>
            &nbsp;
          </div>
        </div>
      </div>
      <!--markdown埋め込み-->
      <div class="text-left text-break" v-html="$md.render(article.body)" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Artcle',
  async asyncData({ $axios, params }) {
    // 記事のURL
    const ARTICLE_URL = `${process.env.ARTICLE_URL}/${params.subpath}`;
    const OPTIONS = {
      fields: 'title,body,tags,createdAt,updatedAt'
    };
    const article = await $axios.$get(ARTICLE_URL, {
      params: { ...OPTIONS },
      headers: { 'X-API-KEY': process.env.MICRO_CMS_KEY }
    });
    console.log(article)
    return { article: article };
  },
  data() {
    return {
      article: {}
    };
  },
  methods: {
    dateFormat(date) {
      if (date === undefined) return '--/--/--';
      return new Date(date).toLocaleDateString();
    }
  }
};
</script>
