import NavBar from '../NavBar.vue';
import { dummyLogo } from '@/testdata/testdata.js';

export default {
  title: 'Molecules/Nav/NavBar',
  component: NavBar,
  argTypes: {
    isOpen: {
      control: {
        type: 'boolean'
      }
    }
  },
  parameters: {
    notes: {
      summary: 'ナビゲーションバー'
    }
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { NavBar },
  template: '<nav-bar v-bind="$props" />'
});

export const Default = Template.bind({});
Default.args = { isOpen: false, logoText: dummyLogo };
