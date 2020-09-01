<template>
  <div class="App">
    <nav-bar :logo-text="logoText" :routes="routes" />
    <nuxt />
  </div>
</template>

<script>
import NavBar from '@/components/organisms/BaseNav';

export default {
  components: {
    'nav-bar': NavBar
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
          to: '/category',
          img: require('assets/img/ui/category.svg')
        },
        {
          name: 'Tag',
          to: '/tag',
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
