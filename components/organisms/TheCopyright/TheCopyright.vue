<template>
  <div>
    <div class="the-copyright">
      <base-text>
        &copy; 2019 - {{ latestYear }} taka1156
        <br />使用素材、プライバシーポリシー等は
        <base-link :route-to="copyrightUrl" :is-target="true">コチラ</base-link>
      </base-text>
    </div>
  </div>
</template>

<script>
import BaseLink from '../../atoms/BaseLink/BaseLink';
import BaseText from '../../atoms/BaseText/BaseText';

export default {
  name: 'TheCopyright',
  components: {
    BaseLink,
    BaseText
  },
  props: {
    /**
     * ポリシーサイトのURL
     */
    copyrightUrl: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      latestYear: new Date().getFullYear()
    };
  }
};
</script>

<style scoped>
::v-deep .base-text--extend,
a {
  color: white;
}

.the-copyright {
  width: 100%;
  padding: 0;
  margin: 0;
  text-align: left;
  background-color: rgb(40 167 69 / 90%);
}
</style>
