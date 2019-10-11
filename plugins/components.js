import Vue from 'vue';
import InfiniteLoading from 'vue-infinite-loading';
import Header from '@/components/Header';
import NaviBar from '@/components/NaviBar';
import AricleList from '@/components/ArticleList';
import p5bg from '@/components/p5-bgimage';
import layout from './layout.css';

Vue.use(layout);
Vue.use(InfiniteLoading);
Vue.component('Header', Header);
Vue.component('NaviBar', NaviBar);
Vue.component('ArticleList', AricleList);
Vue.component('p5bg', p5bg);
