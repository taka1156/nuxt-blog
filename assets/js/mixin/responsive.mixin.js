export default {
  data() {
    return {
      isMobile: false
    };
  },
  mounted() {
    window.addEventListener('resize', () => {
      this.isMobile = window.matchMedia('(max-width:800px)').matches;
    });
  }
};
