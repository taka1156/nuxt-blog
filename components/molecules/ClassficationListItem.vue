<template>
  <div>
    <li class="list-item" @click="jump(classficationItem)">
      <div class="list-item__box">
        <h2 class="list-item__title">{{ classficationItem.name }}</h2>
        <img :src="format(classficationItem.img.url)" class="list-item__icon" />
      </div>
    </li>
  </div>
</template>

<script>
export default {
  name: 'ClassficationListItem',
  props: {
    classficationItem: {
      type: Object,
      default: () => {},
      required: true
    }
  },
  methods: {
    format(imgUrl) {
      return `${imgUrl}?fill-color=white&w=200&h=200`;
    },
    jump({ id }) {
      const PATH = this.$route.path.replace(/\//g, '');
      this.$router.push({ name: `${PATH}-id`, params: { id: id } });
    }
  }
};
</script>

<style scoped>
.list-item {
  display: block;
  padding: 10px;
  margin: 10px;
  border: 1px solid rgba(40, 167, 69, 0.9);
  border-radius: 5px;
}

.list-item__box {
  display: flex;
  justify-content: space-between;
}

.list-item__title {
  text-align: left;
}

.list-item__icon {
  height: 70px;
  width: 70px;
}
</style>
