<template>
  <div>
    <div class="container">
      <h1>Profile</h1>
      <div class="line" />

      <section class="contents">
        <h2 class="contents__title">自己紹介</h2>
        <div class="profile__box">
          <img
            class="profile__img"
            src="@/assets/img/prof.png"
            alt="プロフィール画像"
          />
          <p class="contents__sentence">
            プログラミングは、大学1年から触り始めC、Java、Python3などを学びました。
            現在は、TypeScriptやPHP(+Laravel)について学習しています。
          </p>
        </div>
      </section>

      <section class="contents">
        <h2 class="contents__title">githubの活動</h2>
        <div class="gh-chart">
          <img
            class="gh-chart__img"
            src="http://ghchart.rshah.org/taka1156"
            alt="taka1156's Github chart"
          />
        </div>
      </section>

      <section class="contents">
        <h2 class="contents__title">SNSやGitHub等</h2>
        <ul class="sns">
          <li class="sns__box">
            <a href="https://github.com/taka1156" class="sns__link">
              <base-img
                :size="`lg`"
                :img-url="require('@/assets/img/github-logo.png')"
                :img-alt="`githubアイコン`"
              />
              GitHub
            </a>
          </li>
          <li class="sns__box">
            <a href="https://qiita.com/taka_1156" class="sns__link">
              <base-img
                :size="`lg`"
                :img-url="require('@/assets/img/qiita-logo.png')"
                :img-alt="`qiitaアイコン`"
              />
              Qiita
            </a>
          </li>
          <li class="sns__box">
            <a href="https://twitter.com/taka_1156" class="sns__link">
              <base-img
                :size="`lg`"
                :img-url="require('@/assets/img/twitter-logo.png')"
                :img-alt="`twiiterアイコン`"
              />
              Twitter
            </a>
          </li>
          <li class="sns__box">
            <a href="https://www.taka1156.site" class="sns__link">
              <base-img
                :size="`lg`"
                :img-url="require('@/assets/img/prof.png')"
                :img-alt="`portfolioアイコン`"
              />
              Portfolio
            </a>
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script>
import BaseImg from '@/components/atoms/BaseImg/BaseImg';

export default {
  name: 'Profile',
  components: {
    'base-img': BaseImg
  }
};
</script>

<style scoped>
/* css reset */
ul,
li {
  margin: 0;
  padding: 0;
}

li {
  display: block;
}

/* css reset */

.contents {
  margin: 1.25em auto 2em;
}

.contents__title {
  font-size: 1.25em;
}

.profile__box {
  display: flex;
  justify-content: center;
  margin: 0 auto;
  padding: 0;
  height: 150px;
  width: 85%;
  border: 0.5px solid gray;
  border-radius: 5px;
}

.profile__img {
  display: block;
  margin: 10px;
  padding: 0;
  height: 88%;
  width: 25%;
}

.contents__sentence {
  margin: auto 0 auto 0;
  height: 90%;
  width: 75%;
  font-size: 14px;
  text-align: left;
  line-height: normal;
  border-left: 0.5px dotted gray;
}

@media screen and (min-width: 768px) {
  .contents__sentence {
    font-size: 18px;
  }
}

/* gh-chart */
.gh-chart {
  width: 85%;
  margin: 0 auto;
  overflow-x: scroll;
  border: 0.5px solid gray;
  border-radius: 5px;
}

.gh-chart__img {
  object-fit: cover;
  width: 900px;
}

.sns {
  display: flex;
  margin: 20px auto;
  width: 80%;
  justify-content: space-between;
}

.sns__box {
  display: flex;
  width: 25%;
}

.sns__link {
  display: block;
  margin: 0 auto;
}
</style>
