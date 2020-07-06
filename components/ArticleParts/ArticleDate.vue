<template>
  <div class="ArticleDate">
    <p class="d-flex flex-row my-0">
      <i class="material-icons mx-1">event_note</i>
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
.material-icons {
  font-size: 15px;
}
</style>
