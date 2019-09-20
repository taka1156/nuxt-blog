<template>
  <div class="ArticleList">
    <div class="container border">
      <h2>
        記事一覧
      </h2>
      <div class="row d-flex justify-content-around">
        <div v-for="n in 6" :key="n">
          <div class="card card-body m-2 shadow-lg">
            <h3>
              title
            </h3>
            <img src="https://placehold.jp/130x80.png" width="100%" height="100%" class="mx-auto">
            <p class="card-text mx-auto mb-0 border">
              記事の内容。あああああああああああああああああああああああああああああああああああああああ
            </p>
            <p class="card-text mx-auto mb-0 border">
              作成日:2019/9/20~更新日:2019/9/20
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArticleList'
}
</script>

<style scoped>
.card{
    width: 30rem;
    height: 20rem;
}
.container{
  width: 86%
}
</style>
