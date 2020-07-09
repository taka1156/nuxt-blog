const POSTS_PER_PAGE = 10; // 10件ずつ取得

export default {
  data() {
    return {
      POSTS_PER_PAGE: 10,
      query: {
        fields: '',
        filters: '',
        limit: POSTS_PER_PAGE,
        offset: 0
      }
    };
  }
};
