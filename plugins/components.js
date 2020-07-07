import Vue from 'vue';

import NavBar from '@/components/NavBar';
import AricleList from '@/components/ArticleList';
import layout from './layout.css';

Vue.use(layout);
Vue.component('nav-bar', NavBar);
Vue.component('article-list', AricleList);
