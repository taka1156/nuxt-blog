<template>
  <div class="Profile">
    <div class="container">
      <h1>Profile</h1>
      <hr />

      <section class="contents">
        <h2 class="contents__title">自己紹介</h2>
        <div class="profile__box">
          <img class="profile__img" src="@/assets/img/prof.png" />
          <p class="contents__sentence">
            プログラミングは、大学1年から触り始めC、Java、Python2などを学びました。<br />
            現在は、大学4年生で、個人的にTypeScriptやPHP(+Laravel)について学習しています。<br />
          </p>
        </div>
      </section>

      <section class="contents">
        <h2 class="contents__title">SNSやGitHub等</h2>
        <ul class="sns">
          <li class="sns__box">
            <a href="https://github.com/taka1156" class="sns__link">
              <base-img
                :img-url="require('@/assets/img/github-logo.png')"
                class="base-img--lg"
              />
              GitHub
            </a>
          </li>
          <li class="sns__box">
            <a href="https://qiita.com/taka_1156" class="sns__link">
              <base-img
                :img-url="require('@/assets/img/qiita-logo.png')"
                class="base-img--lg"
              />
              Qiita
            </a>
          </li>
          <li class="sns__box">
            <a href="https://twitter.com/taka_Program" class="sns__link">
              <base-img
                :img-url="require('@/assets/img/twitter-logo.png')"
                class="base-img--lg"
              />
              Twitter
            </a>
          </li>
          <li class="sns__box">
            <a href="https://www.taka1156.site" class="sns__link">
              <base-img
                :img-url="require('@/assets/img/prof.png')"
                class="base-img--lg"
              />
              PortfolioSite
            </a>
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script>
import BaseImg from '@/components/atoms/BaseImg';

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
  margin: 10px auto;
  height: 150px;
  width: 90%;
  border: 0.5px solid gray;
  border-radius: 5px;
}

.profile__img {
  display: block;
  margin: auto 0 auto 0;
  padding: 5px;
  height: 130px;
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
  .profile__img {
    width: 15%;
  }

  .contents__sentence {
    font-size: 20px;
  }
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
