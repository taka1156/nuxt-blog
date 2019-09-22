import Vue from 'vue';
import VueTyperPlugin from 'vue-typer';
import ArticleList from '@/components/ArticleList';
import HeadArea from '@/components/HeadArea';
import NaviBar from '@/components/NaviBar';
import layout from './layout.css';

Vue.use(layout);
Vue.use(VueTyperPlugin);
Vue.component('ArticleList', ArticleList);
Vue.component('HeadArea', HeadArea);
Vue.component('NaviBar', NaviBar);
