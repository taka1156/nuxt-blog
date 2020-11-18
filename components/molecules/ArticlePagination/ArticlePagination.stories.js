import ArticlePagination from './ArticlePagination.vue';
import { dummyPagination } from '@/__testdata__/testdata.js';

export default {
  title: 'Molecules/ArticlePagination',
  component: ArticlePagination
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ArticlePagination },
  template: '<article-pagination v-bind="$props" />'
});

export const Default = Template.bind({});
Default.args = dummyPagination;
