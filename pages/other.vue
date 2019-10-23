<template>
  <div class="Other">
    <NaviBar />
    <div class="container-fluid mt-6">
      <h2>
        Other
      </h2>
      <div class="border" />
      <div class="container mt-3">
        <img
          class="mx-auto mb-4 rounded-lg"
          src="@/assets/prof.png"
          width="30%"
          height="30%"
        />
        <h2 class="font-weight-bolder h4">最近やっていること</h2>
        <div class="mx-auto text-left">
          <ul>
            <li>VueやNuxtについて、作りながら学ぶ。</li>
            <li>JavaScript(ES6)について学習。</li>
            <li>FireBaseやMongoDBで、NoSQL形式について触ってみる。</li>
            <li>PHPでのテスト駆動開発について学ぶ。</li>
            <div class="mr-5 text-right">&nbsp;等々…</div>
          </ul>
        </div>
        <h2 class="font-weight-bolder h4">SNSやGitHub等</h2>
        <div class="mx-auto text-left">
          <ul>
            <li><a href="https://github.com/taka1156">github</a></li>
            <li><a href="https://qiita.com/Taka56110">Qiita</a></li>
            <li>
              <a href="https://mobile.twitter.com/taka_Program">twitter</a>
            </li>
            <li>
              <a href="https://taka1156.github.io/PortfolioSite-dev"
                >ポートフォリオサイト</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.icon {
  width: 60px;
  height: 60px;
  border-radius: 60px;
  margin: 60px 10px;
  border: solid 1px gray;
  background-color: gray;
}
</style>
