<template>
  <div class="TagList">
    <NaviBar />
    <div class="container-fluid mt-6">
      <h2>
        タグ
      </h2>
      <div class="border" />
      <ul class="list-group">
        <div v-for="(tag, index) in tags" :key="index">
          <div
            class="article-color m-2 mx-auto list-group-item flex-column align-items-start"
            @click="jump(tag)"
          >
            <div class="clickable d-flex w-100 justify-content-between">
              <h2 class="h4">{{ tag.name }}</h2>
              <img :src="tag.img.url" height="70px" width="70px" />
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
  name: 'TagList',
  data() {
    return {
      page: 0,
      tags: [],
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
          process.env.TAG_URL,
          OPTIONS
        );
        // ページング
        if (contents.length > 0) {
          this.page++;
          this.tags.push(...contents);
          $state.loaded();
        } else {
          $state.complete();
          this.isLoad = false;
        }
      }
    },
    jump(tag) {
      // FIX:後でresult->tagに変更(pagesのresult/_keyも修正)
      this.$router.push(`../result/${tag.name}?id=${tag.id}`);
    }
  }
};
</script>
