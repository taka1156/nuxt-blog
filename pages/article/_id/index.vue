<template>
  <div class="Article">
    <div class="container-fluid">
      <div class="article-content">
        <!--記事のheader-->
        <article-header :article="article" />
        <!--markdown埋め込み-->
        <div class="article-content__text" v-html="parseMarked" />
      </div>
    </div>
  </div>
</template>

<script>
import ArticleHeader from '@/components/organisms/ArticleHeader';
import marked from 'marked';
import hljs from 'highlight.js';
import 'highlight.js/styles/atelier-savanna-dark.css';
import meta from 'assets/js/mixin/meta.mixin.js';

export default {
  name: 'Artcle',
  components: {
    'article-header': ArticleHeader
  },
  mixins: [meta],
  async asyncData({ $axios, params, payload }) {
    if (payload != null) {
      return { article: payload };
    }
    // 記事のURL
    const ARTICLE_URL = `${process.env.ARTICLE_URL}/${params.id}`;
    const OPTIONS = {
      fields: 'id,title,summary,body,tags,category,createdAt,updatedAt'
    };
    const article = await $axios.$get(ARTICLE_URL, {
      params: { ...OPTIONS },
      headers: { 'X-API-KEY': process.env.MICRO_CMS }
    });
    return { article: article };
  },
  data() {
    return {
      article: {}
    };
  },
  computed: {
    parseMarked() {
      // コード背景
      const BG =
        '<style>pre{color:silver;background-color:black;overflow: scroll}</style>\n';
      return marked(BG + this.article.body, {
        gfm: true
      });
    }
  },
  created() {
    marked.setOptions({
      highlight(code, lang) {
        return hljs.highlightAuto(code, [lang]).value;
      }
    });
  },
  head() {
    // メタタグ
    this.meta.title = this.article.title;
    this.meta.description = this.article.summary;
    this.meta.type = 'article';
    this.meta.url = `${this.baseURL}/${this.article.id}`;
    // this.meta.image = this.article.img.url != null ? this.article.img.url : '';

    return {
      title: this.meta.title,
      meta: [
        // eslint-disable-next-line prettier/prettier
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.meta.description
        },
        { hid: 'og:title', property: 'og:title', content: this.meta.title },
        { hid: 'og:type', property: 'og:type', content: this.meta.type },
        { hid: 'og:url', property: 'og:url', content: this.meta.url },
        { hid: 'og:image', property: 'og:image', content: this.meta.image }
      ]
    };
  }
};
</script>

<style scoped>
.article-content {
  margin: 10px;
}

.article-content__text {
  text-align: left;
}
</style>
