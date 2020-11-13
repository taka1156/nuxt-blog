<template>
  <div class="App">
    <blog-navigation :logo-text="logoText" :routes="routes" />
    <nuxt />
  </div>
</template>

<script>
import BlogNavigation from '@/components/organisms/nav/BlogNavigation';

export default {
  components: {
    'blog-navigation': BlogNavigation
  },
  data() {
    return {
      logoText: "Taka'sTechBlog",
      routes: [
        {
          name: 'Top',
          to: '/',
          img: require('assets/img/ui/home.svg')
        },
        {
          name: 'Category',
          to: '/categories',
          img: require('assets/img/ui/category.svg')
        },
        {
          name: 'Tag',
          to: '/tags',
          img: require('assets/img/ui/tag.svg')
        },
        {
          name: 'Profile',
          to: '/profile',
          img: require('assets/img/ui/profile.svg')
        }
      ]
    };
  }
};
</script>

<style scoped>
.App {
  text-align: center;
}
</style>
