import ArticleDate from './ArticleDate.vue';
import { dummyDate } from '@/__testdata__/testdata.js';

export default {
  title: 'Molecules/ArticleDate',
  component: ArticleDate
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ArticleDate },
  template: '<article-date v-bind="$props" />'
});

export const Default = Template.bind({});
Default.args = dummyDate;
