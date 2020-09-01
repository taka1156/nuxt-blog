<template>
  <div class="ArticleDate">
    <p class="article-date">
      <img :src="require('@/assets/img/icon/date.svg')" />
      <small>
        作成日:{{ dateFormat(createdAt) }} ~ 更新日:{{ dateFormat(updatedAt) }}
      </small>
    </p>
  </div>
</template>

<script>
export default {
  name: 'ArticleDate',
  props: {
    createdAt: {
      type: String,
      defalut: '',
      required: true
    },
    updatedAt: {
      type: String,
      defalut: '',
      required: true
    }
  },
  methods: {
    dateFormat(date) {
      if (date === undefined) return '--/--/--';
      return new Date(date).toLocaleDateString();
    }
  }
};
</script>

<style scoped>
.article-date {
  display: flex;
  margin: 0;
}
</style>
