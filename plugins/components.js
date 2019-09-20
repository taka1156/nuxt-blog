import Vue from 'vue';
import VueTyperPlugin from 'vue-typer';
import ArticleList from '@/components/ArticleList';
import HeadArea from '@/components/HeadArea';

Vue.use(VueTyperPlugin);
Vue.component('ArticleList', ArticleList);
Vue.component('HeadArea', HeadArea);
