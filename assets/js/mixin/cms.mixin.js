const POSTS_PER_PAGE = 10; // 10件ずつ取得

export default {
  data() {
    return {
      page: 0,
      isLoaded: false
    };
  },
  computed: {
    pageIndex() {
      return this.page * POSTS_PER_PAGE;
    }
  },
  methods: {
    async infiniteHandler($state) {
      if (!this.isLoaded) {
        const OPTIONS = {
          fields: this.fields,
          filters: this.filter || '',
          limit: POSTS_PER_PAGE,
          offset: this.pageIndex
        };
        // コンテンツの取得
        const contents = await this.$getContents(
          process.env.MICRO_CMS_KEY,
          this.url,
          OPTIONS
        );
        // ページング
        if (contents.length > 0) {
          this.page++;
          this.posts.push(...contents);
          $state.loaded();
        } else {
          $state.complete();
          this.isLoaded = true;
        }
      }
    }
  }
};
