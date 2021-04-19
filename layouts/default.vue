<template>
  <div class="App">
    <header>
      <client-only>
        <the-navigation :logo-text="logoText" :routes="routes" />
      </client-only>
    </header>
    <div class="container">
      <main>
        <transition name="slide-in-up" mode="out-in">
          <nuxt />
        </transition>
      </main>
      <footer>
        <the-copyright :copyright-url="copyrightUrl" />
      </footer>
    </div>
  </div>
</template>

<script>
import TheNavigation from '@/components/organisms/TheNavigation/TheNavigation';
import TheCopyright from '@/components/organisms/TheCopyright/TheCopyright';
import { LOGO_TEXT, ROUTES, COPYRIGHT_URL } from '../constants/index.js';

export default {
  components: {
    TheNavigation,
    TheCopyright
  },
  data() {
    return {
      logoText: LOGO_TEXT,
      routes: ROUTES,
      copyrightUrl: COPYRIGHT_URL
    };
  }
};
</script>

<style scoped>
/* css reset */
header,
footer {
  padding: 0;
  margin: 0;
}

/* css reset */

.App {
  text-align: center;
}

.container {
  margin: 70px auto 0;
}

main {
  min-height: 90vh;
  padding: 0;
  margin: 0 auto;
}

@media screen and (min-width: 768px) {
  main {
    width: 80vw;
  }
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
