<template>
  <div>
    <div class="article-date">
      <base-img
        :size="`sm`"
        :img-url="require('@/assets/img/icon/date.svg')"
        :img-alt="'日付'"
      />
      <base-text>
        作成日:{{ dateFormat(createdAt) }} ~ 更新日:{{ dateFormat(updatedAt) }}
      </base-text>
    </div>
  </div>
</template>

<script>
import BaseImg from '../../atoms/BaseImg/BaseImg';
import BaseText from '../../atoms/BaseText/BaseText';

export default {
  name: 'ArticleDate',
  components: {
    'base-img': BaseImg,
    'base-text': BaseText
  },
  props: {
    /**
     * 記事の作成日
     */
    createdAt: {
      type: String,
      defalut: '',
      required: true
    },
    /**
     * 記事の更新日
     */
    updatedAt: {
      type: String,
      defalut: '',
      required: true
    }
  },
  methods: {
    dateFormat(date) {
      /**
       * 日付の形式を変える
       */
      if (date == null) return '--/--/--';
      return new Date(date).toLocaleDateString();
    }
  }
};
</script>

<style scoped>
::v-deep .base-text--extend {
  color: rgb(40, 167, 69);
}

.article-date {
  display: flex;
  margin: 0;
}
</style>
