<template>
  <div class="Article">
    <div class="container-fluid">
      <div class="article-content">
        <!--記事のheader-->
        <article-header :article="article" />
        <!--markdown埋め込み-->
        <div class="article-content__text markdown-body" v-html="parseMarked" />
      </div>
    </div>
  </div>
</template>

<script>
import ArticleHeader from '@/components/organisms/ArticleHeader';
import meta from 'assets/js/mixin/meta.mixin.js';
import marked from 'marked';
import hljs from 'highlight.js';

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
      return marked(this.article.body);
    }
  },
  created() {
    marked.setOptions({
      highlight(code, lang) {
        return hljs.highlightAuto(code, [lang]).value;
      },
      breaks: true,
      gfm: true
    });
  },
  head() {
    // メタタグ
    this.meta.title = this.article.title;
    this.meta.description = this.article.summary;
    this.meta.type = 'article';
    this.meta.url = `${this.baseURL}/${this.article.id}`;
    const encodeTitleUtf8 = encodeURI(this.article.title);
    const OGP_IMAGE =
      'https://images.microcms-assets.io/protected/ap-northeast-1:7cf4e012-34b8-42e4-9878-9730fb0adfdc/service/taka_blog/media/ogp.png';
    const PARAMS = `?txt=${encodeTitleUtf8}&txt-size=55&txt-color=white&txt-align=middle,center`;
    this.meta.image = OGP_IMAGE + PARAMS;

    return {
      title: this.meta.title,
      meta: [
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.meta.description
        },
        { hid: 'og:title', property: 'og:title', content: this.meta.title },
        { hid: 'og:type', property: 'og:type', content: this.meta.type },
        { hid: 'og:url', property: 'og:url', content: this.meta.url },
        { hid: 'og:image', property: 'og:image', content: this.meta.image },
        // 記事用の大きなOGPカード
        { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' }
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
