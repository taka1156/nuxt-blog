import NavListPc from './NavListPc.vue';
import { dummyRoutes } from '@/__testdata__/testdata.js';

export default {
  title: 'Molecules/NavListPc',
  component: NavListPc,
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { NavListPc },
  template: '<nav-list-pc v-bind="$props" />'
});

export const Default = Template.bind({});
Default.args = { routes: dummyRoutes };
