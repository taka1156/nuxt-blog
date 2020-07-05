<template>
  <div class="Article">
    <NaviBar />
    <div class="mx-auto container-fluid mt-6">
      <!--記事のheader-->
      <div class="bg-light w-100 border">
        <p class="d-flex flex-row w-100">
          作成日:{{ dateFormat(article.createdAt) }} ~ 更新日:{{
            dateFormat(article.updatedAt)
          }}
        </p>
        <h1 class="w-100 text-break text-left h2">{{ article.title }}</h1>
        <div class="d-flex flex-row w-100">
          カテゴリー:
          <p class="badge badge-pill badge-success mx-2">
            {{ article.category.name }}
            <img :src="article.category.img.url" height="20px" width="20px" />
          </p>
        </div>
        <div class="d-flex flex-row w-100">
          タグ:
          <div v-for="(tag, index) in article.tags" :key="index">
            <p class="badge badge-pill border border-success mx-2">
              {{ tag.name }}
              <img :src="tag.img.url" height="15px" width="15px" />
            </p>
          </div>
        </div>
      </div>
      <!--markdown埋め込み-->
      <div class="text-left text-break" v-html="$md.render(article.body)" />
    </div>
  </div>
</template>

<script>
import meta from '~/assets/js/mixin/meta.mixin.js';

export default {
  name: 'Artcle',
  mixins: [meta],
  async asyncData({ $axios, params }) {
    // 記事のURL
    const ARTICLE_URL = `${process.env.ARTICLE_URL}/${params.id}`;
    const OPTIONS = {
      fields: 'title,summary,body,tags,category,createdAt,updatedAt'
    };
    const article = await $axios.$get(ARTICLE_URL, {
      params: { ...OPTIONS },
      headers: { 'X-API-KEY': process.env.MICRO_CMS_KEY }
    });
    return { article: article };
  },
  data() {
    return {
      article: {},
      // メタタグ
      meta: {
        title: this.article.title,
        description: this.article.summary,
        type: 'article',
        url: this.$route.fullPath,
        image: '' || this.article.img
      }
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
