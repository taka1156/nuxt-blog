<template>
  <div>
    <h1>Profile</h1>
    <div class="line" />

    <section class="contents">
      <h2 class="contents__title">自己紹介</h2>
      <profile-box :profile="profile" />
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
      <sns-icons :sns-icons="snsIcons" />
    </section>
  </div>
</template>

<script>
import ProfileBox from '@/components/organisms/ProfileBox/ProfileBox';
import SnsIcons from '@/components/organisms/SnsIcons/SnsIcons';
import meta from 'assets/js/mixin/meta.mixin.js';
import { SNS_ICONS, PROFILE } from '@/constants/index.js';

export default {
  name: 'Profile',
  components: {
    'profile-box': ProfileBox,
    'sns-icons': SnsIcons
  },
  mixins: [meta],
  data() {
    return {
      profile: PROFILE,
      snsIcons: SNS_ICONS
    };
  },
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
.contents {
  margin: 1.25em auto 2em;
}

.contents__title {
  font-size: 1.25em;
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
</style>
