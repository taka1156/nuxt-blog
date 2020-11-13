import ArticleListItem from '../ArticleListItem.vue';
import { dummyArticles } from '@/testdata/testdata.js';

export default {
  title: 'Molecules/List/ArticleListItem',
  component: ArticleListItem,
  parameters: {
    notes: {
      summary: '記事一覧ひとつ分'
    }
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ArticleListItem },
  template: '<article-list-item v-bind="$props" />'
});

export const Default = Template.bind({});
Default.args = { article: dummyArticles[0] };