import IndexListItem from './IndexListItem.vue';
import { dummyTocs } from '__testdata__/testdata.js';

export default {
  title: 'Molecules/IndexListItem',
  component: IndexListItem,
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { IndexListItem },
  template: '<index-list-item v-bind="$props" />'
});

export const Default = Template.bind({});
Default.args = { t: dummyTocs[0] };
