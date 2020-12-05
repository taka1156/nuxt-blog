<template>
  <div class="App">
    <the-navigation :logo-text="logoText" :routes="routes" />
    <transition name="slide-in-up" mode="out-in">
      <nuxt />
    </transition>
  </div>
</template>

<script>
import TheNavigation from '@/components/organisms/TheNavigation/TheNavigation';

export default {
  components: {
    'the-navigation': TheNavigation
  },
  data() {
    return {
      logoText: 'TakaTechBlog',
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

.slide-in-up-enter {
  opacity: 0;
  transform: translate(0, 100px);
}

.slide-in-up-enter-to {
  opacity: 1;
}

.slide-in-up-enter-active {
  transition: all 1s 0s ease;
}

.slide-in-up-leave {
  opacity: 1;
  transform: translate(0, 0);
}

.slide-in-up-leave-to {
  opacity: 0;
  transform: translate(0, -100px);
}

.slide-in-up-leave-active {
  transition: all 0.2s 0s ease;
}
</style>
