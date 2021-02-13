import NavListItemPc from './NavListItemPc.vue';
import { dummyRoutes } from '@/__testdata__/testdata.js';

export default {
  title: 'Molecules/NavListItemPc',
  component: NavListItemPc,
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { NavListItemPc },
  template: '<nav-list-item-pc v-bind="$props" />'
});

export const Default = Template.bind({});
Default.args = { navItem: dummyRoutes[0] };
