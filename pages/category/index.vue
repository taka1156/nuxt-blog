<template>
  <div class="CategoryList">
    <NaviBar />
    <div class="container-fluid mt-6">
      <h2>
        カテゴリー
      </h2>
      <div class="border" />
      <ul class="list-group">
        <div v-for="(category, index) in categories" :key="index">
          <div
            class="article-color m-2 mx-auto list-group-item flex-column align-items-start"
            @click="jump(category)"
          >
            <div class="clickable d-flex w-100 justify-content-between">
              <h2 class="h4">{{ category.name }}</h2>
              <img :src="category.img.url" height="50px" width="50px" />
            </div>
          </div>
        </div>
      </ul>
      <infinite-loading @infinite="infiniteHandler" />
    </div>
  </div>
</template>

<script>
const POSTS_PER_PAGE = 10;

export default {
  name: 'CategoryList',
  data() {
    return {
      page: 0,
      categories: [],
      isLoad: true
    };
  },
  computed: {
    pageIndex() {
      return this.page * POSTS_PER_PAGE;
    }
  },
  methods: {
    async infiniteHandler($state) {
      if (this.isLoad) {
        const OPTIONS = {
          fields: 'id,name,img',
          limit: POSTS_PER_PAGE,
          offset: this.pageIndex
        };
        // コンテンツの取得
        const contents = await this.$getContents(
          process.env.MICRO_CMS_KEY,
          process.env.CATEGORY_URL,
          OPTIONS
        );
        // ページング
        if (contents.length > 0) {
          this.page++;
          this.categories.push(...contents);
          $state.loaded();
        } else {
          $state.complete();
          this.isLoad = false;
        }
      }
    },
    jump(category) {
      this.$router.push(`../category/${category.name}?id=${category.id}`);
    }
  }
};
</script>
