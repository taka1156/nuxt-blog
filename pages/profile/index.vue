<template>
  <div>
    <base-heading1> Profile </base-heading1>

    <section class="contents">
      <h2 class="contents__heading">自己紹介</h2>
      <profile-box :profile="profile" />
    </section>

    <section class="contents">
      <h2 class="contents__heading">Githubの活動</h2>
      <contribution-box
        :img-url="contributionImg.imgUrl"
        :img-alt="contributionImg.imgAlt"
      />
    </section>

    <section class="contents">
      <h2 class="contents__heading">Github Status</h2>
      <github-status
        :status-url="githubStatusInfo.statusUrl"
        :used-lang-url="githubStatusInfo.usedLangUrl"
        :img-alt="githubStatusInfo.imgAlt"
      />
    </section>

    <section class="contents">
      <h2 class="contents__heading">SNSやGitHub等</h2>
      <sns-icons :sns-icons="snsIcons" />
    </section>
  </div>
</template>

<script>
import BaseHeading1 from '@/components/atoms/BaseHeading1/BaseHeading1';
import ProfileBox from '@/components/organisms/ProfileBox/ProfileBox';
import ContributionBox from '@/components/organisms/ContributionBox/ContributionBox';
import GithubStatus from '@/components/organisms/GithubStatus/GithubStatus';
import SnsIcons from '@/components/organisms/SnsIcons/SnsIcons';
import meta from 'assets/js/mixin/meta.mixin.js';
import {
  SNS_ICONS,
  PROFILE,
  GITHUB_CONTRIBUTION_IMG,
  GITHUB_STATUS_INFO
} from '@/constants/index.js';

export default {
  name: 'Profile',
  components: {
    BaseHeading1,
    ProfileBox,
    ContributionBox,
    GithubStatus,
    SnsIcons
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
  },
  computed: {
    profile: () => PROFILE,
    snsIcons: () => SNS_ICONS,
    contributionImg: () => GITHUB_CONTRIBUTION_IMG,
    githubStatusInfo: () => GITHUB_STATUS_INFO
  }
};
</script>

<style scoped>
::v-deep .base-heading1--extend {
  padding: 0 0 10px;
  border-bottom: 2.5px solid lightgray;
}

.contents {
  margin: 1.25em auto 2em;
}

.contents__heading {
  font-size: 1.25em;
}
</style>
