<template>
 <div class="top">
   <Header />
   <NaviBar />
    <div class="container bg-color mt-4">
      <h2>
        記事一覧
      </h2>
      <div class="border" />
      <ArticleList v-bind:Articledata="ArticleList" />
    </div>
  </div>
</template>

<script>
import {fileMap} from "~/post/summary.json";

export default {
  name: 'top',
  data() {
    return {
      ArticleList: fileMap
    }
  }
}
</script>

