import NavBarPc from './NavBarPc.vue';
import { dummyLogo, dummyRoutes } from '@/__testdata__/testdata.js';

export default {
  title: 'Molecules/NavBarPc',
  component: NavBarPc
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { NavBarPc },
  template: '<nav-bar-pc v-bind="$props" />'
});

export const Default = Template.bind({});
Default.args = { logoText: dummyLogo, routes: dummyRoutes };
