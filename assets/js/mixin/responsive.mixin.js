export default {
  data() {
    return {
      isMobile: false
    };
  },
  created() {
    // 初回実行
    this.checkMobile();
  },
  mounted() {
    // リサイズを検出して、その度にウィンドウサイズを確認
    window.addEventListener('resize', () => {
      this.checkMobile();
    });
  },
  methods: {
    checkMobile() {
      this.isMobile = window.matchMedia('(max-width:800px)').matches;
    }
  }
};
