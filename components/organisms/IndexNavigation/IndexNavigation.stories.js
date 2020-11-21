import IndexNavigation from './IndexNavigation.vue';
import { dummyTocs } from '@/__testdata__/testdata.js';

export default {
  title: 'Organisms/IndexNavigation',
  component: IndexNavigation
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { IndexNavigation },
  template: '<index-navigation v-bind="$props" />'
});

export const Default = Template.bind({});
Default.args = {
  toc: dummyTocs
};
