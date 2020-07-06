import Vue from 'vue';
import InfiniteLoading from 'vue-infinite-loading';
import NavBar from '@/components/NavBar';
import AricleList from '@/components/ArticleList';
import layout from './layout.css';

Vue.use(layout);
Vue.use(InfiniteLoading);
Vue.component('nav-bar', NavBar);
Vue.component('article-list', AricleList);
