<template>
  <div>
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
          src="https://ghchart.rshah.org/taka1156"
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
</template>

<script>
import BaseImg from '@/components/atoms/BaseImg/BaseImg';
import meta from 'assets/js/mixin/meta.mixin.js';

export default {
  name: 'Profile',
  components: {
    'base-img': BaseImg
  },
  mixins: [meta],
  head() {
    const URL = `${this.baseURL}/profile/`;
    const IMAGE = `${this.baseURL}/img/ogp/profile.png`;
    // メタタグ
    this.meta.title = 'プロフィール';
    this.meta.description =
      'taka1156のブログ。\nVueやTS、electron、Laravelなど技術関連の記事を更新中';
    this.meta.type = 'article';
    this.meta.url = URL;
    this.meta.image = IMAGE;

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
        {
          hid: 'description',
          name: 'description',
          content: this.meta.description
        }
      ]
    };
  }
};
</script>

<style scoped>
/* css reset */
ul,
li {
  padding: 0;
  margin: 0;
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
  width: 85%;
  height: 150px;
  padding: 0;
  margin: 0 auto;
  border: 0.5px solid gray;
  border-radius: 5px;
}

.profile__img {
  display: block;
  width: 25%;
  height: 88%;
  padding: 0;
  margin: 10px;
}

.contents__sentence {
  width: 75%;
  height: 90%;
  margin: auto 0 auto 0;
  font-size: 14px;
  line-height: normal;
  text-align: left;
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
  justify-content: space-between;
  width: 80%;
  margin: 20px auto;
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
