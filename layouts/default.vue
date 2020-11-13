<template>
  <div class="App">
    <blog-navigation :logo-text="logoText" :routes="routes" />
    <transition name="go-up" mode="out-in">
      <nuxt />
    </transition>
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

.go-up-enter {
  transform: translate(0, 100px);
  opacity: 0;
}

.go-up-enter-to {
  opacity: 1;
}

.go-up-enter-active {
  transition: all 1s 0s ease;
}

.go-up-leave {
  transform: translate(0, 0);
  opacity: 1;
}

.go-up-leave-to {
  transform: translate(0, -100px);
  opacity: 0;
}

.go-up-leave-active {
  transition: all 0.2s 0s ease;
}
</style>
