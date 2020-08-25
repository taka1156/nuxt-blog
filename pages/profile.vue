<template>
  <div class="Profile">
    <div class="container-fluid">
      <h1>Profile</h1>
      <hr />
      <div class="container mt-3">
        <img
          class="mx-auto mb-4 rounded-lg"
          src="@/assets/img/prof.png"
          width="30%"
          height="30%"
        />
        <h2 class="font-weight-bolder h4">最近やっていること</h2>
        <div class="mx-auto text-left">
          <ul class="list-group">
            <li class="list-group-item m-2">
              VueやNuxtについて、作りながら学ぶ。
            </li>
            <li class="list-group-item m-2">
              JavaScript(ES6)について学習。
            </li>
            <li class="list-group-item m-2">
              FireBaseやMongoDBで、NoSQL形式について触ってみる。
            </li>
            <li class="list-group-item m-2">
              PHPでのテスト駆動開発について学ぶ。
            </li>
            <div class="mr-5 text-right">&nbsp;等々…</div>
          </ul>
        </div>
        <h2 class="font-weight-bolder h4">SNSやGitHub等</h2>
        <div class="mx-auto text-left">
          <ul class="list-group">
            <li
              class="clickable list-group-item m-2"
              @click="jump('https://github.com/taka1156')"
            >
              <img src="@/assets/img/github.png" class="icon" />
              GitHub
            </li>
            <li
              class="clickable list-group-item m-2"
              @click="jump('https://qiita.com/taka_1156')"
            >
              <img src="@/assets/img/qiita.png" class="icon" />
              Qiita
            </li>
            <li
              class="clickable list-group-item m-2"
              @click="jump('https://twitter.com/taka_Program')"
            >
              <img src="@/assets/img/twitter.png" class="icon" />
              Twitter
            </li>
            <li
              class="clickable list-group-item m-2"
              @click="jump('https://nuxt-takasportfolio.netlify.app')"
            >
              <img src="@/assets/img/prof.png" class="icon" />
              ポートフォリオサイト
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  methods: {
    jump(url) {
      location.href = url;
    }
  }
};
</script>

<style scoped>
.icon {
  width: 35px;
  height: 35px;
  border-radius: 35px;
  border: solid 1px gray;
  background-color: gray;
}
</style>
