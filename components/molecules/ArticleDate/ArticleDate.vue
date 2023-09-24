<template>
  <div>
    <div class="article-date">
      <base-img size="sm" :img-url="dateIcon" img-alt="日付" />
      <base-text>
        作成日:{{ formatDate(createdAt) }} ~ 更新日:{{ formatDate(updatedAt) }}
      </base-text>
    </div>
  </div>
</template>

<script>
import BaseImg from '../../atoms/BaseImg/BaseImg';
import BaseText from '../../atoms/BaseText/BaseText';
import dateSvg from '@/assets/img/icon/date.svg';
import { dayjs } from '@/utils/dayjs';

export default {
  name: 'ArticleDate',
  components: {
    BaseImg,
    BaseText
  },
  props: {
    /**
     * 記事の作成日
     */
    createdAt: {
      type: String,
      required: true
    },
    /**
     * 記事の更新日
     */
    updatedAt: {
      type: String,
      required: true
    }
  },
  computed: {
    dateIcon: () => dateSvg
  },
  methods: {
    formatDate(date = '') {
      if (date === '') return '--/--/--';
      return dayjs(date).tz().format('YYYY/M/D');
    }
  }
};
</script>

<style scoped>
::v-deep .base-text--extend {
  color: rgb(40 167 69);
}

.article-date {
  display: flex;
  margin: 0;
}
</style>
