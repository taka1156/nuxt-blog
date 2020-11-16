import NavList from '../NavList.vue';
import { dummyRoutes } from '@/testdata/testdata.js';

export default {
  title: 'Molecules/Nav/NavList',
  component: NavList,
  argTypes: {
    isOpen: {
      control: {
        type: 'boolean'
      }
    }
  },
  parameters: {
    notes: {
      summary: 'ナビゲーションリスト'
    }
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { NavList },
  template: '<nav-list v-bind="$props" />'
});

export const Default = Template.bind({});
Default.args = { isOpen: false, routes: dummyRoutes };
