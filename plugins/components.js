import Vue from 'vue';
import InfiniteLoading from 'vue-infinite-loading';
import NaviBar from '@/components/NaviBar';
import AricleList from '@/components/ArticleList';
import layout from './layout.css';

Vue.use(layout);
Vue.use(InfiniteLoading);
Vue.component('NaviBar', NaviBar);
Vue.component('ArticleList', AricleList);
