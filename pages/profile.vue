<template>
  <div class="Profile">
    <div class="container-fluid">
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
              <img src="@/assets/img/github.png" class="sns__icon" />
              GitHub
            </a>
          </li>
          <li class="sns__box">
            <a href="https://qiita.com/taka_1156" class="sns__link">
              <img src="@/assets/img/qiita.png" class="sns__icon" />
              Qiita
            </a>
          </li>
          <li class="sns__box">
            <a href="https://twitter.com/taka_Program" class="sns__link">
              <img src="@/assets/img/twitter.png" class="sns__icon" />
              Twitter
            </a>
          </li>
          <li class="sns__box">
            <a href="https://www.taka1156.site" class="sns__link">
              <img src="@/assets/img/prof.png" class="sns__icon" />
              PortfolioSite
            </a>
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Profile'
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
  margin: 20px auto;
  height: 140px;
  width: 90%;
  border: 0.5px solid gray;
  border-radius: 5px;
}

.profile__img {
  display: block;
  margin: 20px auto;
  height: 70%;
  width: 20%;
}

.contents__sentence {
  margin: 15px auto;
  padding: 10px;
  width: 70%;
  text-align: left;
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

.sns__icon {
  display: block;
  margin: 0 auto;
  height: 50px;
  width: 50px;
  border-radius: 100%;
  border: solid 1px gray;
  background-color: gray;
}
</style>
