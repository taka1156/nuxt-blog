<template>
 <div class="ArticleList">
    <HeadArea />
    <div class="container bg-color">
      <h2>
        記事一覧
      </h2>
      <div class="row d-flex justify-content-around">
        <div v-for="(Article, index) in ArticleList" :key="index">
          <article v-if="!Article.draft">
            <div class="card card-body m-2 shadow-lg" @click="jump(Article.created_at, Article.subpath)">
              <h3>
                {{Article.title}}
              </h3>
              <img src="https://placehold.jp/130x80.png" width="100%" height="100%" class="mx-auto">
              <p class="card-text mx-auto mb-0 border">
                {{Article.summary}}
              </p>
              <p class="card-text mx-auto mb-0 border">
                作成日:{{Article.created_at}}~更新日:{{Article.updated_at}}
              </p>
            </div>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {fileMap} from "~/post/summary.json";

export default {
  name: 'ArticleList',
  computed:{
    ArticleList() {
      let Articledata = fileMap;
      Array.prototype.reverse.call(Articledata);
      return Articledata;
    }
  },
  methods:{
    jump(date, subpath){
      this.$router.push(`post/${date}/${subpath}`);
    }
  }
}
</script>

<style scoped>
.card{
    width: 22.8rem;
}

.container{
  width: 100%
}
</style>
