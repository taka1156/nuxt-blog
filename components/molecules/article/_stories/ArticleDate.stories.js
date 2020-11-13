import ArticleDate from '../ArticleDate.vue';
import { dummyDate } from '@/testdata/testdata.js';

export default {
  title: 'Molecules/Article/ArticleDate',
  component: ArticleDate,
  parameters: {
    notes: {
      summary: '日付'
    }
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ArticleDate },
  template: '<article-date v-bind="$props" />'
});

export const Default = Template.bind({});
Default.args = dummyDate;
