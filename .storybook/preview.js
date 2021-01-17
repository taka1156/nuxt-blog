import 'normalize.css';
import '@/assets/css/layout.css';
import Vue from 'vue';
import VueLazyLoad from 'vue-lazyload';
import VueScrollTo from 'vue-scrollto';
import { action } from '@storybook/addon-actions';

Vue.use(VueLazyLoad);
Vue.use(VueScrollTo);
Vue.component('nuxt-link', {
  props: ['to'],
  methods: {
    log() {
      action('link target')(this.to);
    }
  },
  template: '<a href="#" @click.prevent="log()"><slot>NuxtLink</slot></a>'
});

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  layout: 'centered'
};
