import 'normalize.css'
import Vue from 'vue';
import VueLazyLoad from 'vue-lazyload'
import VueScrollTo from 'vue-scrollto'
Vue.use(VueLazyLoad);
Vue.use(VueScrollTo);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: 'centered'
}

