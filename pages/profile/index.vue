<template>
  <div>
    <base-heading h-lv="1"> Profile </base-heading>

    <section class="contents">
      <base-heading h-lv="2">自己紹介</base-heading>
      <profile-box :profile="profile" />
    </section>

    <section class="contents">
      <base-heading h-lv="2">Githubの活動</base-heading>
      <contribution-box
        :img-url="contributionImg.imgUrl"
        :img-alt="contributionImg.imgAlt"
      />
    </section>

    <section class="contents">
      <base-heading h-lv="2">Github Status</base-heading>
      <github-status
        :status-url="githubStatus.statusUrl"
        :used-lang-url="githubStatus.usedLangUrl"
        :img-alt="githubStatus.imgAlt"
      />
    </section>

    <section class="contents">
      <base-heading h-lv="2">SNSやGitHub等</base-heading>
      <sns-icons :sns-icons="snsIcons" />
    </section>
  </div>
</template>

<script>
import BaseHeading from '@/components/atoms/BaseHeading/BaseHeading';
import ProfileBox from '@/components/organisms/ProfileBox/ProfileBox';
import ContributionBox from '@/components/organisms/ContributionBox/ContributionBox';
import GithubStatus from '@/components/organisms/GithubStatus/GithubStatus';
import SnsIcons from '@/components/organisms/SnsIcons/SnsIcons';
import meta from 'assets/js/mixin/meta.mixin.js';
import {
  SNS_ICONS,
  PROFILE,
  GITHUB_CONTRIBUTION_IMG,
  GITHUB_STATUS
} from '@/constants/index.js';

export default {
  name: 'Profile',
  components: {
    BaseHeading,
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
    githubStatus: () => GITHUB_STATUS
  }
};
</script>

<style scoped>
::v-deep .base-heading1--extend {
  padding: 0 0 10px;
  border-bottom: 2.5px solid lightgray;
}

::v-deep .base-heading2-extend {
  font-size: 1.25em;
}

.contents {
  margin: 1.25em auto 2em;
}
</style>
