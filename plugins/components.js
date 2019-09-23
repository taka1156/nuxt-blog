import Vue from 'vue';
import VueTyperPlugin from 'vue-typer';
import HeadArea from '@/components/HeadArea';
import NaviBar from '@/components/NaviBar';
import p5bg from '@/components/p5-bgimage';
import layout from './layout.css';

Vue.use(layout);
Vue.use(VueTyperPlugin);
Vue.component('HeadArea', HeadArea);
Vue.component('NaviBar', NaviBar);
Vue.component('p5bg', p5bg);
