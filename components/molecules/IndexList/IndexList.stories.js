import IndexList from './IndexList.vue';
import { dummyTocs } from '@/__testdata__/testdata.js';

export default {
  title: 'Molecules/IndexList',
  component: IndexList,
  argTypes: {
    isOpen: {
      control: {
        type: 'boolean'
      }
    }
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { IndexList },
  template: '<index-list v-bind="$props" />'
});

export const Default = Template.bind({});
Default.args = { isOpen: false, tocs: dummyTocs };
